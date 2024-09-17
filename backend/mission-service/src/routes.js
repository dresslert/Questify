const express = require('express');
const Mission = require('./models');

const router = express.Router();

// create a new mission
router.post('/', async (req, res) => {
    const mission = new Mission(req.body);
    try {
        await mission.save();
        res.status(201).send(mission);
    } catch (err) {
        res.status(400).send(err);
    }
});

// get all missions
router.get('/', async (req, res) => {
    try {
        const missions = await Mission.find();
        res.send(missions);
    } catch (err) {
        res.status(500).send(err);
    }
});

// update a mission by id
router.put('/:id', async (req, res) => {
    try {
        const mission = await Mission.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});
        if(!mission) {
            return res.status(404).send();
        }
        res.send(mission);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Delete a mission by id
router.delete('/:id', async (req, res) => {
    try {
        const mission = await Mission.findByIdAndDelete(req.params.id);
        if (!mission) {
            return res.status(404).send();
        }
        res.send(mission);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;