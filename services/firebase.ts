import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const api: string = process.env.NEXT_PUBLIC_FIREBASE_API as string;
const auth: string = process.env.NEXT_PUBLIC_FIREBASE_DOMAIN as string;
const id: string = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string;
// const dbUrl: string = process.env.NEXT_PUBLIC_FIREBASE_DB_URL as string;
const storageBucket: string = process.env
  .NEXT_PUBLIC_FIREBASE_STORAGE as string;
const messagingSenderId: string = process.env
  .NEXT_PUBLIC_FIREBASE_SENDER_ID as string;
const appId: string = process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string;
const measurementId: string = process.env
  .NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID as string;

const firebaseConfig = {
  apiKey: api,
  authDomain: auth,
  projectId: id,
  // databaseURL: dbUrl,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

const firebaseApp = initializeApp(firebaseConfig);
const store = getFirestore(firebaseApp);

export { firebaseApp, store };
