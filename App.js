import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextBase,TextInput,Button} from 'react-native';
import React,{useEffect,useState} from 'react';
import { createNavigationContainerRef, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Components from './components/Components';
import Welcome from './Welcome';



export default function App({Navigation}) {
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const Stack=createNativeStackNavigator()
  // const Navigation=useNavigation();
  


  return (
    
     
    <View style={styles.container}>
    
    
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Welcome}/>
      <Stack.Screen name="Grammarly" component={Components}/>
      </Stack.Navigator>
      </NavigationContainer>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
