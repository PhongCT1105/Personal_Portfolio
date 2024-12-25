import {
  collection,
  addDoc,
  doc,
  updateDoc,
  increment,
} from 'firebase/firestore';
import { db } from '../firebase'; // Ensure this points to your Firebase config file

export const trackPageView = async (section: string): Promise<void> => {
  try {
    // Log the page view event
    await addDoc(collection(db, 'analytics'), {
      eventType: 'page_view',
      section,
      timestamp: new Date().toISOString(),
    });

    // Update the aggregated view count
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
