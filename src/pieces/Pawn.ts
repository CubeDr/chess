import Piece from './Piece';

class Pawn extends Piece {
    constructor() {
        super('♟');
    }
}

const pawn = new Pawn();
export default pawn;