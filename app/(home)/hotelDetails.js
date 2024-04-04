import { StyleSheet, Text, View,ScrollView, Pressable, Animated, Image } from 'react-native'
import React, { useState,useRef } from 'react'
import {Ionicons,SimpleLineIcons,MaterialCommunityIcons} from '@expo/vector-icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import FoodItem from '../../components/FoodItem'
import { useSelector } from 'react-redux'
import Modal from 'react-native-modal'

export default function hotelDetails() {
  const params=useLocalSearchParams()
  const router=useRouter
  const cart=useSelector((state)=>state.cart.cart)
  // console.log(cart)

  const scrollViewRef=useRef(null)
  const scrollAnim=useRef(new Animated.Value(0)).current
  const ITEM_HEIGHT=650
  const scrollToCategory=(index)=>{
    // console.log(index)
    const yOffset=index*ITEM_HEIGHT
    Animated.timing(scrollAnim,{
      toValue:yOffset,
      duration:500,
      useNativeDriver:true
    }).start()
    scrollViewRef.current.scrollTo({y:yOffset,animated:true})
  }
  const [modalVisible, setModalVisible] = useState(false)
  const [openBox, setopenBox] = useState({name:"Recommended",value:true})
  const toggleOpenBox=(item,value)=>{
    setopenBox(prev=>{ if(prev.name!==item.name) {return{name:item.name,value:!value} }
    else{
      return {value:!prev[value]}
    }})
  }
  const menu = [
    {
      id: "20",
      name: "Recommended",
      items: [
        {
          id: "101",
          name: "Paneer 65",
          price: 275,
          description:
            "This is served with Raita and gravy and has loaded with chilli paste mixed chicken Kebabs",
          rating: 4.1,
          ratings: 43,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/druwjzmfmz7qvepq3bkr",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },
        {
          id: "102",
          name: "Chilly Chicken (Boneless)",
          price: 285,
          description:
            "E: 604.42 KCal (163.36 KCal), C: 29.67 Grams (8.02 Grams), P: 50.63 Grams (13.68 Grams), F: 30.94 Grams (8.36 Grams)",
          rating: 4.3,
          ratings: 34,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ry3c3f518z10t4olu4l7",
          veg: false,
          bestSeller: true,
          quantity: 1,
        },
        {
          id: "103",
          name: "Spl Veg Biryani",
          price: 250,
          description:
            "E: 1327.35 KCal (126.41 KCal), C: 213.24 Grams (20.31 Grams), P: 26.99 Grams (2.57 Grams), F: 38.46 Grams (3.66 Grams)",
          rating: 4.5,
          ratings: 56,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fsitbray4gq1kxcndqqx",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },
        {
          id: "104",
          name: "Chilly Paneer",
          price: 220,
          description:
            "E: 871.69 KCal (272.40 KCal), C: 21.54 Grams (6.73 Grams), P: 51.90 Grams (16.22 Grams), F: 64.36 Grams (20.11 Grams",
          rating: 3.8,
          ratings: 22,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/byonwwb8mzxyqluxlqpq",
          veg: true,
          bestSeller: true,
          quantity: 1,
        },
        {
          id: "105",
          name: "Chicken 65",
          price: 300,
          description:
            "E: 544.39 KCal (155.54 KCal), C: 25.11 Grams (7.17 Grams), P: 45.15 Grams (12.90 Grams), F: 27.91 Grams (7.97 Grams)",
          rating: 4.5,
          ratings: 45,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/x0jegvlf4h7wrgaaqdqi",
          veg: false,
          bestSeller: true,
          quantity: 1,
        },
      ],
    },
    {
      id: "11",
      name: "Rice",
      items: [
        {
          id: "201",
          name: "Chicken Fried Rice",
          price: 260,
          description:
            "E: 1142.26 KCal (163.18 KCal), C: 125.05 Grams (17.86 Grams), P: 40.11 Grams (5.73 Grams), F: 51.37 Grams (7.34 Grams)",
          rating: 4.3,
          ratings: 34,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/akmx533z73jjbq8avy6v",
          veg: false,
          bestSeller: true,
        },
        {
          id: "202",
          name: "Egg Fried Rice",
          price: 220,
          description:
            "E: 1729.51 KCal (164.72 KCal), C: 204.54 Grams (19.48 Grams), P: 44.03 Grams (4.19 Grams), F: 79.02 Grams (7.53 Grams)",
          rating: 4.3,
          ratings: 52,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lv6jl9qdscekjmwkxm9l",
          veg: false,
          bestSeller: false,
        },
        {
          id: "203",
          name: "Veg Fried Rice",
          price: 190,
          description:
            "E: 1477.00 KCal (140.67 KCal), C: 204.14 Grams (19.44 Grams), P: 22.90 Grams (2.18 Grams), F: 59.95 Grams (5.71 Grams)",
          rating: 4.6,
          ratings: 56,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pycpbzawueci1dvhmkr3",
          veg: true,
          bestSeller: true,
        },
        {
          id: "204",
          name: "Jeera Rice",
          price: 195,
          description:
            "E: 1832.30 KCal (174.50 KCal), C: 246.73 Grams (23.50 Grams), P: 27.51 Grams (2.62 Grams), F: 78.15 Grams (7.44 Grams)",
          rating: 4.5,
          ratings: 48,
          image:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xukq8swrwct8usmg4cjv",
          veg: true,
          bestSeller: false,
        },
      ],
    },
  ];
  return (
    <>
    <ScrollView ref={scrollViewRef} style={{backgroundColor:'white'}}>
    <View style={{marginTop:5,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <Ionicons onPress={()=>router.back()} style={{padding:5}} name='arrow-back' size={24} color="black"/>
      <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:14,gap:10}}>
        <SimpleLineIcons name='camera' size={24} color='black'/>
        <Ionicons name='bookmark-outline' size={24} color='black'/>
        <MaterialCommunityIcons name='share-outline' size={24} color='black'/>
      </View>
    </View>
    <View style={{justifyContent:'center',alignItems:"center",marginVertical:12}}>
      <Text>{params.name}</Text>
      <Text>
        {params.cuisines}
      </Text>
      <View style={{flexDirection:'row',alignItems:'center',gap:4,marginTop:10}}>
        <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#006A4E',borderRadius:4,paddingHorizontal:4,paddingVertical:5,gap:4}}>
          <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>{params?.aggregate_rating}</Text>
          <Ionicons name='star-sharp' size={25} color='black'/> 
        </View>
      </View>
      <Text style={{fontSize:15,fontWeight:'500',marginLeft:5}}>3.2k ratings</Text>
    </View>
    <View style={{justifyContent:"center",alignItems:'center',backgroundColor:'D0F0C0',borderRadius:20,paddingHorizontal:10,paddingVertical:5,marginTop:12}}>
      <Text>30-40 mins - 6 Km|Bangalore</Text>
    </View>
    {
      menu?.map((item,index)=>(
        <FoodItem key={index} item={item} openBox={openBox} toggleOpenBox={toggleOpenBox}/>
      ))
    }
    </ScrollView>
    <View style={{ flexDirection: "row", backgroundColor: "white" }}>
      {menu?.map((item,index)=>(
        <Pressable key={index} style={{paddingHorizontal:7,borderRadius:4,paddingVertical:5,marginVertical:10,marginHorizontal:10,alignItems:'center',justifyContent:'center',borderColor:'#181818',borderWidth:1}} onPress={()=>{scrollToCategory(index);toggleOpenBox(item,!openBox.value)}}>
          <Text>{item?.name}</Text>
        </Pressable>
      ))}
    </View>

    <Pressable style={{width:60,height:60,borderRadius:30,justifyContent:'center',alignItems:'center',position:"absolute",right:25,bottom:cart?.length>0?70:35,backgroundColor:'black'}}
    onPress={()=>setModalVisible(!modalVisible)}
    >
      <Ionicons style={{textAlign:'center'}} name='fast-food-outline' size={24} color='white'/>
      <Text style={{textAlign:'center',color:'white',fontWeight:'500',fontSize:11,marginTop:3}}>MENU</Text>
    </Pressable>

        <Modal isVisible={modalVisible} onBackdropPress={()=>setModalVisible(!modalVisible)}>
          <View style={{backgroundColor:'black',height:190,width:250,position:'absolute',bottom:35,right:10,borderRadius:7}}>
            {
              menu?.map((item,index)=>(
                <Pressable key={index} style={{padding:10,flexDirection:"row",alignItems:"center",justifyContent:'space-between'}} onPress={()=>{scrollToCategory(index);toggleOpenBox(item,!openBox.value)}}>
                  <Text style={{color:'#D0D0D0',fontWeight:'600',fontSize:10}} >
                    {item?.name}
                  </Text>
                  <Text style={{color:'#D0D0D0',fontWeight:'600',fontSize:10}}> {item?.items?.length} </Text>
                  </Pressable>
              ))
            }
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image style={{width:120,height:70,resizeMode:'contain'}}
               source={{
                uri:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800"
               }}/>
            </View>
          </View>
        </Modal>

    {cart?.length>0 && <Pressable style={{backgroundColor:"#fd5c63",paddingHorizontal:10,paddingVertical:10,justifyContent:'center',alignItems:'center'}}>
      <Text style={{textAlign:'center',color:'white',fontSize:15,fontWeight:'600'}}>
         {cart.length} items added
      </Text>
      <Text style={{textAlign:'center',color:'white',marginTop:5,fontWeight:'600'}}>
        Add items worth 240 to reduce surge fees by Rs 35
      </Text>
      </Pressable>}
    </>
  )
}

const styles = StyleSheet.create({})