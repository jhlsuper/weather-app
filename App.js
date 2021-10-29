import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
     <View style={styles.container}>
        <View style = {styles.city}>
          <Text style={styles.cityName}>Seoul</Text>
        </View >
        <View style = {styles.weather}>
          <View>
            <Text>27</Text>
            <Text>Sunny</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
  flex:1, backgroundColor:"lightyellow"
  },
  city:{
    flex:1.2,
    justifyContent:"center",
    alignItems:"center",
  },
  cityName:{
    
    fontSize:68,
    fontWeight:"500",
  },
  weather:{
    flex:3,
    backgroundColor:"lightblue"
  }
});
