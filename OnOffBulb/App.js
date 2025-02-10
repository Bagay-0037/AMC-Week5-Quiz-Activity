import React, {useState} from 'react';
import {View, Image, Text, Switch, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


});

export default App;