import dotenv from 'dotenv';

dotenv.config();

const pass = [];
for (let i = 1; i <= 10; i++) {
  pass.push({
    key: process.env[`PASS${i}`],
    quota: 150
  });
}

const reqType = [
  { code: 'DEFAULT', reduction: 1 },
  { code: 'SEARCH3', reduction: 1.03 },
  { code: 'REMOVE', reduction: 150 }
];

export default function handler(req, res) {
  try {
    const reductionType = req.query.type;
    const key = req.query.key;

    let reductionAmount = 1.5;

    if (key !== process.env.KEY) {
      return res.status(403).json({ error: 'Invalid Key' });
    }

    const type = reqType.find(t => t.code === reductionType);
    if (type) reductionAmount = type.reduction;

    for (let i = 0; i < 10; i++) {
      if (pass[i].quota >= reductionAmount) {
        pass[i].quota -= reductionAmount;
        console.log(`PASS ${i + 1} QUOTA = ${pass[i].quota}`);

        return res.status(200).json({
          index: i,
          key: pass[i].key
        });
      }
    }

    return res.status(404).json({ error: 'No active key found' });

  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Failed sending key' });
  }
}
