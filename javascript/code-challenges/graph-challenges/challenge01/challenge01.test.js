const { Graph, vertex, edg} = require('./challenge01.js');

describe('Graph', () => {
it('return array of the following values', () => {

const graph = new Graph();
const A = new vertex('A');
const B = new vertex('B');
const C = new vertex('C');
const D = new vertex('D');
const E = new vertex('E');
const F = new vertex('F');
const G = new vertex('G');
const H = new vertex('H');
const I = new vertex('I');
const K = new vertex('K');

graph.addVertices(A);
graph.addVertices(B);
graph.addVertices(C);
graph.addVertices(D);
graph.addVertices(E);
graph.addVertices(F);
graph.addVertices(G);
graph.addVertices(H);
graph.addVertices(I);
graph.addVertices(K);

graph.addEdge(A, C);
graph.addEdge(A, E);
graph.addEdge(C, B);
graph.addEdge(C, F);
graph.addEdge(E, F);
graph.addEdge(E, G);
graph.addEdge(B, D);
graph.addEdge(B, I);
graph.addEdge(F, H);
graph.addEdge(G, I);
graph.addEdge(D, K);
graph.addEdge(H, K);
graph.addEdge(I, K);


expect(graph.breadthFirst(A)).toEqual(["A", "C", "E", "B", "F", "G", "D", "I", "H", "K"]);


});
});