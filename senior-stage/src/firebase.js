// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCoyfeZLq91Gr8nCTAaJsmrj1lxcmN6o9o",
	authDomain: "seniorstg-38a10.firebaseapp.com",
	projectId: "seniorstg-38a10",
	storageBucket: "seniorstg-38a10.firebasestorage.app",
	messagingSenderId: "794638890411",
	appId: "1:794638890411:web:3d7b802f94f661cda88eee",
	measurementId: "G-HYBNJ6ZWGK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Firebase 인증 객체 생성

// Export both app and auth
export { app, auth };
