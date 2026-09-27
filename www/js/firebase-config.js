// ============================================================
// Firebase setup — shared by login.html and index.html
// ============================================================
// This apiKey is NOT a secret. Firebase's apiKey just identifies
// which project your app is talking to — it's meant to be public
// and is safe to commit to GitHub. Real security comes from the
// Firestore rules (who can read/write what) and Firebase
// Authentication, not from hiding this key.
const firebaseConfig = {
    apiKey: "AIzaSyCaG8_0kt8xBIi6PUz8n1aEjfTSeplfsdo",
    authDomain: "falle-studentprofile.firebaseapp.com",
    projectId: "falle-studentprofile",
    storageBucket: "falle-studentprofile.firebasestorage.app",
    messagingSenderId: "640090024953",
    appId: "1:640090024953:web:7f2628a2eac701f072eb28"
};

firebase.initializeApp(firebaseConfig);

// These two are used everywhere else (login.js, profile.js)
const auth = firebase.auth();
const db = firebase.firestore();
