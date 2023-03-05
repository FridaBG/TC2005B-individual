const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/prueba', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab5.html'));
});

module.exports = router;