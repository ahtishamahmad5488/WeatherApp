import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth} from '../Dimensions/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from '../Components/Cards';

const Home = props => {
  const [city, setCity] = useState('');

  const Cities = [
    {
      name: 'Lahore',
      image: require('../Images/lahore.jpeg'),
    },
    {
      name: 'Islamabad',
      image: require('../Images/islamabad.jpeg'),
    },
    {
      name: 'Karachi',
      image: require('../Images/karachi.jpg'),
    },
    {
      name: 'Peshawar',
      image: require('../Images/peshawar.jpeg'),
    },
    {
      name: 'New Delhi',
      image: require('../Images/image3.jpg'),
    },
    {
      name: 'New York',
      image: require('../Images/image4.jpg'),
    },
    {
      name: 'London',
      image: require('../Images/image5.jpg'),
    },
    {
      name: 'San francisco',
      image: require('../Images/image6.jpg'),
    },
    {
      name: 'New Jersey',
      image: require('../Images/image7.jpg'),
    },
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 10 : deviceHeight}
      style={{flex: 1}}
      keyboardVerticalOffset={Platform.select({ios: 0, android: 0})}>
      <ScrollView>
        <View>
          <ImageBackground
            source={require('../Images/image2.jpg')}
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
            <View style={{paddingHorizontal: 20, marginTop: 100}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                Welcome to Dark Sky
              </Text>
              <Text style={{fontSize: 20, color: 'white'}}>
                Search the city by Name
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: 'white',
                  marginTop: 10,
                  paddingHorizontal: 10,
                }}>
                <TextInput
                  value={city}
                  onChangeText={val => setCity(val)}
                  placeholder="Search City"
                  placeholderTextColor="white"
                  style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
                />
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Details', {
                      name: city,
                    });
                    setCity('');
                  }}>
                  <Icon name="search" size={22} color="white" />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 22,
                  marginTop: 220,
                  marginBottom: 20,
                  fontWeight: '400',
                  color: 'white',
                }}>
                My Locations
              </Text>
              <FlatList
                horizontal
                data={Cities}
                renderItem={({item}) => (
                  <Cards
                    name={item.name}
                    image={item.image}
                    navigation={props.navigation}
                  />
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  bckImage: {
    width: deviceWidth,
    height: deviceHeight,
  },
});
export default Home;
