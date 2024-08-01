import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {deviceHeight, deviceWidth} from '../Dimensions/Dimensions';
import LottieView from 'lottie-react-native';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <ImageBackground
      source={require('../Images/images/bg.png')}
      style={{width: deviceWidth, height: deviceHeight}}
      blurRadius={200}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 160,
        }}>
        <Text
          style={{
            fontSize: 64,
            color: 'white',
            fontWeight: 'bold',
            textShadowColor: 'rgba(0, 0, 0, 0.8)', // Shadow color
            textShadowOffset: {width: -1, height: 1}, // Shadow offset
            textShadowRadius: 10,
          }}>
          Dark Sky
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: 'white',
            fontWeight: '400',
            textShadowColor: 'rgba(0, 0, 0, 0.8)', // Shadow color
            textShadowOffset: {width: -1, height: 1}, // Shadow offset
            textShadowRadius: 10,
          }}>
          Weather Application
        </Text>
        <View style={style.welcome}>
          <LottieView
            style={{flex: 1, margin: -90, marginBottom: 70}}
            source={require('../Images/splash2.json')}
            autoPlay
            loop
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -210,
          }}>
          <Image
            blurRadius={0.1}
            style={style.backgroundImg}
            source={require('../Images/img1.png')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  welcome: {
    height: deviceHeight - 250,
    width: deviceWidth,
  },
  backgroundImg: {
    height: deviceHeight - 530,
    width: deviceWidth,
    marginTop: 100,
  },
});
export default Splash;
