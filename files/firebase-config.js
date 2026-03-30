// ════════════════════════════════════════════════════════════════
// MENTOR ME TUTOR — Firebase Configuration
// ════════════════════════════════════════════════════════════════
// HOW TO FILL THIS IN:
//  1. Go to https://console.firebase.google.com
//  2. Click your project → gear icon → Project Settings
//  3. Scroll to "Your apps" → click your web app → SDK setup
//  4. Copy each value from firebaseConfig and paste below
// ════════════════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
  apiKey:            "PASTE_apiKey_HERE",
  authDomain:        "PASTE_authDomain_HERE",
  projectId:         "PASTE_projectId_HERE",
  storageBucket:     "PASTE_storageBucket_HERE",
  messagingSenderId: "PASTE_messagingSenderId_HERE",
  appId:             "PASTE_appId_HERE"
};

// ── Initialise Firebase ───────────────────────────────────────
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}
const db   = typeof firebase !== 'undefined' ? firebase.firestore() : null;
const auth = typeof firebase !== 'undefined' ? firebase.auth()      : null;
function fbReady() { return db !== null && FIREBASE_CONFIG.apiKey !== "PASTE_apiKey_HERE"; }
