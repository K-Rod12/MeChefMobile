import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";

export default function App() {
  return (


    <View style={styles.container}>

        <TouchableOpacity
          style={{
            alignSelf: "flex-start",
            marginLeft: 15,
          }}
          onPress={() => {
            props.navigation.pop();
          }}
        >
          <Icon name="chevron-left" size={40} />
        </TouchableOpacity>

      <View>
        <Text> Open up App.js to start working on your app!</Text>
        
        <StatusBar style="auto" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  backArrow:{
    flex: 1,
    backgroundColor: '#0000'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
