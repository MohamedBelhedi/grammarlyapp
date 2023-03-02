import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextBase,TextInput, PermissionsAndroid,Button} from 'react-native';
import React,{useEffect,useState} from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { clietID } from '../config/config';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from 'firebase/auth';
import { createNavigationContainerRef, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import Contacts from 'react-native-contacts';
import * as Contacts from 'expo-contacts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { async } from '@firebase/util';




export default function Components() {
  const [write,setWrite]=useState("")
  const[kontakte,setKontakte]=useState("")
  const [telefonnummer,setTelefonnummer]=useState("")
  const[testVal,setTestVal]=useState("")
  const data=[
    {name:"momo",telefon:"+4901234567"},{name:"momo1",telefon:"+490123445567"},{name:"momo2",telefon:"+499485456456"}
   ]
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




     }
     const contact=async()=>{

      // console.log(data[0].Momo1)
      // setTelefonnummer(data[0].Momo1)
      // setTestVal(data[0].Momo1)
      // // kontakte===data[1]==="Momo1"?setTelefonnummer(data[1].Momo1):null
      // kontakte===data[0]?setTestVal(JSON.stringify(data[0])):null
     
      setTestVal("Hallo")
      const testTelefonummer=data[0].telefon
      await AsyncStorage.setItem("test",testTelefonummer)
      const value=await AsyncStorage.getItem("test")
      await setKontakte(value)


     }
      
    useEffect(()=>{
// Contacts.getAll().then(contacts =>{
// console.log(contacts)
// })
    // getContacts();
 setInterval(()=>{
  // contact();


 },1000)
    },[])
  return (
    <View style={styles.container}>
    <Text onPress={abmelden}>SignOut</Text>
    <View style={{margin:30}}>
      <Text>Welcome to Grammer Chat Message Correction App</Text>
      </View>
      <View>
      <Text>{testVal}</Text>
      {data.map(data_ext=>(
        <>
          <View>
<Text>{data_ext.name}</Text>        
        </View>
        <View>
        <Button title={data_ext.telefon} onPress={contact} />
        
        </View>
        </>
      ))
    
    }
      
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

    onChangeText={(text)=>{setWrite(text1);console.log(text1)}}
    value={write}
    
    />

    <TextInput onChangeText={(text2)=>{setKontakte(text2);console.log(text2)}} value={kontakte} placeholder="Kontakte"/> 
    

    
      
  </GrammarlyEditorPlugin>
  <Text onPress={getContacts}>Suche Kontakt</Text>
      
      <StatusBar style="auto" />
      <FloatingWhatsApp
     chatMessage={write}
     statusMessage="Hallo was geht"
     onSubmit
    // phoneNumber={data.forEach((testen)=>(JSON.stringify(testen[0].Momo1)))}
    phoneNumber={()=>{setKontakte(kontakte)}}
     
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
