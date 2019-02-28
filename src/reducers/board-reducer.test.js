import boardReducer from './board-reducer';

describe('boardReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(boardReducer({}, { type: null })).toEqual({});
  });

  test('Should create board with empty squares', () => {
    expect(boardReducer({}, { type: 'CREATE_BOARD', squares: [null, null, null, null, null, null, null, null, null]})).toEqual([null, null, null, null, null, null, null, null, null]);
  });

});
