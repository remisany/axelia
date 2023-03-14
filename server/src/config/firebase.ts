import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    databaseURL: process.env.FB_DATABASE_URL,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_API_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)