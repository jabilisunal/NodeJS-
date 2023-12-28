import express from "express";
import { createBlog, deleteBlogById, getAllBlogs, getByIdBlog, updateBlogByID } from "../controller/BlogController.js";
import { myLogger } from "../middleware/loggerMiddileware.js";
export const blogRouter = express.Router();



blogRouter.get('/',myLogger, getAllBlogs)
blogRouter.get('/:id', getByIdBlog)
blogRouter.post('/', createBlog)
blogRouter.put('/:id', updateBlogByID)
blogRouter.delete('/:id', deleteBlogById)