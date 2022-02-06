import cloudinary from 'cloudinary';
import 'dotenv/config'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const uploadFile = async (req) => {
  let imageUrl = '';
  await cloudinary.v2.uploader.upload(
    req.file.path,
    async function (err, image) {
      if (err) {
        console.warn(err);
      }
      imageUrl = image.url;
    }
  );
  return imageUrl;
};

export const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('invalid image file!', false);
  }
};
