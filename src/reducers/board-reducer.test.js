import boardReducer from './board-reducer';

describe('boardReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(boardReducer({}, { type: null })).toEqual({});
  });

  test('Should create board with empty squares', () => {
    expect(boardReducer(
      {
        squares:[null, null, null, null, null, null, null, null, null],
        xIsNext: true
      },
      {
        type: 'FILL_SQUARE',
        squares:[null, null, null, null, null, null, null, null, 'X'],
        xIsNext: false
      }
    )).toEqual(
        {
          squares: [null, null, null, null, null, null, null, null, 'X'],
          xIsNext: false
        });
  });

});
