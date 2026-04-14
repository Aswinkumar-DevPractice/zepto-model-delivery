class GraphStore {
    constructor(){
        this.vertices = new Set();
        this.edges = [];
    }

    updateEdge(u,v,w){
        const index = this.edges.findIndex(e =>  e.u === u && e.v === v);

        if(index !== -1){
             this.edges[index].w = w;
            
        }else{
             this.edges.push({u,v,w});
        }
    }

    getGraph(){
        return {
            vertices : this.vertices.size,
            edges: this.edges
        }
    }
}

module.exports = new GraphStore();