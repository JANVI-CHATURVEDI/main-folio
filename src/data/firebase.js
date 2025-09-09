import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIG12EPPDGPoyuHzCg570fHsaCHupGAYk",
  authDomain: "portfolio-visitors-55951.firebaseapp.com",
  projectId: "portfolio-visitors-55951",
  storageBucket: "portfolio-visitors-55951.firebasestorage.app",
  messagingSenderId: "117164332397",
  appId: "1:117164332397:web:80ee31118a5c68a212f664",
  measurementId: "G-ZEEPDLFM0Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Function to increment and fetch visitor count
export async function incrementVisitors() {
  const docRef = doc(db, "stats", "visitors");
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    // Create the document if it doesn't exist
    await setDoc(docRef, { count: 1 });
    return 1;
  } else {
    // Increment the existing count
    await updateDoc(docRef, { count: increment(1) });
    const updatedDoc = await getDoc(docRef);
    return updatedDoc.data().count;
  }
}
