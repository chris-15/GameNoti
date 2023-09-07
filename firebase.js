import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_KEY } from "@env"

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "gamenoti-app.firebaseapp.com",
  projectId: "gamenoti-app",
  storageBucket: "gamenoti-app.appspot.com",
  messagingSenderId: "580731828795",
  appId: "1:580731828795:web:c2afd413742f431b10ba1e",
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const authInstance = getAuth(app);

export { db, auth, authInstance};