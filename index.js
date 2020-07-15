const express = require("express");

const postsRouter = require("./posts/postRoutes");

const server = express();

// parse incoming objects
server.use(express.json());
server.use('/api/posts', postsRouter);

const PORT = 5000;

server.listen(PORT, () => {
    console.log('listening on localhost:', PORT)
})

