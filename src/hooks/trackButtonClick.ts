import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure this points to your Firebase config file

export const trackButtonClick = async (
  section: string,
  buttonName: string
): Promise<void> => {
  try {
    // Log the button click event
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
