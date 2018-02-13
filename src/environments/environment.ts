// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDBD8gyKOzvqkNuwbv2kAXjXz4oKlIeuPc",
    authDomain: "sambot-d92d3.firebaseapp.com",
    databaseURL: "https://sambot-d92d3.firebaseio.com",
    projectId: "sambot-d92d3",
    storageBucket: "sambot-d92d3.appspot.com",
    messagingSenderId: "482273183967"
  }
};
