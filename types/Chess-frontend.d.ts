export const __esModule: boolean;
export class ChessFrontend extends Chess_1.Chess {
    highlightMoves: (notation: any, board: any) => void;
    highlighted: any[];
    unhighlightMoves: () => void;
    selected: string;
    setSelected(notation: any): void;
    unsetSelected(): void;
}
import Chess_1 = require("./Chess");
