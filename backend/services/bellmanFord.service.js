function bellmanFord(verticesCount, edges,source){
     const dist = Array(verticesCount).fill(Infinity);
     dist[source] = 0;

     //Relax edges repeatedly

     for(let i =0; i < verticesCount - 1; i++){
         edges.forEach(({u,v,w}) =>{
              if(dist[u] !== Infinity && dist[u] + w < dist[v]){
                  dist[v] = dist[u] + w;
              }
         })
     }

     //Detect negative weight cycles (not expected in traffic simulation but good practice)

     for(let { u , v, w} of edges){
         if(dist[u] !== Infinity && dist[u] + w < dist[v]){
             return { hasNegativeCycle : true};
         }
     }

     return {
         hasNegativeCycle : false,
         distances : dist
     }
}

module.exports = bellmanFord;