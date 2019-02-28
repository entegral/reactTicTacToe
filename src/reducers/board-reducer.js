export default (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_BOARD':
      return action.squares;
    default:
      return state;
  }
}
