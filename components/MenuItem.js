import { Pressable, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Image } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { addToCart,incrementQuantity,decrementQuantity,removeFromCart } from '../redux/CartReducer'

export default function MenuItem({item}) {
  const [addItems, setAddItems] = useState(0)
  const [selected,setSelected]=useState(false)
  const dispatch=useDispatch()
  // console.log(item)
  return (
    <View>
        <Pressable style={{margin:10,flexDirection:"row",justifyContent:"space-between",marginVertical:15}}>
            <View>
                <Text style={{fontSize:16,fontWeight:'600'}}>{item?.name}</Text>
                <Text>${item?.price}</Text>
                <Text style={{marginTop:5,borderRadius:4}}>
                  {
                    [0,0,0,0,0].map((e,i)=>(
                      <FontAwesome key={i} style={{paddingHorizontal:3}}
                      name={i<Math.floor(item.rating)?"star":"star-o"} size={15} color="#FFD700"
                      />
                    ))
                  }
                </Text>
                <Text style={{width:200,marginTop:8,color:'gray',fontSize:12}}>{(item?.description.length>40) ? (item?.description.substr(0,37)+'...'):(item?.description)}</Text>
            </View>
            <Pressable style={{marginRight:10}}>
              <Image source={{uri:item?.image}} style={{width:120,height:120,borderRadius:8}}/>
              {
                selected?( <Pressable
                  style={{
                    position: "absolute",
                    top: 95,
                    left: 20,
                    backgroundColor: "#fd5c63",
                    flexDirection: "row",
                    paddingHorizontal: 10,
                    alignItems: "center",
                    borderRadius: 5,
                  }}
                >
                  <Pressable
                    onPress={() => {
                      if (addItems == 1) {
                        dispatch(removeFromCart(item));
                        setAddItems(0);
                        setSelected(false);
                        return;
                      }
                      setAddItems((c) => c - 1);
                      dispatch(decrementQuantity(item));
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        color: "white",
                        paddingHorizontal: 6,
                      }}
                    >
                      -
                    </Text>
                  </Pressable>
    
                  <Pressable>
                    <Text
                      style={{
                        color: "white",
                        paddingHorizontal: 6,
                        fontSize: 15,
                      }}
                    >
                      {addItems}
                    </Text>
                  </Pressable>
    
                  <Pressable
                    onPress={() => {
                      setAddItems((c) => c + 1);
                      dispatch(incrementQuantity(item));
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        color: "white",
                        paddingHorizontal: 6,
                      }}
                    >
                      +
                    </Text>
                  </Pressable>
                </Pressable>):(
                  <Pressable onPress={()=>{
                  setSelected(true);
                  if(addItems==0){
                    setAddItems((c)=>c+1);}
                  dispatch(addToCart(item))
                }} style={{position:'absolute',top:95,left:20,borderColor:"#E32636", paddingHorizontal:25,paddingVertical:5, alignItems:"center",borderWidth:1,flexDirection:"row",backgroundColor:'white',borderRadius:5}}>
                  <Text style={{fontSize:18,fontWeight:'600',color:"#fd5c63"}}>ADD</Text>
                </Pressable>)
              }
             
            </Pressable>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})