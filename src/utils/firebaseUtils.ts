import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
  collection,
  addDoc,
  increment,
} from 'firebase/firestore';
import { db } from '../firebase'; // Ensure this points to your Firebase config file

/**
 * Ensures the document exists; creates it if it doesn't.
 */
const ensureDocumentExists = async <T extends Record<string, unknown>>(
  collectionPath: string,
  documentId: string,
  initialData: T = {} as T
): Promise<void> => {
  const docRef = doc(db, collectionPath, documentId);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    await setDoc(docRef, initialData);
  }
};

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
      await updateDoc(docRef, { count: increment(1) }); // Increment the count
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

/**
 * Tracks the duration of time spent in a section.
 * - Logs the duration event in the `durationTracking` collection for detailed records.
 * - Updates the total time spent for the section in the `durationTrackingStats` collection.
 */
export const trackDurationViewTime = async (
  section: string,
  duration: number
): Promise<void> => {
  try {
    // Ensure the section stats document exists
    await ensureDocumentExists('durationTrackingStats', section, {
      totalTime: 0,
    });

    // Update the total time spent for this section
    const docRef = doc(db, 'durationTrackingStats', section);
    await updateDoc(docRef, {
      totalTime: increment(duration),
    });

    console.log(
      `Duration updated in durationTrackingStats for section: ${section}, incremented by: ${duration}s`
    );
  } catch (error) {
    console.error('Error tracking duration view time:', error);
    throw error;
  }
};

/**
 * Tracks project-specific interactions in Firebase.
 * @param projectName - The name of the project being interacted with.
 */
export const trackProjectInteraction = async (
  projectName: string
): Promise<void> => {
  try {
    const docRef = doc(db, 'projectTracking', projectName);
    const docSnap = await getDoc(docRef);

    // Ensure the document exists, or create it
    if (!docSnap.exists()) {
      await setDoc(docRef, { interactions: 0 });
    }

    // Increment the interaction count
    await updateDoc(docRef, {
      interactions: increment(1),
    });

    console.log(`Interaction tracked for project: ${projectName}`);
  } catch (error) {
    console.error('Error tracking project interaction:', error);
  }
};

/**
 * Tracks category-specific interactions in Firebase.
 * @param categoryName - The name of the category being interacted with.
 */
export const trackCategoryInteraction = async (
  categoryName: string
): Promise<void> => {
  try {
    const docRef = doc(db, 'categoryTracking', categoryName);
    const docSnap = await getDoc(docRef);

    // Ensure the document exists, or create it
    if (!docSnap.exists()) {
      await setDoc(docRef, { interactions: 0 });
    }

    // Increment the interaction count
    await updateDoc(docRef, {
      interactions: increment(1),
    });

    console.log(`Category interaction tracked: ${categoryName}`);
  } catch (error) {
    console.error('Error tracking category interaction:', error);
  }
};

/**
 * Tracks "Download Resume" interactions in Firestore.
 */
export const trackResumeDownload = async (): Promise<void> => {
  try {
    const docRef = doc(db, 'resumeClicks');
    await updateDoc(docRef, { count: increment(1) });
    console.log('Resume download tracked');
  } catch (error) {
    console.error('Error tracking resume download:', error);
  }
};

/**
 * Tracks a button click for a specific section.
 * - Logs the button click event in the `analytics` collection.
 */
export const trackButtonClick = async (
  section: string,
  buttonName: string
): Promise<void> => {
  try {
    await addDoc(collection(db, 'analytics'), {
      eventType: 'button_click',
      section,
      buttonName,
      timestamp: new Date().toISOString(),
    });

    console.log(`Button click tracked: ${buttonName} in section: ${section}`);
  } catch (error) {
    console.error('Error tracking button click:', error);
    throw error;
  }
};
