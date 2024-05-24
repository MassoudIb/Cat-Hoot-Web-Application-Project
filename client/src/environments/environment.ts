// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    // serverUrl: 'ec2-35-183-205-174.ca-central-1.compute.amazonaws.com:3000',
    serverUrl: 'http://localhost:3000',
    databaseRandomQuizzesUrl: 'http://localhost:3000/api/quiz/quiz-examples/random-quiz',
    databaseQuizzesUrl: 'http://ec2-35-183-205-174.ca-central-1.compute.amazonaws.com:3000/api/quiz/quiz-examples',
    databaseQuestionsUrl: 'http://ec2-35-183-205-174.ca-central-1.compute.amazonaws.com:3000/api/quiz/question-examples',
    jsonUrl: 'http://ec2-35-183-205-174.ca-central-1.compute.amazonaws.com:3000/api/quiz/quiz-example',
    passwordUrl: 'http://ec2-35-183-205-174.ca-central-1.compute.amazonaws.com:3000/api/auth/verifyPassword',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
