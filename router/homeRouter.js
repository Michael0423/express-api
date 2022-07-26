const express = require('express');
const router = express();

router.route('/')
  .get((req, res) => {
    res.send('Welcome Home');
  })
  .post((req, res) => {
    res.send('Do you want to add data?')
  })
  .put((req, res) => {
    res.send('Do you want to update data?')
  })
  .delete((req, res) => {
    res.send('Do you want to delete data?')
  });

module.exports = router;