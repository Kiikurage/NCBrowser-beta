import { SplitterState } from './SplitterState';

describe('SplitterState', () => {
    describe('resize', () => {
        it('Splitter Indexが範囲外なら何もしない', () => {
            const oldState = SplitterState.create({ sizes: [100, 100], });

            expect(SplitterState.resize(oldState, -1, 100)).toEqual(oldState);
            expect(SplitterState.resize(oldState, 10, 100)).toEqual(oldState);
        });

        describe('Flex Cellに隣接するSplitterを動かした場合', () => {
            it('Flex Cellの左隣のSplitterを左に動かした場合、flex cellを伸ばす', () => {
                const oldState = SplitterState.create({ sizes: [100, 200, 1000, 300, 400], flexCellIndex: 1 });

                expect(SplitterState.resize(oldState, 1, -50)).toEqual({
                    ...oldState,
                    sizes: [100, 150, 1050, 300, 400]
                });
            });

            it('Flex Cellの左隣のSplitterを右に動かした場合、flex cellを縮める', () => {
                const oldState = SplitterState.create({ sizes: [100, 200, 1000, 300, 400], flexCellIndex: 1 });

                expect(SplitterState.resize(oldState, 1, 50)).toEqual({
                    ...oldState,
                    sizes: [100, 250, 950, 300, 400]
                });
            });

            it('Flex Cellの右隣のSplitterを左に動かした場合、flex cellを伸ばす', () => {
                const oldState = SplitterState.create({ sizes: [100, 200, 1000, 300, 400], flexCellIndex: 1 });

                expect(SplitterState.resize(oldState, 2, -50)).toEqual({
                    ...oldState,
                    sizes: [100, 200, 950, 350, 400]
                });
            });

            it('Flex Cellの右隣のSplitterを右に動かした場合、flex cellを縮める', () => {
                const oldState = SplitterState.create({ sizes: [100, 200, 1000, 300, 400], flexCellIndex: 1 });

                expect(SplitterState.resize(oldState, 2, 50)).toEqual({
                    ...oldState,
                    sizes: [100, 200, 1050, 250, 400]
                });
            });
        });

        describe('Flex Cellに隣接していないSplitterを動かした場合', () => {
            it('Flex Cellより左側のSplitterを左に動かした場合、flex cellを伸ばす', () => {
                const oldState = SplitterState.create({ sizes: [100, 200, 1000, 300, 400], flexCellIndex: 1 });

                expect(SplitterState.resize(oldState, 0, -50)).toEqual({
                    ...oldState,
                    sizes: [50, 200, 1050, 300, 400]
                });
            });

            it('Flex Cellより左側のSplitterを右に動かした場合、flex cellを縮める', () => {
                const oldState = SplitterState.create({ sizes: [100, 200, 1000, 300, 400], flexCellIndex: 1 });

                expect(SplitterState.resize(oldState, 0, 50)).toEqual({
                    ...oldState,
                    sizes: [150, 200, 950, 300, 400]
                });
            });

            it('Flex Cellより右側のSplitterを左に動かした場合、flex cellを伸ばす', () => {
                const oldState = SplitterState.create({ sizes: [100, 200, 1000, 300, 400], flexCellIndex: 1 });

                expect(SplitterState.resize(oldState, 3, -50)).toEqual({
                    ...oldState,
                    sizes: [100, 200, 950, 300, 450]
                });
            });

            it('Flex Cellより右側のSplitterを右に動かした場合、flex cellを縮める', () => {
                const oldState = SplitterState.create({ sizes: [100, 200, 1000, 300, 400], flexCellIndex: 1 });

                expect(SplitterState.resize(oldState, 3, 50)).toEqual({
                    ...oldState,
                    sizes: [100, 200, 1050, 300, 350]
                });
            });
        })
    });
});
