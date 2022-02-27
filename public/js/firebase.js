let firebaseConfig = {
    apiKey: "AIzaSyCf_uZcwh0BLBwJsXWnSrdOdowGGY5KhdE",
  authDomain: "blogging-64e9e.firebaseapp.com",
  projectId: "blogging-64e9e",
  storageBucket: "blogging-64e9e.appspot.com",
  messagingSenderId: "148992610930",
  appId: "1:148992610930:web:215c6fd6f0b17adbfbe8eb"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();