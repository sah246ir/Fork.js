export const __esModule: boolean;
export class Chess {
    constructor(fenstring: any);
    postMoveTasks: (piececolor: any) => void;
    checked_king: string;
    board: any[];
    turn: string;
    captured: any[];
    color: any;
    winner: any;
    cancastle: {
        black: {
            long: string;
            short: string;
        };
        white: {
            long: string;
            short: string;
        };
    };
    createBoard(fen: any): void;
    encodeBoard(): string;
    createBoardRow(cols: any, row: any): {
        piece: any;
        cell_color: string;
        square: string;
    }[];
    getCaptures(color: any): {
        captures: any[];
        points: any;
        lead: number;
    };
    updateResult(result: any): void;
    getPieces(color: any, board: any): any[];
    toggleMove(): void;
    updateCastlingRights(color: any): void;
    getPieceMoves(from: any, piece: any, board: any): any;
    validateMove(from: any, to: any): boolean;
    makeMove(from: any, to: any): boolean;
    copyBoard(): any;
    isCheck(color: any, board: any): any;
    isMate(color: any): boolean;
}
