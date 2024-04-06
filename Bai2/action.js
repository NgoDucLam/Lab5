// action.js

// Định nghĩa hành động chọn ảnh
export const selectImage = (uri) => ({
  type: 'SELECT_IMAGE',
  payload: uri,
});
