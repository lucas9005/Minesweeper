// Minesweeper
export interface Minesweeper {
    configuration: Configuration;
    board: Board;
    scoreboard: Scoreboard;
    finished: boolean;
}

// Config
export interface Configuration {
    difficulty: number;
    gridWidth: number;
    gridHeight: number;
    minesCount: number;
}

// Board
export interface Board {
    grid: Array<Array<Tile>>;
}

// Tile
export interface Tile {
    isMine: boolean;
    isActivated: boolean;
    isDisabled: boolean;
    isRevealed: boolean;
    surroundingMines: number;
}

// 2D Matrix Coordinate
export interface MatrixCoordinates2D {
    i: number;
    j: number;
}

// Scoreboard
export interface Scoreboard {
    startTime: string;
    endTime: string;
    completed: boolean;
    minesLeft: number;
}
