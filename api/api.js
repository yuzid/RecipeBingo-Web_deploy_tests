import dotenv from 'dotenv';

dotenv.config();

// Init pass array with quotas
let pass = [];
for (let i = 1; i <= 10; i++) {
  pass.push({
    key: process.env[`PASS${i}`],
    quota: 150
  });
}

const reqType = [
  { code: 'DEFAULT', reduction: '1' },
  { code: 'SEARCH3', reduction: '1.03' },
  { code: 'REMOVE', reduction: '150' },
];

// /key route handler
export function handleKeyRoute(req, res) {
  try {
    const reductionType = req.query.type;
    const key = req.query.key;

    let foundType = false;
    let foundKey = false;
    let reductionAmount = 1.5;

    if (key !== process.env.KEY) {
      return res.status(403).send({ error: 'Invalid Key' });
    }

    reqType.forEach(type => {
      if (type.code === reductionType) {
        reductionAmount = type.reduction;
        foundType = true;
      }
    });

    for (let i = 0; i < 10; i++) {
      if (pass[i].quota >= reductionAmount) {
        foundKey = true;
        pass[i].quota -= reductionAmount;

        console.log(`PASS ${i + 1} QUOTA = ${pass[i].quota}`);

        return res.status(200).send({
          index: i,
          key: pass[i].key
        });
      }
    }

    if (!foundKey) {
      return res.status(404).send({
        error: 'No active key found'
      });
    }

  } catch (e) {
    console.log(e);
    if (!res.headersSent) {
      res.status(500).send({
        error: 'Failed sending key'
      });
    }
  }
}

// Quota reset logic
export function resetQuota() {
  for (let i = 0; i < 10; i++) {
    pass[i].quota = 150;
  }
  console.log('resetQuota function triggered!');
}

// Export pass if needed
export { pass };
