class LianLianKanJs {
    constructor(rows, cols, images) {
        // 游戏区域大小
        this.rows = rows;
        this.cols = cols;
        // 图片数组
        this.images = images;
        // 游戏地图
        this.map = [];
        // 当前游戏状态
        this.gameState = 'ready';
        // 记录已经打开的方块
        this.openedTiles = [];
        // 初始化游戏地图
        this.initMap();
    }

    // 初始化游戏地图
    initMap() {
        // 随机生成图案
        const imageIndexes = [];

        for (let i = 0; i < this.rows * this.cols; i += 2) {
            const index = Math.floor(Math.random() * this.images.length);
            imageIndexes.push(index, index);
        }

        // 随机打乱图案顺序
        for (let i = 0; i < imageIndexes.length; i++) {
            const j = Math.floor(Math.random() * (this.rows * this.cols));
            [imageIndexes[i], imageIndexes[j]] = [imageIndexes[j], imageIndexes[i]];
        }

        // 生成游戏地图
        for (let i = 0; i < this.rows; i++) {
            const row = [];
            for (let j = 0; j < this.cols; j++) {
                const tile = {
                    imageIndex: imageIndexes[i * this.cols + j],
                    state: 'closed'
                };
                row.push(tile);
            }
            this.map.push(row);
        }
    }

    // 检查是否可以连通
    canConnect(tile1, tile2) {
        // 相同图案才能连通
        if (tile1.imageIndex !== tile2.imageIndex) {
            return false;
        }

        // 横向检查
        let path = this.findPath(tile1, tile2, 'horizontal');
        if (path) {
            return path;
        }

        // 竖向检查
        path = this.findPath(tile1, tile2, 'vertical');
        if (path) {
            return path;
        }

        // 斜线检查
        path = this.findObliquePath(tile1, tile2);
        if (path) {
            return path;
        }

        // 无法连通
        return false;
    }

    // 横向或竖向检查
    findPath(tile1, tile2, direction) {
        const rowDelta = direction === 'horizontal' ? 0 : 1;
        const colDelta = direction === 'vertical' ? 1 : 0;
        let row = tile1.row + rowDelta;
        let col = tile1.col + colDelta;
        let path = [];
        while (row !== tile2.row && col !== tile2.col) {
            if (this.map[row][col].state !== 'empty') {
                // 如果路径中间有障碍物，则无法连通
                return false;
            }

            path.push({ row, column });
            row += rowDelta;
            col += colDelta;
        }

        // 路径连接成功
        path.push({ row: tile2.row, column: tile2.col });
        return path;
    }


    // 斜线检查
    findObliquePath(tile1, tile2) {
        const path1 = this.findPath(tile1, { row: tile2.row, col: tile1.col }, 'horizontal');
        const path2 = this.findPath(tile2, { row: tile2.row, col: tile1.col }, 'horizontal');

        if (path1 && path2) {
            // 找到路径1和路径2的交点
            const intersection = path1.find(pos => path2.some(p => p.row === pos.row && p.col === pos.col));
            if (intersection) {
                // 删除交点，将路径1和路径2合并
                const index1 = path1.findIndex(pos => pos.row === intersection.row && pos.col === intersection.col);
                path1.splice(index1, 1);

                const index2 = path2.findIndex(pos => pos.row === intersection.row && pos.col === intersection.col);
                path2.splice(index2, 1);

                const path = [...path1, ...path2];
                return path;
            }
        }
        return false;
    }

    // 打开方块
    openedTile(row, col) {
        // 如果方块已经被打开，无需处理
        const tile = this.map[row][col];
        if (this.state === 'open') {
            return;
        }
        // 将方块改为打开状态
        this.state = 'open';
        // 记录已经打开的方块
        this.openedTiles.push({ row, col });
        // 如果打开了两个方块，则进行连通性检查
        if (this.openedTiles.length === 2) {
            const tile1 = this.map[this.openedTiles[0].row][this.openedTiles[0].col];
            const tile2 = this.map[this.openedTiles[1].row][this.openedTiles[1].col];
        }
    }



}