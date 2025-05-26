import {post} from "../data/data.js";


// INDEX
const index = (req, res) => {
    const tagFilter = req.query.tags

    let result = post;

    if (tagFilter !== undefined) {
        result = post.filter((curPost) => curPost.tags.includes(tagFilter));
    }

    
    res.json({
        data: result,
        count: result.length,
    });    
};


// SHOW
const show = (req, res) => {
    const postId = req.params.id;

    const singlePost = post.find((curPost) => curPost.id === postId);
    
    if(singlePost === undefined) {
        res.status(404);
        return res.json({
            error: "Post non trovato",
        });
    };

    res.json ({
        data: singlePost,
    });
};


// UPDATE
const store = (req, res) => {
    res.json({
        data: "Aggiungo un post nuovo",
    });
};

const update = (req,res) => {

    const postId = req.params.id
    res.json({
        data: `Modifico il post seguente ${postId}`,
    });
};


// DELETE
const destroy = (req, res) => {
    const postId = req.params.id
    
    const index = post.findIndex((curPost) => curPost.id === postId);

    if(index === -1) {
        res.status(404);
        return res.json ({
            error: "Post non trovato",
        });
    };

    post.splice(index, 1);
    

    res.sendStatus(204);

};


const postController = {
    index,
    show,
    store,
    update,
    destroy,
};

export default postController