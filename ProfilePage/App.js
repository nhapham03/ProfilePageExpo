import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      
      {/* Header Section and Image */}
      <View style={styles.header}>
        <Image
          source={require('./binlin.jpg')} 
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>Welcome To My Profile Page on Expo</Text>
      </View>


      {/* Information Section */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.infoText}>This is me and my brother Troy Pham</Text>
        <Text style={styles.infoText}>Fun Fact: We are Twins and we look nothing alike :)</Text>
        <Text style={styles.infoText}>We are turning 21 this Summer!! HOORAYYY</Text>
        <Text style={styles.infoText}>My brother is definitely a better coder and I learn a lot from him!</Text>
        <Text style={styles.infoText}>My Favorite Food are Bun Bo Hue, Nachos, Thai Curry and so much more.</Text>
        <Text style={styles.infoText}>In our free time, my brother and I go to coding events to meet with other developers in Seattle.</Text>
        <Text style={styles.infoText}>Thanks for reading!! See you next time :D</Text>
      </ScrollView>

      {/* Input Form */}
      <View style={styles.inputForm}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name: "
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your comment: "
          multiline={true}
        />
        <Text style={styles.submitButton}>Submit</Text>
      </View>
    </View>
  );
}

const styles = {
  header: {
    backgroundColor: '#FFC0CB',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#e0218a',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  headerImage: {
    width: 350,
    height: 350,
  },
  scrollView: {
    padding: 10,
    marginTop: 10,
  },
  infoText: {
    marginBottom: 10,
    fontSize: 16,
  },
  inputForm: {
    padding: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
  },
};
