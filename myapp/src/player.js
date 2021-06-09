import Board from "./index.jsx"

export default class Player {
    constructor(maxDepth = -1){
        this.maxDepth = maxDepth
        this.nodesMap = new Map();
    }
}