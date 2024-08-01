import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from 'react-native';
import {deviceHeight, deviceWidth} from '../Dimensions/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';

const Portfolio = props => {
  const skills = [
    'HTML',
    'CSS',
    'Tailwind CSS',
    'JavaScript',
    'React Js',
    'React Native',
    'Redux',
    'Firebase',
  ];
  const education = [
    {
      degree: 'BS in Computer Science',
      institution: 'University of Education',
      year: '2022 - 2026',
    },
  ];
  const projects = [
    {
      title: 'Weather App',
      description:
        'A React Native app for weather forecasting. In this App, by using API we can search the weather of any city in all over the World',
      link: 'https://github.com/username/weather-app',
    },
    {
      title: 'Chat Application',
      description:
        'A React Native Chat Application with the help of Firebase. In this App, two person communicate with each other on RealTime.',
      link: 'https://github.com/username/ecommerce-app',
    },
    {
      title: 'Photo Studio Portfolio',
      description:
        'PhotoShop Studio WebPage. It is created with the help of HTML and CSS',
      link: 'https://github.com/username/ecommerce-app',
    },
  ];

  const openLink = url => {
    Linking.openURL(url);
  };

  return (
    <ImageBackground
      source={require('../Images/images/bg.png')}
      style={{width: deviceWidth, height: deviceHeight}}
      blurRadius={70}>
      <ScrollView>
        <TouchableOpacity
          style={{marginHorizontal: 10, marginVertical: 10}}
          onPress={() => props.navigation.goBack()}>
          <Icon name="menu" size={46} color="white" />
        </TouchableOpacity>
        <View style={styles.header}>
          <Image
            source={require('../Images/myPic.png')}
            style={styles.profilePicture}
          />
          <Text style={styles.name}>Ahtisham Ahmad</Text>
          <Text style={styles.title}>Mobile Developer</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <Text key={index} style={styles.skill}>
                {skill}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.degree}>{edu.degree}</Text>
              <Text style={styles.institution}>{edu.institution}</Text>
              <Text style={styles.year}>{edu.year}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projects.map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDescription}>
                {project.description}
              </Text>
              <TouchableOpacity onPress={() => openLink(project.link)}>
                <Text style={styles.projectLink}>View Project</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 5,
    marginTop: 10,
  },
  name: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: '#f0f8ff',
  },
  section: {
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skill: {
    backgroundColor: '#ddd',
    color: 'black',
    padding: 8,
    borderRadius: 5,
    margin: 4,
  },
  educationItem: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f0ffff',
  },
  institution: {
    fontSize: 16,
    color: '#f0f8ff',
  },
  year: {
    fontSize: 16,
    color: '#f0f8ff',
  },
  projectItem: {
    marginBottom: 10,
    color: 'white',
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f0ffff',
  },
  projectDescription: {
    fontSize: 16,
    color: '#f0f8ff',
  },
  projectLink: {
    fontSize: 16,
    color: '#0066cc',
  },
});

export default Portfolio;
