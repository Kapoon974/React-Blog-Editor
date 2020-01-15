const express = require('express');
const router = express.Router();
const { Blog } = require('../models/blog.js');
const multer = require('multer');
const { auth } = require('../middleware/auth');

// STORAGE MULTER CONFIG - Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.jpg' && ext !== '.png' && ext !== '.mp4') {
      return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
    }
    cb(null, true);
  }
});

const upload = multer({ storage: storage }).single('file');

//=================================
//             Blog
//=================================

router.post('/uploadfiles', (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      url: res.req.file.path,
      fileName: res.req.file.filename
    });
  });
});

router.post('/createPost', (req, res) => {
  const blog = new Blog(req.body);
  blog.save((err, postInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      postInfo
    });
  });
});

module.exports = router;
