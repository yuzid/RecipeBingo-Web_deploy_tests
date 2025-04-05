import { keysCollection } from '@/lib/firebase';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  try {
    const accessKey = req.query.key;

    if (accessKey !== process.env.KEY) {
      return res.status(403).json({ error: 'Invalid Key' });
    }

    const snapshot = await keysCollection.get();

    const batch = keysCollection.firestore.batch();

    snapshot.forEach(doc => {
      const ref = keysCollection.doc(doc.id);
      batch.update(ref, { quota: 150 });
    });

    await batch.commit();

    console.log('All quotas have been reset to 150');

    res.status(200).json({ message: 'Quotas reset successfully' });
  } catch (e) {
    console.error('Error:', e);
    res.status(500).json({ error: 'Failed to reset quotas' });
  }
}
