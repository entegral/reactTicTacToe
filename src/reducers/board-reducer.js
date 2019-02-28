export default (
  state, action) => {
  switch (action.type) {
    case 'FILL_SQUARE':
      const toHistory = {...action.squares};
      return {
        xIsNext: action.xIsNext,
        history: action.history.concat([{
          squares: toHistory
        }])}
    default:
      return state;
  }
}
