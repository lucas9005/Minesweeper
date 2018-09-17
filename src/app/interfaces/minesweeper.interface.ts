// Tile
export interface Tile {
    isMine: boolean;
    isActivated: boolean;
    isDisabled: boolean;
    isRevealed: boolean;
    surroundingMines: number;
}