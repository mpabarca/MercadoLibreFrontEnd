const reducer = (state, action) => {
    switch (action.type) {
      case 'BUSQUEDA_REQUEST':
        return {
          ...state,
          busqueda: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  