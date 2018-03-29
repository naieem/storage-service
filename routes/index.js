var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var upload = multer({ dest: 'uploads/' });

/* GET main route. */
router.get('/', function(req, res, next) {
    res.send(200, "storage service working");
});

router.post('/upload', upload.single('files'), function(req, res) {
    console.log(path);
    res.send(200, {
        fileInfo: denormalizeFileInfo(req)
    });
});
/**
 * Denormalizing files information to return in the response 
 * @params {params} 
 * @returns {returns}
 */
function denormalizeFileInfo(req) {
    return {
        filename: req.file.filename,
        fileType: req.file.mimetype,
        fileUrl: path.resolve("") + "/" + req.file.path,
        fileSize: req.file.size
    }
}

module.exports = router;