import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure this points to your Firebase config file

export const trackDurationViewTime = async (
  section: string,
  duration: number
): Promise<void> => {
  try {
    await addDoc(collection(db, 'analytics'), {
      eventType: 'duration_view',
      section,
      duration,
      timestamp: new Date().toISOString(),
    });

    console.log(
      `Duration tracked for section: ${section}, duration: ${duration}s`
    );
  } catch (error) {
    console.error('Error tracking duration view time:', error);
    throw error;
  }
};
