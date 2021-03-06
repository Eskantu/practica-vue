import express, { request, response } from 'express'
import Nota from '../../Models/Nota'
import User from '../../Models/user'
import * as fs from 'fs';
import * as path from 'path';
const router = express.Router();



//#region user
router.post('/user', async (request, response) => {
    const body = request.body
    console.log(body)
    try {
        const userDB = await User.create(body)
        return response.json(userDB)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ mensaje: "Ocurrio un error", error })
    }
})

router.get("/user/:id", async (request, response) => {
    const _id = request.params.id
    console.log(_id)
    try {
        const user = await User.findOne({ _id })
        return response.json(user)
    } catch (error) {
        return response.status(400).json({ mensaje: 'Dato no encontrado', error })
    }
})

router.get('/user', async (request, response) => {
    try {
        const usersList = await User.find()
        return response.json(usersList)
    } catch (error) {
        return response.status(400).json({ mensaje: 'Ocurrio un error', error })
    }
})

router.post('/user/buscar', async (request, response) => {
    const query = request.body
    try {
        console.log(query)
        const usersList = await User.findOne(query)
        console.log(usersList)
        if (usersList == null) {
            return response.status(400).json({ mensaje: 'Usuario no encontrado' })
        } else {
            return response.json(usersList)
        }
    } catch (error) {
        return response.status(400).json({ mensaje: 'Ocurrio un error', error })
    }
})

router.delete("/user/:id", async (request, response) => {
    const _id = request.params.id
    try {
        const user = await User.findByIdAndDelete({ _id })
        return response.json(user)
    } catch (error) {
        return response.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
})


router.put("/user/:id", async (request, response) => {
    const _id = request.params.id
    const body = request.body
    try {
        const user = await User.findByIdAndUpdate(_id, body, { new: true })
        return response.json(user)
    } catch (error) {
        return reponse.status(400).json({ mensaje: 'Ocurrio un error', error })
    }
})


//#endregion

//#region nota
router.post("/nota", async (request, response) => {
    const body = request.body
    console.log(body)
    try {
        const notaDB = await Nota.create(body)
        return response.status(200).json(notaDB)
    } catch (error) {
        return response.status(500).json({
            mensaje: 'Ocurrio un error', error
        })
    }
})

router.post("/nota/buscar", async (request, response) => {
    const query = request.body
    console.log(query)
    try {
        const notaDB = await Nota.findOne(query)
        return response.status(200).json(notaDB)
    } catch (error) {
        return response.status(500).json({
            mensaje: 'Ocurrio un error', error
        })
    }
})

router.get("/nota/:id", async (request, response) => {
    const _id = request.params.id
    console.log(_id)
    try {
        const notaDB = await Nota.findOne({ _id })
        return response.json(notaDB)
    } catch (error) {
        return response.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
})

router.get("/nota", async (request, response) => {
    try {
        const notaDB = await Nota.find()
        return response.json(notaDB)
    } catch (error) {
        return response.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
})
router.delete("/nota/:id", async (request, response) => {
    const _id = request.params.id
    try {
        const notaDB = await Nota.findByIdAndDelete({ _id })
        return response.json(notaDB)
    } catch (error) {
        return response.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
})


router.put("/nota/:id", async (request, response) => {
    const _id = request.params.id
    const body = request.body
    try {
        const notaDB = await Nota.findByIdAndUpdate(_id, body, { new: true })
        return response.json(notaDB)
    } catch (error) {
        return response.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
})

router.post("/upload", async (request, response) => {
    try {
        if (!request.files) {
            return response.status(400).send('No files were uploaded.');
        }
        else {
            let data=[];
            request.files.file.forEach(async (file) => {
                let avatar = file;
                avatar.mv(`./public/files/${avatar.name}`);
                data.push({
                    name: avatar.name,
                    type: avatar.mimetype,
                    size: avatar.size
                });
            })
            return response.json({
                mensaje: 'Archivo subido', data: data
            })
        }
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            mensaje: 'Ocurrio un error', error
        })
    }
})

router.get("/getFiles", async (request, response) => {
    let dir='./public/files/'
    var files = fs.readdirSync(dir);
    var filesZise = [];
    for (var i = 0; i < files.length; i++) {
        var stats = fs.statSync(dir + files[i]);
        var size = stats["size"];
        filesZise.push({
            name: files[i],
            type: files[i].split('.').pop(),
            size: size
        });
    
     }
    console.log(filesZise)
    return response.json(filesZise);
}
)


//#endregion
module.exports = router