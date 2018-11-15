// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBghnH1T9uTUQy7v9TQoBtkKK5OOWAkPEc',
    authDomain: 'moto-code.firebaseapp.com',
    databaseURL: 'https://moto-code.firebaseio.com',
    projectId: 'moto-code',
    storageBucket: 'moto-code.appspot.com',
    messagingSenderId: '280330493005'
  }
};
