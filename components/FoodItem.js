import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'
import MenuItem from './MenuItem'
export default function FoodItem({item,openBox,toggleOpenBox}) {
    const data=[item]
    // console.log(data)
    const isSubMenuOpen = openBox.name === item.name && openBox.value;
    const handleMenu=()=>{
      toggleOpenBox(item,!openBox.value)
      // console.log(openBox)
}
  return (
    <View>
        {data?.map((item,index)=>(
                <>
                <Pressable key={index} onPress={()=>handleMenu()} style={{margin:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text>{item.name} {item?.items?.length}</Text>
                <AntDesign name={`${isSubMenuOpen?'up':'down'}`}  size={20} color='black' style={{marginRight:10}}/>
                </Pressable> 
                {isSubMenuOpen && item?.items?.map((item,index)=>(
                            <MenuItem key={index} item={item}/>
                        ))}
                </>
        ))
            }
    </View>

  )
}

const styles = StyleSheet.create({})