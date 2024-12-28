import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
  collection,
  addDoc,
  increment,
  query,
  getDocs,
  orderBy,
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
 * Updates the visitor count in Firestore, and logs every visit in `visitorLogs`.
 * - Increments the visitor count in the `stats/visitorCount` document.
 * - Adds a new document in `visitorLogs` with a timestamp (and optionally the updated count).
 * - Returns the updated visitor count.
 */
export const updateVisitorCount = async (): Promise<number> => {
  try {
    const docRef = doc(db, 'stats', 'visitorCount');
    const docSnap = await getDoc(docRef);

    let newCount = 0;
    if (docSnap.exists()) {
      const currentCount = docSnap.data().count || 0;
      newCount = currentCount + 1;
      await updateDoc(docRef, { count: increment(1) });
    } else {
      // If the document doesn't exist, create it
      newCount = 1;
      await setDoc(docRef, { count: 1 });
    }

    // Log this visit in a separate collection for line-graph tracking
    await addDoc(collection(db, 'visitorLogs'), {
      timestamp: new Date().toISOString(), // or use serverTimestamp() if you prefer server time
      count: newCount, // store the updated count for reference
    });

    return newCount;
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
  } catch (error) {
    console.error('Error tracking category interaction:', error);
  }
};

/**
 * Tracks "Download Resume" interactions in Firestore.
 */
export const trackResumeDownload = async (): Promise<void> => {
  try {
    const docRef = doc(db, 'resumeClicks', 'default'); // Add 'default' as a document ID
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // If the document exists, increment the count
      await updateDoc(docRef, { count: increment(1) });
    } else {
      // If the document doesn't exist, create it with initial count
      await setDoc(docRef, { count: 1 });
    }
  } catch (error) {
    console.error('Error tracking resume download:', error);
    throw error;
  }
};

/**
 * Fetches all visits from the `visitorLogs` collection, sorted by timestamp ascending.
 */
export const getAllVisits = async (): Promise<
  { id: string; timestamp: string; count: number }[]
> => {
  try {
    const q = query(collection(db, 'visitorLogs'), orderBy('timestamp', 'asc'));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      timestamp: doc.data().timestamp || new Date().toISOString(), // Provide default timestamp if missing
      count: doc.data().count || 0, // Provide default count if missing
    }));
  } catch (err) {
    console.error('Error fetching visits:', err);
    return [];
  }
};

/**
 * Fetches all duration tracking stats from Firestore.
 * Returns an array of objects containing section names and total time spent.
 */
export const getDurationTrackingStats = async () => {
  try {
    const q = query(collection(db, 'durationTrackingStats'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      section: doc.id, // Document ID represents the section name
      totalTime: doc.data().totalTime || 0, // Total time spent
    }));
  } catch (error) {
    console.error('Error fetching duration tracking stats:', error);
    return [];
  }
};
