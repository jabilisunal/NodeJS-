import { BlogModel } from "../model/BlogModel.js"

export const getAllBlogs =  async (req, res) => {
    try {
        const blogs = await BlogModel.find({})
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const getByIdBlog =  async (req, res) => {
    try {
        const { id } = req.params
        const blogs = await BlogModel.findById(id)
        res.json(blogs)
    } catch (error) {
        res.send(error.message)
    }
}

export const createBlog = async (req, res) => {
    try {
        const { title, author, body } = req.body
        const blog = new BlogModel({ title, author, body })
        await blog.save()
        res.json('Got a POST request')
    } catch (error) {
        res.send(error.message)
    }
}


export const updateBlogByID =  async (req, res) => {
    try {
        const { id } = req.params
        const { title, author, body } = req.body
        const blog = await BlogModel.findByIdAndUpdate(id,{ title, author, body })
        res.json('Data Updated')
    } catch (error) {
        res.send(error.message)
    }
}

export const deleteBlogById =  async (req, res) => {
    try {
        const { id } = req.params
        const blog = await BlogModel.findByIdAndDelete(id)
        res.json(blog)
    } catch (error) {
        res.send(error.message)
    }
}