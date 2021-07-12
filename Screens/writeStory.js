import React, { Component } from 'react';
import { Text, View, StyleSheet, Button,TextInput} from 'react-native';
import { Header } from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class writeStory extends Component {
    constructor(){
        super()
        this.state={
         title:"",
         author:"",
         story:""
        }
      }
    render() {
      return (
        <SafeAreaProvider style={styles.container}>
      <Header
  backgroundColor='aqua'
  
  centerComponent={{ text: 'WriteStory ', style: { color: 'blue',fontSize:18,fontWeight:"bold" } }}
  />
  <TextInput placeholder="title"value={this.state.title}></TextInput>
  <TextInput placeholder="author"value={this.state.author}></TextInput>
  <TextInput placeholder="story"value={this.state.story}></TextInput>
</SafeAreaProvider>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
       flex: 1,

            },
     inputbox:{
       borderWidth:4,
       width:200,
       height:50,
       marginTop:200,
       alignSelf:"Center",
       textAlign:"Center"
       },
       button:{
         width:100,
         height:55,
         alignSelf:"center",
         padding:10,
         margin:10,
         backgroundColor:"seashell",
         borderRadius:10
       },
       buttonText:{
         textAlign:"center",
         fontSize:20,   
         fontWeight:"bold"
       },
       displayText:{
         textAlign:"center",
         fontSize:30
       },
       chunkButton:{
         width:100,
         height:50,
         justifyContent:"center",
         alignItems:"center",
         alignSelf:"center",
         borderRadius:20,
         margin:5,
         backgroundColor:"red"
         
       }
   });
   