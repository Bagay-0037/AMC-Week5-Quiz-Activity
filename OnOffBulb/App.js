import React, {useState} from 'react';
import {View, Image, Text, Switch, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
//1. I imported the necessary modules such as View,Image, Text

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const imgOn = {
    uri: "https://static.vecteezy.com/system/resources/previews/018/874/654/original/light-bulb-icon-transparent-background-png.png",
    height: 200,
    width: 200,
  };

  const imgOff = {
    uri: "https://www.freeiconspng.com/uploads/bulb-off-icon-1.png",
    height: 200,
    width: 200,
  };

  //2.I created two const for Images, with their corresponding URL,height and width


  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, {backgroundColor: isEnabled ? 'yellow' : 'grey'}]}>
        <View style={styles.container}>
          {isEnabled ? <Image source={imgOn}/> : <Image source = {imgOff}/>};
          
        
        <Text>
          {isEnabled ? 'Bulb is On': 'Bulb is Off'};
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
//3. I also add the View and Text inside the SafeAreaView
//4. I add some ternary conditions with the same logic from the original effects of "isEnabled"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


});

export default App;
