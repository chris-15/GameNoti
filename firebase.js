import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_KEY } from "@env"

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "game-noti-app.firebaseapp.com",
  projectId: "game-noti-app",
  storageBucket: "game-noti-app.appspot.com",
  messagingSenderId: "678749832947",
  appId: "1:678749832947:web:1ebf073fe57f46cada1986"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const authInstance = getAuth(app);

export { db, auth, authInstance};