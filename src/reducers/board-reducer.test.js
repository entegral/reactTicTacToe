import boardReducer from './board-reducer';

describe('boardReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(boardReducer({}, { type: null })).toEqual({});
  });

  test('Should update game board squares with latest play and add previous board squares to history', () => {
    expect(boardReducer(
      {
        squares:[null, null, null, null, null, null, null, null, null],
        xIsNext: true,
        history: [{squares: [null, null, null, null, null, null, null, null, null]}]
      },
      {
        type: 'FILL_SQUARE',
        squares:[null, null, null, null, null, null, null, null, 'X'],
        xIsNext: false,
        history: [{squares: [null, null, null, null, null, null, null, null, null]}]
      }
    )).toEqual(
        {
          squares: [null, null, null, null, null, null, null, null, 'X'],
          xIsNext: false,
          history: [
            {squares: [null, null, null, null, null, null, null, null, null]},
            {squares: [null, null, null, null, null, null, null, null, 'X']}
          ]
        });
  });



});
