import { ChessSquare, chessPiecesType, fenChessCodeType, fenChessPiecesType, piecePointsType } from "./chessTypes"

export function parseNotation(notation: ChessSquare) { 
    let row = 8 - parseInt(notation.charAt(1))
    let col = notation.charCodeAt(0) - 97
    return [row, col]
} 

export const chessPieces: chessPiecesType = {
    'R': 'rook',
    'N': 'knight',
    'B': 'bishop',
    'Q': 'queen',
    'K': 'king',
    'P': 'pawn'
};

export const piecePoints: piecePointsType= {
    'rook': 5,
    'knight': 3,
    'bishop': 3,
    'queen': 8,
    'king': 0,
    'pawn': 1
}; 

export const fenChessPieces: fenChessPiecesType = {
    'R': { name: 'rook', color: 'white' },
    'N': { name: 'knight', color: 'white' },
    'B': { name: 'bishop', color: 'white' },
    'Q': { name: 'queen', color: 'white' },
    'K': { name: 'king', color: 'white' },
    'P': { name: 'pawn', color: 'white' },

    'r': { name: 'rook', color: 'black' },
    'n': { name: 'knight', color: 'black' },
    'b': { name: 'bishop', color: 'black' },
    'q': { name: 'queen', color: 'black' },
    'k': { name: 'king', color: 'black' },
    'p': { name: 'pawn', color: 'black' }
};

export const fenChessCode: fenChessCodeType = {
    'rook-white': 'R',
    'knight-white': 'N',
    'bishop-white': 'B',
    'queen-white': 'Q',
    'king-white': 'K',
    'pawn-white': 'P',

    'rook-black': 'r',
    'knight-black': 'n',
    'bishop-black': 'b',
    'queen-black': 'q',
    'king-black': 'k',
    'pawn-black': 'p'
}; 