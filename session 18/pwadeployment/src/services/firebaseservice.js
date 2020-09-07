import firebase from 'firebase';
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
  const messaging = firebase.messaging();


export function initNotification(){
    Notification.requestPermission().then((permission) =>{
        console.log(permission)
        if (permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                  console.log("TOKEN=>", currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');
                
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              
              });
              
        }
    })
}