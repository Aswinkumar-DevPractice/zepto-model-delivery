const webSocket = require('ws');
const bellmanFord = require('./services/bellmanFord.service');
const graphStore = require('./graph/graphStore');


function initSocket(server){
    const wss = new WebSocket.server({server});

    wss.on('connection', (ws) =>{
        console.log('Client connected');

        const interval = setInterval(() =>{
            const graph = graphStore.getGraph();
            const result = bellmanFord(
                graph.vertices,
                graph.edges,
                0 //source node
            );
            ws.send(JSON.stringify(result));
        },2000); //send updates every 2 seconds

        ws.on('close',() => clearInterval(interval));
    });
}

module.exports = initSocket;