export default (
  state, action) => {
  switch (action.type) {
    case 'FILL_SQUARE':
      return {
        squares: action.squares,
        xIsNext: action.xIsNext
      }
    default:
      return state;
  }
}
