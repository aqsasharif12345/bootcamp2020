importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAbfTIjqi51ZI5m2e-YBtQX5FLfEOaJqMc",
    authDomain: "notificationapp-bcd97.firebaseapp.com",
    databaseURL: "https://notificationapp-bcd97.firebaseio.com",
    projectId: "notificationapp-bcd97",
    storageBucket: "notificationapp-bcd97.appspot.com",
    messagingSenderId: "722190803432",
    appId: "1:722190803432:web:230852a81b272d25a4445d"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();