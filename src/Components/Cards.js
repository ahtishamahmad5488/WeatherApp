import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../Dimensions/Dimensions';

const Cards = ({image, name, navigation}) => {
  return (
    <TouchableOpacity
      style={{marginHorizontal: 10}}
      onPress={() => navigation.navigate('Details', {name})}>
      <ImageBackground
        source={image}
        style={{
          height: deviceHeight / 5,
          width: deviceWidth / 2 - 50,
        }}
        imageStyle={{borderRadius: 16}}
      />
      <View>
        <Text
          style={{
            fontSize: 16,
            textAlignVertical: 'center',
            color: 'white',
            textAlign: 'center',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
