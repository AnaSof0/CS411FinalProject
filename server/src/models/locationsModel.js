const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    latitude:{
        type: String
    },
    longitude:{
        type: String
    },
    playlistID:{
        type:String
    },
    userID:{
        type:String
    }
  });

module.exports = mongoose.model('Location', locationSchema);