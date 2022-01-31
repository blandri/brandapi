import multer from "multer";
import path from "path";
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

export const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), flase);
      return;
    }
    cb(null, true);
  },
});



app.post('/image', upload.single('picture'), async (req, res) => {
  return res.json({ picture: req.file.path });
});
