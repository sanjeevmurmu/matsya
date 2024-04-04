import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Image } from 'react-native'

export default function Hotel({item}) {
    const router=useRouter()
  return (
    <Pressable style={{marginHorizontal:6,marginVertical:12,borderRadius:20,backgroundColor:"white"}} onPress={()=>router.push({pathname:"/hotelDetails",params:{
        id:item.id,
        name:item.name,
        address:item.address,
        smalladdress:item.smalladdress,
        cuisines:item.cuisines,
        aggregate_rating:item.aggregate_rating 
    }})}>
        <Image source={{uri:item?.featured_image}} style={{width:"100%",aspectRatio:6/4,borderTopLeftRadius:6,borderTopRightRadius:6}}>

        </Image>
        <View style={{flexDirection:'row',alignItems:"center",justifyContent:"space-between"}}>
            <View style={{paddingVertical:4,paddingHorizontal:3}}>
                <Text style={{paddingHorizontal:10,marginTop:10,fontSize:16,fontWeight:"600"}}>
                    {item?.name}
                </Text>
                <Text style={{paddingHorizontal:10,marginTop:3,fontSize:15,fontWeight:"500",color:"gray"}}>{item?.cuisines}</Text>
                <Text style={{paddingHorizontal:10,marginTop:10,fontSize:14,fontWeight:"500",color:"#505050"}} >{item?.time}</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:'center',backgroundColor:"#006A4E",borderRadius:4,paddingHorizontal:4,paddingRight:5,marginTop:10,gap:3}}>
                <Text style={{textAlign:'center',color:'white'}}>{item?.aggregate_rating}</Text>
                <Ionicons name="star-sharp"size={24} color="white"/>
            </View>
        </View>
        <View style={{borderWidth:0.5,borderColor:"#C8C8C8",marginHorizontal:10}}/>
        <View style={{flexDirection:'row',alignItems:'center',gap:4,marginVertical:5}}>
            <MaterialCommunityIcons name='brightness-percent' size={24} color='blue'/>
            <Text style={{marginLeft:2,color:"#1f75FE",fontWeight:"500"}}>50% off on order above Rs 300</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({})