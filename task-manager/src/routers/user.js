const express = require("express")
const User = require("../models/user")
const auth = require("../middleware/auth")
const router = new express.Router()

router.post("/users" , async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send( {user, token} )
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post("/users/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token})
    } catch (err) {
        res.status(400).send()
    }
})

router.post("/users/logout", auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.status(200).send()
    } catch (err) {
        res.status(500).send()
    }
})

router.post("/users/logoutAll", auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.status(200).send()
    } catch (err) {
        res.status(500).send()
    }
})

router.get("/users/me", auth, async (req,res) => {
    res.send(req.user)
})

router.get("/users/:id", async (req,res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (err) {
        res.status(500).send()
    }
})

router.patch("/users/:id", async (req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ["name", "email", "password", "age"]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    
    if (!isValidOperation) {
        return res.status(400).send( {error: "Nem megfelelő módosítás"})
    }
    
    try {
        const user = await User.findById(req.params.id)
        updates.forEach((update) => user[update] = req.body[update]
        )
        await user.save()

     //   const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (err) {
        res.status(400).send(err)
    } 
})

router.delete("/users/:id", async (req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (err) {
        res.status(500).send()
    }
})


module.exports = router