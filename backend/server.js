const express = require('express');
const http = require('http');
const cors = require('cors');

const initSocket = require('./socket');
const trafficSimulator = require('./trafficSimulator');
const graphStore = require('./graphStore');

const app = express();
app.use(cors());

const server = http.createServer(app);

for(let i =0 ; i< 6; i++){
    graphStore.vertices.add(i);
}

//Initial edges
graphStore.updateEdge(0, 1, 4);
graphStore.updateEdge(0, 2, 2);
graphStore.updateEdge(1, 2, 5);
graphStore.updateEdge(1, 3, 10);
graphStore.updateEdge(2, 4, 3);
graphStore.updateEdge(4, 3, 4);
graphStore.updateEdge(3, 5, 11);

initSocket(server);
trafficSimulator();

const PORT = 3000;
server.listen(PORT,() => console.log(`Server running on port ${PORT}`));