import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextBase,TextInput} from 'react-native';
import React,{useEffect,useState} from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Grammer Correction App</Text>
     <GrammarlyEditorPlugin clientId='client_Dn1ZCRrauR12cEkAcUgXaj'>
      
    <TextInput multiline    style={
      {
        maxHeight: 200,
        paddingBottom: 30,
      }
      
    } 
    onblur={onblur}
    
    />
    
      
  </GrammarlyEditorPlugin>
      
      <StatusBar style="auto" />
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
