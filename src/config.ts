import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAGoKtMsO_Gza0qGtu4dlUBI_vbGsvh4hM",
    authDomain: "memoapp-338c5.firebaseapp.com",
    projectId: "memoapp-338c5",
    storageBucket: "memoapp-338c5.firebasestorage.app",
    messagingSenderId: "874470019060",
    appId: "1:874470019060:web:48c6e823e5a619af0db3a1"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const db = getFirestore(app)

export { app, auth, db }
