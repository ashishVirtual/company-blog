const mongoose = require('mongoose');

const ModalSchema = new mongoose.Schema({
  picture: {
    type: String, 
    required: true, 
  },
  title: {
    type: String, 
    required: true,
    trim: true, 
  },
  shortDescription: {
    type: String, 
    required: true,
    maxlength: 150, 
    trim: true,
  },
  longDescription: {
    type:String , 
    maxlength: 1048576,
    required: true,
  },
}, {
  timestamps: true, 
});

export const Blog = mongoose.models.blogs ||  mongoose.model('blogs', ModalSchema);


  