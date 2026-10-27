import { initializeApp } from "firebase/app";
import { initializeAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";

const username = "useradmin";
const email = process.env.TEST_ADMIN_EMAIL || "useradmin@example.com";
const password = process.env.TEST_ADMIN_PASSWORD;

const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    appId: process.env.VITE_FIREBASE_APP_ID,
};

const missingConfig = Object.entries(firebaseConfig)
    .filter(([, value]) => !value)
    .map(([key]) => key);

if (missingConfig.length) {
    console.error(`Missing Firebase config: ${missingConfig.join(", ")}. Fill Front-end/.env.local first.`);
    process.exit(1);
}

if (!password) {
    console.error("Set TEST_ADMIN_PASSWORD in Front-end/.env.local before running this script.");
    process.exit(1);
}

if (password.length < 6) {
    console.error("TEST_ADMIN_PASSWORD must be at least 6 characters for Firebase Auth.");
    process.exit(1);
}

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, { persistence: [] });
const db = getFirestore(app);

try {
    let credential;
    try {
        credential = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        if (error.code !== "auth/email-already-in-use") throw error;
        credential = await signInWithEmailAndPassword(auth, email, password);
    }

    await setDoc(doc(db, "usuarios", credential.user.uid), {
        username,
        email,
        createdAt: serverTimestamp(),
    }, { merge: true });

    console.log(`Test login is ready: username "${username}" (${email}).`);
    console.log("Use the password you set in TEST_ADMIN_PASSWORD to log in.");
} catch (error) {
    console.error("Could not create or prepare the Firebase test user.");
    console.error(`Firebase error: ${error.code || error.message}`);
    if (error.code === "permission-denied") {
        console.error("Allow the signed-in user to create/update their own usuarios/{uid} profile in Firestore rules.");
    }
    process.exitCode = 1;
} finally {
    await auth.signOut();
}
