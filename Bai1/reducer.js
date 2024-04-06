const initialState = {
  selectedImageUri: null,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_IMAGE':
      return {
        ...state,
        selectedImageUri: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;
