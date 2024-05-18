export const __esModule: boolean;
export namespace chessPieces {
    let R: string;
    let N: string;
    let B: string;
    let Q: string;
    let K: string;
    let P: string;
}
export namespace piecePoints {
    let rook: number;
    let knight: number;
    let bishop: number;
    let queen: number;
    let king: number;
    let pawn: number;
}
export namespace fenChessPieces {
    export namespace R_1 {
        let name: string;
        let color: string;
    }
    export { R_1 as R };
    export namespace N_1 {
        let name_1: string;
        export { name_1 as name };
        let color_1: string;
        export { color_1 as color };
    }
    export { N_1 as N };
    export namespace B_1 {
        let name_2: string;
        export { name_2 as name };
        let color_2: string;
        export { color_2 as color };
    }
    export { B_1 as B };
    export namespace Q_1 {
        let name_3: string;
        export { name_3 as name };
        let color_3: string;
        export { color_3 as color };
    }
    export { Q_1 as Q };
    export namespace K_1 {
        let name_4: string;
        export { name_4 as name };
        let color_4: string;
        export { color_4 as color };
    }
    export { K_1 as K };
    export namespace P_1 {
        let name_5: string;
        export { name_5 as name };
        let color_5: string;
        export { color_5 as color };
    }
    export { P_1 as P };
    export namespace r {
        let name_6: string;
        export { name_6 as name };
        let color_6: string;
        export { color_6 as color };
    }
    export namespace n {
        let name_7: string;
        export { name_7 as name };
        let color_7: string;
        export { color_7 as color };
    }
    export namespace b {
        let name_8: string;
        export { name_8 as name };
        let color_8: string;
        export { color_8 as color };
    }
    export namespace q {
        let name_9: string;
        export { name_9 as name };
        let color_9: string;
        export { color_9 as color };
    }
    export namespace k {
        let name_10: string;
        export { name_10 as name };
        let color_10: string;
        export { color_10 as color };
    }
    export namespace p {
        let name_11: string;
        export { name_11 as name };
        let color_11: string;
        export { color_11 as color };
    }
}
export const fenChessCode: {
    'rook-white': string;
    'knight-white': string;
    'bishop-white': string;
    'queen-white': string;
    'king-white': string;
    'pawn-white': string;
    'rook-black': string;
    'knight-black': string;
    'bishop-black': string;
    'queen-black': string;
    'king-black': string;
    'pawn-black': string;
};
export function parseNotation(notation: any): number[];
