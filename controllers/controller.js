const mygroup = require('../models/model');

// Controller functions
const handleIndex = (req, res) => {
  res.json(mygroup);
};

const handleMSSV = (req, res) => {
  const { MSSV, id } = req.params;

  if (req.method === 'POST') {
    // Check if item is valid
    const newItem = req.body;
    const isValid = mygroup.every(item => item.id !== newItem.MSSV);

    if (isValid) {
      mygroup.push(newItem);
      res.json(mygroup);
    } else {
      res.send('Not valid');
    }
  } else if (req.method === 'GET') {
    const item = mygroup.find(item => item.id === MSSV);

    if (item) {
      res.json(item);
    } else {
      res.json({ error: 'not valid' });
    }
  }
};

const handleMessage = (req, res) => {
  const { id } = req.params;

  if (!id) {
    const names = mygroup.map(item => `<li>${item.name}</li>`).join('');
    res.send(`<html><body><ul>${names}</ul></body></html>`);
  } else {
    res.send('Not valid');
  }
};

module.exports = {
  handleIndex,
  handleMSSV,
  handleMessage,
};