// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC-nHbA_aA9vaevDNSPmN-877u2rjerblM',
    authDomain: 'lazy-chat-app.firebaseapp.com',
    databaseURL: 'https://lazy-chat-app.firebaseio.com',
    projectId: 'lazy-chat-app',
    storageBucket: 'lazy-chat-app.appspot.com',
    messagingSenderId: '756689809713'

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
