// ════════════════════════════════════════════════════════════════
// MENTOR ME TUTOR — Firebase Configuration
// ════════════════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyBKdsnNGXyvMDlMfYXj2r7OZTBWneCGOwM",
  authDomain:        "mentormetutor.firebaseapp.com",
  projectId:         "mentormetutor",
  storageBucket:     "mentormetutor.firebasestorage.app",
  messagingSenderId: "336889642762",
  appId:             "1:336889642762:web:427ccbdb6873e3bdaac4f3",
  measurementId:     "G-QKXWRRCZXW"
};

// ── Initialise Firebase ───────────────────────────────────────
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}
const db   = typeof firebase !== 'undefined' ? firebase.firestore() : null;
const auth = typeof firebase !== 'undefined' ? firebase.auth()      : null;
function fbReady() { return db !== null && auth !== null; }
