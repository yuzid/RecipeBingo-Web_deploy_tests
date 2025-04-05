import { keysCollection } from '@/lib/firebase';
import dotenv from 'dotenv';

dotenv.config();

const reqType = [
  { code: 'DEFAULT', reduction: 1 },
  { code: 'SEARCH3', reduction: 1.03 },
  { code: 'REMOVE', reduction: 150 }
];

export default async function handler(req, res) {
  try {
    const reductionType = req.query.type;
    const accessKey = req.query.key;

    if (accessKey !== process.env.KEY) {
      return res.status(403).json({ error: 'Invalid Key' });
    }

    const type = reqType.find(t => t.code === reductionType);
    const reductionAmount = type ? type.reduction : 1.5;

    const snapshot = await keysCollection.orderBy('__name__').get();

    for (const doc of snapshot.docs) {
      const data = doc.data();
      const quota = data.quota;

      if (quota >= reductionAmount) {
        const newQuota = quota - reductionAmount;
        await keysCollection.doc(doc.id).update({ quota: newQuota });

        const envKeyName = 'PASS' + parseInt(doc.id.replace('pass', ''));
        const envKey = process.env[envKeyName];

        console.log(`${doc.id.toUpperCase()} QUOTA = ${newQuota}`);

        return res.status(200).json({
          id: doc.id,
          key: envKey
        });
      }
    }

    return res.status(404).json({ error: 'No active key found' });

  } catch (e) {
    console.error('Error:', e);
    return res.status(500).json({ error: 'Failed sending key' });
  }
}
