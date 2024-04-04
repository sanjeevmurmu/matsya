import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Redirect} from 'expo-router'
const index=()=>{
  return (
      <Redirect href="/(home)"/>
      )
}

export default index

const styles=StyleSheet.create({})


// ->"/"
// Starting page of the application Redirects to home folder name should be inside brackets to be treated as route which will open the index.js file inside the folder