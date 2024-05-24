export const environment = {
    production: true,
    serverUrl: 'ec2-35-183-205-174.ca-central-1.compute.amazonaws.com:3000', // TODO: Add remote server URL
    databaseRandomQuizzesUrl: 'http://ec2-35-183-205-174.ca-central-1.compute.amazonaws.com:3000/api/quiz/quiz-examples/random-quiz',
    databaseQuizzesUrl: 'http://ec2-35-183-205-174.ca-central-1.compute.amazonaws.com:3000/api/quiz/quiz-examples',
    databaseQuestionsUrl: 'http://ec2-35-183-205-174.ca-central-1.compute.amazonaws.com:3000/api/quiz/question-examples',
    jsonUrl: 'http://ec2-35-183-205-174.ca-central-1.compute.amazonaws.com:3000/api/quiz/quiz-example',
    passwordUrl: 'http://ec2-35-183-205-174.ca-central-1.compute.amazonaws.com:3000/api/auth/verifyPassword',
    validateAnswerUrl: 'http://ec2-35-183-205-174.ca-central-1.compute.amazonaws.com:3000/api/quiz/validate-answer',
    databaseHistoryUrl: 'http://ec2-35-183-205-174.ca-central-1.compute.amazonaws.com:3000/api/quiz/game-history',
};
