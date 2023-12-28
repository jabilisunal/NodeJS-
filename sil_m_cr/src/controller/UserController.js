import { UserModel } from "../model/UserModel.js"

export const getAllUsers =  async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const getByIdUser =  async (req, res) => {
    try {
        const { id } = req.params
        const users = await UserModel.findById(id)
        res.json(users)
    } catch (error) {
        res.send(error.message)
    }
}

export const createUser = async (req, res) => {
    try {
        const { title, author, body } = req.body
        const user = new UserModel({ title, author, body })
        await user.save()
        res.json('Got a POST request')
    } catch (error) {
        res.send(error.message)
    }
}


export const updateUserByID =  async (req, res) => {
    try {
        const { id } = req.params
        const { title, author, body } = req.body
        const user = await UserModel.findByIdAndUpdate(id,{ title, author, body })
        res.json('Data Updated')
    } catch (error) {
        res.send(error.message)
    }
}

export const deleteUserById =  async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserModel.findByIdAndDelete(id)
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}