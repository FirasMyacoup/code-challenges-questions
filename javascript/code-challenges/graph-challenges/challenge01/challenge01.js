class vertex {
constructor(value) {
this.value = value;
}
}

class edg {
constructor(vertex, weight = 0) {
this.vertex = vertex;
this.weight = weight;
}
}

class Graph {
constructor() {
this.adjacencyList = new Map();
}

addVertices(vertex) {
this.adjacencyList.set(vertex, []);
}

addEdge(startVertex, endVertex, weight = 0) {
if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
throw new Error(' Invalid Vertices');
}

const adjacencies = this.adjacencyList.get(startVertex);
adjacencies.push(new edg(endVertex, weight));
}

breadthFirst(startNode) {
const que = [];
const visitedNodes = new Set();

que.push(startNode);
visitedNodes.add(startNode);

while (que.length) {
const currentVertex = que.shift();
const neighbors = this.adjacencyList.get(currentVertex);


for (let neighbor of neighbors) {
const neighborNode = neighbor.vertex;

if (visitedNodes.has(neighborNode)) {
continue;
} else {
visitedNodes.add(neighborNode);
que.push(neighborNode);
}
}
}
return [...visitedNodes].map(node => node.value);

}
}

module.exports = { Graph, vertex, edg };
