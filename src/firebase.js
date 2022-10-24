import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCa90G5nnc8FUEqPRu7k_ZemOgFITeIe5k",
  authDomain: "firechat2000.firebaseapp.com",
  projectId: "firechat2000",
  storageBucket: "firechat2000.appspot.com",
  messagingSenderId: "798212147576",
  appId: "1:798212147576:web:e21cefd8d6ea539a47e08d",
  measurementId: "G-WPXN8J4QN7",
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
