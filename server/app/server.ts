import { Application } from '@app/app';
import * as http from 'http';
import { AddressInfo } from 'net';
import { Service } from 'typedi';
import { dbService } from './services/database.service';
import { SocketManager } from './services/socket-manager.service';
// eslint-disable-next-line @typescript-eslint/no-require-imports
import path = require('path'); // 'path' can only be imported by using 'import path = require("path")

@Service()
export class Server {
    private static readonly appPort: string | number | boolean = Server.normalizePort(process.env.PORT || '3000');
    private static readonly baseDix: number = 10;
    private server: http.Server;
    private socketManager: SocketManager;
    private jsonPathQuizzes = path.join(__dirname + '../../../../assets/quiz-examples.json');
    private jsonPathQuestions = path.join(__dirname + '../../../../assets/question-examples.json');

    constructor(private readonly application: Application) {}

    private static normalizePort(val: number | string): number | string | boolean {
        const port: number = typeof val === 'string' ? parseInt(val, this.baseDix) : val;
        return isNaN(port) ? val : port >= 0 ? port : false;
    }
    init(): void {
        // eslint-disable-next-line no-console
        console.log('Current working directory:', process.cwd());
        this.application.app.set('port', Server.appPort);

        this.server = http.createServer(this.application.app);

        this.socketManager = new SocketManager(this.server);
        this.socketManager.handleSockets();

        this.server.listen(Server.appPort);
        this.server.on('error', (error: NodeJS.ErrnoException) => this.onError(error));
        this.server.on('listening', () => this.onListening());
        dbService.connectToServer('mongodb+srv://log92251:Aq0FpE56FljP8ajv@cluster2990.xv7lq50.mongodb.net/?retryWrites=true&w=majority').then(() => {
            dbService.populateDb('Quizzes', this.jsonPathQuizzes);
            dbService.populateDb('Questions', this.jsonPathQuestions);
        });
    }

    private onError(error: NodeJS.ErrnoException): void {
        if (error.syscall !== 'listen') {
            throw error;
        }
        const bind: string = typeof Server.appPort === 'string' ? 'Pipe ' + Server.appPort : 'Port ' + Server.appPort;
        switch (error.code) {
            case 'EACCES':
                // eslint-disable-next-line no-console
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                // eslint-disable-next-line no-console
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    /**
     * Se produit lorsque le serveur se met à écouter sur le port.
     */
    private onListening(): void {
        const addr = this.server.address() as AddressInfo;
        const bind: string = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
        // eslint-disable-next-line no-console
        console.log(`Listening on ${bind}`);
    }
}
