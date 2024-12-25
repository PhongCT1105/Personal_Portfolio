// src/utils/firebaseUtils.ts
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure this points to your Firebase config file

/**
 * Updates the visitor count in Firestore.
 * - Increments the visitor count in the `stats/visitorCount` document.
 * - Returns the updated visitor count.
 */
export const updateVisitorCount = async (): Promise<number> => {
  try {
    const docRef = doc(db, 'stats', 'visitorCount'); // Reference to the document
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const currentCount = docSnap.data().count || 0; // Get the current count
      await updateDoc(docRef, { count: currentCount + 1 }); // Increment the count
      return currentCount + 1; // Return the updated count
    } else {
      // Initialize the count if the document doesn't exist
      await setDoc(docRef, { count: 1 });
      return 1; // Return initial count
    }
  } catch (error) {
    console.error('Error updating visitor count:', error);
    throw error;
  }
};
