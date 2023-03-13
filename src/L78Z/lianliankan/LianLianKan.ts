type TileState = "closed" | "open" | "empty";
type GameState = "ready" | "playing" | "win" | "lose";

interface Tile {
  imageIndex: number;
  row: number;
  col: number;
  state: TileState;
}

interface TilePos {
  row: number;
  col: number;
}

class LianLianKan {
  readonly rows: number;
  readonly cols: number;
  readonly images: string[];
  readonly map: Tile[][];
  gameState: GameState = "ready";
  openedTiles: TilePos[] = [];

  constructor(rows: number, cols: number, images: string[]) {
    this.rows = rows;
    this.cols = cols;
    this.images = images;
    this.map = [];
    this.initMap();
  }

  private initMap(): void {
    const imageIndexes: number[] = [];
    for (let i = 0; i < this.rows * this.cols; i += 2) {
      const index = Math.floor(Math.random() * this.images.length);
      imageIndexes.push(index, index);
    }
    for (let i = 0; i < imageIndexes.length; i++) {
      const j = Math.floor(Math.random() * (this.rows * this.cols));
      [imageIndexes[i], imageIndexes[j]] = [imageIndexes[j], imageIndexes[i]];
    }
    for (let i = 0; i < this.rows; i++) {
      const row: Tile[] = [];
      for (let j = 0; j < this.cols; j++) {
        const tile: Tile = {
          imageIndex: imageIndexes[i * this.cols + j],
          row: i,
          col: j,
          state: "closed",
        };
        row.push(tile);
      }
      this.map.push(row);
    }
  }

  private canConnect(tile1: Tile, tile2: Tile): TilePos[] | false {
    if (tile1.imageIndex !== tile2.imageIndex) {
      return false;
    }
    let path: TilePos[] | false = this.findPath(tile1, tile2, "horizontal");
    if (path) {
      return path;
    }
    path = this.findPath(tile1, tile2, "vertical");
    if (path) {
      return path;
    }
    path = this.findObliquePath(tile1, tile2);
    if (path) {
      return path;
    }
    return false;
  }

  private findPath(
    tile1: TilePos,
    tile2: TilePos,
    direction: "horizontal" | "vertical"
  ): TilePos[] | false {
    const rowDelta = direction === "horizontal" ? 0 : 1;
    const colDelta = direction === "horizontal" ? 1 : 0;
    let row = tile1.row + rowDelta;
    let col = tile1.col + colDelta;
    const path: TilePos[] = [];
    while (row !== tile2.row || col !== tile2.col) {
      if (this.map[row][col].state !== "empty") {
        return false;
      }
      path.push({ row, col });
      row += rowDelta;
      col += colDelta;
    }
    path.push({ row: tile2.row, col: tile2.col });
    return path;
  }

  private findObliquePath(tile1: TilePos, tile2: TilePos): TilePos[] | false {
    const path1 = this.findPath(
      tile1,
      { row: tile2.row, col: tile1.col },
      "horizontal"
    );
    const path2 = this.findPath(
      tile2,
      { row: tile2.row, col: tile1.col },
      "horizontal"
    );
    if (path1 && path2) {
      const intersection = path1.find((pos) =>
        path2.some((p) => p.row === pos.row && p.col === pos.col)
      );
      if (intersection) {
        const index1 = path1.findIndex(
          (pos) => pos.row === intersection.row && pos.col === intersection.col
        );
        path1.splice(index1, 1);
        const index2 = path2.findIndex(
          (pos) => pos.row === intersection.row && pos.col === intersection.col
        );
        path2.splice(index2, 1);
        const path = [...path1, ...path2];
        return path;
      }
    }
    return false;
  }

  openTile(row: number, col: number): void {
    if (this.gameState !== "playing") {
      return;
    }
    const tile = this.map[row][col];
    if (tile.state === "open") {
      return;
    }
    tile.state = "open";
    this.openedTiles.push({ row, col });
    if (this.openedTiles.length === 2) {
      const tile1 = this.map[this.openedTiles[0].row][this.openedTiles[0].col];
      const tile2 = this.map[this.openedTiles[1].row][this.openedTiles[1].col];
      const path = this.canConnect(tile1, tile2);
      if (path) {
        this.removeTiles(path);
        if (this.checkWin()) {
          this.gameOver("win");
        }
      } else {
        this.closeTiles();
      }
      this.openedTiles = [];
    }
  }

  private closeTiles(): void {
    this.openedTiles.forEach((pos) => {
      this.map[pos.row][pos.col].state = "closed";
    });
  }

  private removeTiles(path: TilePos[]): void {
    path.forEach((pos) => {
      this.map[pos.row][pos.col].state = "empty";
    });
  }

  private checkWin(): boolean {
    return this.map.every((row) => {
      return row.every((tile) => {
        return tile.state === "empty";
      });
    });
  }

  private gameOver(result: "win" | "lose"): void {
    this.gameState = result === "win" ? "win" : "lose";
    alert(
      `游戏结束！${result === "win" ? "恭喜你获胜！" : "很遗憾，你失败了。"}`
    );
  }
}
