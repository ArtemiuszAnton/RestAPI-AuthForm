const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, updateUserById, updateUserPath, deleteUserById, getUserById, authUser } = require('../service/service');
const { createToken } = require('../../helper/jwt')

const { buildResponse } = require('../helper/buildResponse');


router.post('/reg', async (req, res) => {
    try {
        const { username, email, phone, pwd } = req.body;
        const user = await createUser(username, email, phone, pwd);
        buildResponse(200, user, res)
    } catch (er) {
        buildResponse(404, er.message, res)
    }
});

router.get('/', async (_req, res) => {
    try {
        const user = await getAllUsers();
        buildResponse(200, user, res)
    } catch (er) {
        buildResponse(404, er.message, res)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getUserById(id);
        buildResponse(200, user, res)
    } catch (er) {
        buildResponse(404, er.message, res)
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, phone, pwd } = req.body;
        const user = await updateUserById(id, username, email, phone, pwd);
        buildResponse(200, user, res)
    } catch (er) {
        buildResponse(404, er.message, res)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await deleteUserById(id)
        buildResponse(200, data, res)
    } catch (er) {
        buildResponse(404, er.message, res)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const user = await updateUserPath(id, body);
        buildResponse(200, user, res)
    } catch (er) {
        buildResponse(404, er.message, res)
    }
});

router.post('/auth', async (req, res) => {
    try {
        const { email, pwd } = req.body;
        const user = await authUser(email, pwd);
        const token = await createToken();
        res.setHeader('access-token', token);
        buildResponse(200, user, res)
    } catch (er) {
        buildResponse(404, er.message, res)
    }
})

module.exports = router