import {post} from "../data/data.js";


const notFound = (res) => {
    res.status(404)
    res.json ({
        error: "Post non trovato"
    })
}

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
        return notFound(res);
    };

    res.json ({
        data: singlePost,
    });
};


const store = (req, res) => {
    const newPost = req.body
    const lastId = parseInt(post[post.length - 1].id)
    
    newPost.id = (lastId + 1).toString()
    post.push(newPost)
    
    console.log(newPost)
    res.status(201)
    res.json({
        data: newPost,
    });
};

// UPDATE
const update = (req,res) => {

    const postId = req.params.id;
    const updatedData = req.body;
    const post = post.find(curPost => curPost.id === postId);

    post.title = updatedData.title;
    post.content = updatedData.content;
    post.img = updatedData.img;
    post.tags = updatedData.tags;

    if (!post) {
        return notFound(res);
    }

    res.json({
        data: `Modifico il post seguente ${postId}`,
    });
};


// DELETE
const destroy = (req, res) => {
    const postId = req.params.id
    
    const index = post.findIndex((curPost) => curPost.id === postId);

    if(index === -1) {
        return notFound(res);
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