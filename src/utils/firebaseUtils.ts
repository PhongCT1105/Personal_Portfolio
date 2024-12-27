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
const ensureDocumentExists = async (
  collectionPath: string,
  documentId: string,
  initialData: Record<string, any> = {}
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
    // Check if the visitor count was already updated in this session
    if (sessionStorage.getItem('visitorCountUpdated')) {
      const docRef = doc(db, 'stats', 'visitorCount');
      const docSnap = await getDoc(docRef);
      return docSnap.data()?.count || 0; // Return current count without incrementing
    }

    const docRef = doc(db, 'stats', 'visitorCount');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const currentCount = docSnap.data().count || 0; // Get the current count
      await updateDoc(docRef, { count: increment(1) }); // Increment the count
      sessionStorage.setItem('visitorCountUpdated', 'true'); // Mark as updated for this session
      return currentCount + 1; // Return the updated count
    } else {
      // Initialize the count if the document doesn't exist
      await setDoc(docRef, { count: 1 });
      sessionStorage.setItem('visitorCountUpdated', 'true'); // Mark as updated for this session
      return 1; // Return initial count
    }
  } catch (error) {
    console.error('Error updating visitor count:', error);
    throw error;
  }
};

/**
 * Tracks a page view for a specific section.
 * - Logs the page view event in the `analytics` collection.
 * - Updates the page view count in the `stats/pageViews` document.
 */
export const trackPageView = async (section: string): Promise<void> => {
  try {
    // Ensure the aggregated page view document exists
    await ensureDocumentExists('stats', 'pageViews', {});

    // Log the page view event
    await addDoc(collection(db, 'analytics'), {
      eventType: 'page_view',
      section,
      timestamp: new Date().toISOString(),
    });

    // Update aggregated page view count
    const docRef = doc(db, 'stats', 'pageViews');
    await updateDoc(docRef, {
      [section]: increment(1),
    });

    console.log(`Page view tracked for section: ${section}`);
  } catch (error) {
    console.error('Error tracking page view:', error);
    throw error;
  }
};

/**
 * Tracks the duration of time spent in a section.
 * - Logs the duration event in the `analytics` collection.
 * - Updates the total time spent for the section in the `stats/durationViewTime` document.
 */
export const trackDurationViewTime = async (
  section: string,
  duration: number
): Promise<void> => {
  try {
    // Ensure the aggregated duration document exists
    await ensureDocumentExists('stats', 'durationViewTime', {});

    // Log the duration event
    await addDoc(collection(db, 'analytics'), {
      eventType: 'duration_view',
      section,
      duration,
      timestamp: new Date().toISOString(),
    });

    // Update aggregated duration data
    const docRef = doc(db, 'stats', 'durationViewTime');
    await updateDoc(docRef, {
      [section]: increment(duration),
    });

    console.log(
      `Duration tracked for section: ${section}, duration: ${duration}s`
    );
  } catch (error) {
    console.error('Error tracking duration view time:', error);
    throw error;
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
