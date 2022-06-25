import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  signOut,
  User,
} from 'firebase/auth';

function listenToAuth<Type>(
  callback: (user: User | null) => void,
  component: Type
) {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => callback.call(component, user));
}

function anonymousSignIn() {
  const auth = getAuth();
  return signInAnonymously(auth);
}

function logOut() {
  const auth = getAuth();
  return signOut(auth);
}

export { anonymousSignIn, logOut, listenToAuth };
