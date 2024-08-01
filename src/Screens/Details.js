import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {deviceHeight, deviceWidth} from '../Dimensions/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {Api_Key} from '../Constants/Constants';
import Loader from '../Components/Loader';
import LottieView from 'lottie-react-native';

const Details = props => {
  const {name} = props.route.params;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${Api_Key}`,
    )
      .then(res => res.json())
      .then(res => {
        setData(res), setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const ApiData = ({title, value, link}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
      }}>
      <Text style={{color: 'gray', fontSize: 22}}>{title}</Text>
      <Text style={{color: 'white', fontSize: 22}}>{value}</Text>
      {link && (
        <LottieView
          style={{height: 50, width: 50}}
          source={link}
          autoPlay
          loop
        />
      )}
    </View>
  );

  return (
    <View>
      <ImageBackground
        source={require('../Images/image1.jpg')}
        style={style.bckImage}
        imageStyle={{opacity: 0.7, backgroundColor: 'black'}}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Icon name="menu" size={46} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Portfolio')}>
            <Image
              source={require('../Images/myPic.png')}
              style={{height: 46, width: 46, borderRadius: 50}}
            />
          </TouchableOpacity>
        </View>
        {data ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
            <View>
              <Text style={{fontSize: 40, color: 'white', textAlign: 'center'}}>
                {name}
              </Text>
              <Text style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
                {data['weather'][0]['main']}
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: -20,
                }}>
                <LottieView
                  style={{height: 200, width: 200}}
                  source={require('../Images/splash.json')}
                  autoPlay
                  loop
                />
              </View>
            </View>
            <Text style={{fontSize: 64, color: 'white'}}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>
            <View>
              <Text style={{fontSize: 22, color: 'white', marginBottom: 16}}>
                Weather Detail's
              </Text>
              <View style={{width: deviceWidth - 60}}>
                <ApiData
                  value={data['wind']['speed']}
                  title="Wind"
                  link={require('../Images/wind.json')}
                />
                <ApiData
                  value={data['main']['pressure']}
                  title="Pressure"
                  link={require('../Images/pressure.json')}
                />
                <ApiData
                  value={`${data['main']['humidity']}%`}
                  title="Humidity"
                  link={require('../Images/humidity.json')}
                />
                <ApiData
                  value={data['visibility']}
                  title="Visibility"
                  link={require('../Images/visibility.json')}
                />
              </View>
            </View>
          </View>
        ) : null}
      </View>
      {loading && <Loader />}
    </View>
  );
};

const style = StyleSheet.create({
  bckImage: {
    width: deviceWidth,
    height: deviceHeight,
  },
});

export default Details;
