import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextBase,TextInput,Button} from 'react-native';
import React,{useEffect,useState} from 'react';
import { createNavigationContainerRef, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Components from './components/Components';

import { FirebaseApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Welcome() {
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const Stack=createNativeStackNavigator()
  // const Navigation=useNavigation();
  const navigation=useNavigation();
const auth=getAuth();

const register=()=>{

    createUserWithEmailAndPassword(auth,email, password)
    .then((userCredential)=>{
        const user=userCredential.user
        navigation.navigate("Grammarly")
    }).catch(err=>{console.log(err.message);})


}
const anmelden=()=>{

    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user=userCredential.user
        navigation.navigate("Grammarly")

    })


}



  return (
    
     
    <View style={styles.container}>
    
    
      
      
    
    <View style={{margin:30}}>
      <Text>Welcome to Grammer Chat Message Correction App</Text>
      </View>
      
    <TextInput onChangeText={(text)=>{setEmail(text);console.log(text);}}
      placeholder="Email..." value={email}/>
    <TextInput onChangeText={(text)=>{setPassword(text);console.log(text);}}
      placeholder="Password..." value={password}/>
        
      <StatusBar style="auto" />
<Button onPress={register} title="Register"/>
<Button onPress={anmelden} title="Login"/>
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
