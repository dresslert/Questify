const mongoose = require('mongoose');

const missionSchema = new  mongoose.Schema({
    name: { type: String, required:true },
    description: { type: String },
    rewardPoints: { type: Number, default: 0 }
});

const Mission = mongoose.model('Mission', missionSchema);

module.exports = Mission;