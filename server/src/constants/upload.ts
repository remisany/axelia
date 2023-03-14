import multer from 'multer';
import {v4} from "uuid";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, `../uploads/`))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname.replace('.jpg', '_') + v4())
    }
});

export const upload = multer({ storage: storage });
