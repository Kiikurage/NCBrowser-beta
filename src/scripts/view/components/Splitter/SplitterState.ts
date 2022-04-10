interface SplitterState {
    readonly sizes: readonly number[];
    readonly minSize: number;
    readonly maxSize: number;
    readonly flexCellIndex: number;
}

const create = (initialState: Partial<SplitterState>) => {
    return {
        sizes: [0],
        minSize: 0,
        maxSize: Number.MAX_VALUE,
        flexCellIndex: 0,
        ...initialState,
    };
};

/**
 * セルのサイズを変える
 * @param oldState 更新前のstate
 * @param splitterIndex 移動したSplitterのindex cell0と1の間のsplitterを0番とする
 * @param diff 移動量
 */
const resize = (oldState: SplitterState, splitterIndex: number, diff: number): SplitterState => {
    throw new Error('Not Implemented Yet');
}

export const SplitterState = {
    create,
    resize
}
