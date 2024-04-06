// reducer.js

// Khởi tạo trạng thái ban đầu của reducer
const initialState = {
  selectedImageUri: null,
};

// Reducer chịu trách nhiệm xử lý các hành động liên quan đến việc chọn ảnh
const reducer = (state = initialState, action) => {
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

export default reducer;
