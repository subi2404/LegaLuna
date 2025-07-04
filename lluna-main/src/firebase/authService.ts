import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  User 
} from "firebase/auth";
import { auth } from "./firebase";  // Ensure Firebase is initialized in firebase.ts

/**
 * Sign up a new user with email and password
 * @param email - User email
 * @param password - User password
 * @returns Firebase User object
 */
export const signUpWithEmail = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error((error as any).message);
  }
};

/**
 * Log in an existing user with email and password
 * @param email - User email
 * @param password - User password
 * @returns Firebase User object
 */
export const loginWithEmail = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error((error as any).message);
  }
};

/**
 * Log out the current user
 * @returns void
 */
export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
