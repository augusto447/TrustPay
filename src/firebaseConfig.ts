// firebaseConfig.ts ou firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyARg9vLXd0y4eU3KfUSmLZrNn-HGPABNAU",
  authDomain: "trustpay-44d1c.firebaseapp.com",
  projectId: "trustpay-44d1c",
  storageBucket: "trustpay-44d1c.appspot.com", // corrigi aqui
  messagingSenderId: "763563685447",
  appId: "1:763563685447:web:c5de6af78a4914dc806362",
  // measurementId: "G-ZSXT3W148T" // opcional, pode remover
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Configurar Auth do Google
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
