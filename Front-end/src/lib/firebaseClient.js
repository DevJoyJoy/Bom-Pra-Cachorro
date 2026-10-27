import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

let firebaseClient;

export const getFirebaseClient = () => {
    if (firebaseClient) return firebaseClient;

    const config = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    };
    const requiredFields = ["apiKey", "authDomain", "projectId", "appId"];
    const missingFields = requiredFields.filter((field) => !config[field]);

    if (missingFields.length) {
        throw new Error(`Firebase config is missing: ${missingFields.join(", ")}. Set the VITE_FIREBASE_* values in Front-end/.env.local.`);
    }

    const app = getApps().length ? getApp() : initializeApp(config);
    firebaseClient = {
        app,
        auth: getAuth(app),
        db: getFirestore(app),
        storage: config.storageBucket ? getStorage(app) : null,
    };

    return firebaseClient;
};
