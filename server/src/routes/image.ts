import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid';
import express, {Request, Response, Router} from "express";

//import config
import {storage} from "../config/firebase";

//import constant
import {upload} from "../constants/upload";
import path from "path";
import * as fs from "fs";

export const imageRoute: Router = express.Router();

imageRoute.post('/add', upload.single('image'), async (req: Request, res: Response) => {
    try {
        const {collection} = req.body

        if (collection && req.file) {
            const image = fs.readFileSync(path.join(__dirname, `../uploads/${req.file.filename}`))
            const imageRef = ref(storage, `${collection}/${req.file.filename}`)
            await uploadBytes(imageRef, image)
            return res.sendStatus(200);
        }

        return res.sendStatus(202);
    } catch (error) {
        return res.status(500).json(error);
    }
})

imageRoute.post('/list', async (req: Request, res: Response) => {
    try {
        const {collection} = req.body

        if (collection) {
            const imageListRef = ref(storage, `${collection}/`)
            const list: Array<string> = []
            const response = await listAll(imageListRef)
            for (const item of response.items) {
                const url = await getDownloadURL(item);
                list.push(url);
            }
            return res.status(200).json(list);
        }

        return res.sendStatus(202);
    } catch (error) {
        return res.status(500).json(error);
    }
})
