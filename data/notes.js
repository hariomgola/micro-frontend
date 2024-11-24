const data = () => `
 - ng new micro-frontend --createApplication="false"
 - ng g application host-app
 - npm i webpack webpack-cli --save-dev
 - ng add @angular-architects/module-federation --project host-app --port 4200
`;
