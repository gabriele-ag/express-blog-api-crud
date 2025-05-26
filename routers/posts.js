import express from "express";
import postController from "../controllers/postsController.js"

const router = express.Router();


// Index
router.get("/", postController.index);


// Show
router.get("/:id", postController.show);


// Store
router.post("/", postController.store);


// Update
router.put("/:id", postController.update);


// Delete
router.delete("/:id", postController.destroy);


export default router;