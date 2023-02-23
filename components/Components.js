import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextBase,TextInput, PermissionsAndroid} from 'react-native';
import React,{useEffect,useState} from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { clietID } from '../config/config';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from 'firebase/auth';
import { createNavigationContainerRef, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Contacts from 'react-native-contacts';
import * as Contacts from 'expo-contacts';



export default function Components() {
  const [write,setWrite]=useState("")
  const[kontakte,setKontakte]=useState("")
  const auth=getAuth(); 
  const navigation=useNavigation();
    const abmelden=()=>{
        signOut(auth)
        .then(()=>{
            navigation.navigate("Home")
        

        }).catch(err => console.log(err))


    }
    PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          'title': 'Contacts',
          'message': 'This app would like to view your contacts.',
          'buttonPositive': 'Please accept bare mortal'
        }
      )
      const getContacts=async()=>{
    //     const { data } =  await Contacts.getContactsAsync({
    //         fields: [Contacts.Fields.Emails],
    //       });
          
    //       if (data.length > 0) {
    //         const contact = data[0];
    //         console.log(contact);
    //       }
    const data=["+4901234567","+490123445567","+499485456456"]

    data.length>0?setKontakte(data[0]):null

     }
   
      
    useEffect(()=>{
// Contacts.getAll().then(contacts =>{
// console.log(contacts)

// })
    getContacts();

    },[])
  return (
    <View style={styles.container}>
    <Text onPress={abmelden}>SignOut</Text>
    <View style={{margin:30}}>
      <Text>Welcome to Grammer Chat Message Correction App</Text>
      </View>
      
     <GrammarlyEditorPlugin clientId={clietID}>
     <View>
 
     </View>
    <TextInput multiline    style={
      {
        maxHeight: 200,
        paddingBottom: 30,
        borderWidth: 5,
        backgroundColor:""
      }
      
    } 
    onblur={onblur}

    onChangeText={(text)=>{setWrite(text),console.log(text)}}
    value={write}
    
    />

    
      
  </GrammarlyEditorPlugin>
  <TextInput on/>
      
      <StatusBar style="auto" />
      <FloatingWhatsApp
     chatMessage={write}
     statusMessage="Hallo was geht"
     onSubmit
     phoneNumber={kontakte}
     
  />
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
