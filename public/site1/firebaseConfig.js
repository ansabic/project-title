  // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
  apiKey: "AIzaSyDuxXlMaN6NupCXYh3llakOvbORELffjt8",
  authDomain: "apartmanitest-21ee1.firebaseapp.com",
  projectId: "apartmanitest-21ee1",
  storageBucket: "apartmanitest-21ee1.appspot.com",
  messagingSenderId: "47516707943",
  appId: "1:47516707943:web:e861af5c74d6adc636f8c2",
  measurementId: "G-HSG40MQX02"
  };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);