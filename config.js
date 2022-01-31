import cloudinary from 'cloudinary';
import express from 'express';

const { CloudinaryStorage } = require('multer-storage-cloudinary');

const app = express();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'DEV',
  },
});
