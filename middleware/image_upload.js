const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/images");
  },
  filename: function (req, file, callback) {
    const filename = Date.now().toString() + file.originalname;
    callback(null, filename);
    // callback(null, Date.now() + path.extname(file.originalname));
  },
});


const fileFilter = (req, file, callback) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
    // file.mimetype === "application/pdf" 
  ) {
    req.isFileValid = true;
    callback(null, true);
  } else {
    req.isFileValid = false;
    callback(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 10 
  }
});

module.exports = upload;
