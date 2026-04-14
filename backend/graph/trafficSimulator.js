const graphStore = require('./graphStore');

function trafficSimulator(){
    setInterval(() =>{
         graphStore.edges.forEach(edge =>{
             const change = Math.floor(Math.random() * 6) - 3; //Random change between -3 and +2
             edge.w = Math.max(1, edge.w + change); //Ensure weight doesn't go below 1
         });
         console.log('Traffic updated:', graphStore.edges);
    },3000); //Update traffic every 3 seconds
}

module.exports = trafficSimulator;