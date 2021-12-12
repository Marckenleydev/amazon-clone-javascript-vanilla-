var firebaseConfig = {
    apiKey: "AIzaSyB0zw6iRk7v3cbEMqIE6MY4a4UGR195gZ4",
    authDomain: "clone-app-a3f4f.firebaseapp.com",
    projectId: "clone-app-a3f4f",
    storageBucket: "clone-app-a3f4f.appspot.com",
    messagingSenderId: "480466642047",
    appId: "1:480466642047:web:1223474bc2bd4a21430b4a",
    measurementId: "G-BNL184182X"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   firebase.analytics();
 
   var db = firebase.firestore();
   