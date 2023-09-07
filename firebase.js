import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_KEY } from "@env";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "gamenoti-app-41175.firebaseapp.com",
  projectId: "gamenoti-app-41175",
  storageBucket: "gamenoti-app-41175.appspot.com",
  messagingSenderId: "758961027442",
  appId: "1:758961027442:web:860d4bf1c37eed1ad8c5eb",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const authInstance = getAuth(app);

export { db, auth, authInstance };
