import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Provider } from 'react-redux'
import store from '../../store'

export default function _layout(){
  return (
    <Provider store={store}>
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='index'/>
        <Stack.Screen name='hotelDetails'/>
        <Stack.Screen name='cart'/>
    </Stack>
    </Provider>
  )
}

