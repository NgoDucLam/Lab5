import React, { useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import { selectImage } from './action';
import { RootState } from './reducers'; // Giả sử file reducers được tổ chức trong một thư mục reducers và chứa RootState

const includeExtra = true;

const Bai2 = () => {
  const dispatch = useDispatch();
  const selectedImageUri = useSelector((state) => state.selectedImageUri);

  const onButtonPress = (type, options) => {
    if (type == 'capture') {
      launchCamera(options, response => {
        if (!response.didCancel && response.assets.length > 0) {
          dispatch(selectImage(response.assets[0].uri));
        }
      });
    } else {
      launchImageLibrary(options, response => {
        if (!response.didCancel && response.assets.length > 0) {
          dispatch(selectImage(response.assets[0].uri));
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn Ảnh Từ Thư Viện</Text>
        <View style={styles.buttonContainer}>
          {actions.map(({ title, type, options }) => (
            <TouchableOpacity
              key={title}
              onPress={() => onButtonPress(type, options)}
              style={styles.button}>
              <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.imageContainer}>
          {selectedImageUri && (
            <Image
              resizeMode="cover"
              resizeMethod="scale"
              style={styles.image}
              source={{ uri: selectedImageUri }}
            />
          )}
        </View>

    </View>
  );
};

export default Bai2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    margin: 10,
    backgroundColor: 'orange',
    width: 100,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 350,
  },
});

const actions = [
  {
    title: 'Select Image',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
];
