const jwt = require('jsonwebtoken');

async function createToken() {
    const secret = 'bigSecretWord'
    return jwt.sign({}, secret)
}

module.exports = { createToken }