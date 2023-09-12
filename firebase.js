import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
  arrayUnion
} from "firebase/firestore";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_KEY } from "@env";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "game-noti-app-adda1.firebaseapp.com",
  projectId: "game-noti-app-adda1",
  storageBucket: "game-noti-app-adda1.appspot.com",
  messagingSenderId: "478896764814",
  appId: "1:478896764814:web:04c1a5f46ac30b552456df",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const authInstance = getAuth(app);

//adds user to the firestore
const addUser = async (userUID, displayName, email) => {
  try {
    const usersCollection = collection(db, "users");

    await setDoc(doc(usersCollection, userUID), {
      displayName: displayName,
      email: email,
      friends: [],
    });
  } catch (error) {
    console.error("Error adding user to Firestore:", error);
  }
};

//adds friend to user collection
const addFriend = async (userUID, friendUID) => {
  try {
    const usersCollection = collection(db, "users");
    const userDoc = doc(usersCollection, userUID);

    await updateDoc(userDoc, {
      friends: arrayUnion(friendUID),
    });
  } catch (error) {
    console.error("Error adding friend to Firestore:", error);
  }
};

export { db, auth, authInstance, addUser, addFriend };
