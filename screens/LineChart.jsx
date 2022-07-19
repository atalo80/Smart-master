import React from "react"; 
import { useState, useEffect } from 'react';
import { COLORS,   SIZES, icons   } from '../constants';
import Moment from 'moment';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Animated,
    Platform
} from 'react-native';
 
import { VictoryLine, VictoryBar, VictoryGroup , VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';

const LineChart = props => {   
  const  data = props.data  ;  
    const [brData, setBrData] = useState([]);    

  
  useEffect(() => { 
    if(data.length > 0 ){  
    console.log("`````````data[1]`````````````````````````",data);  
      setBrData(data);    
      console.log("item   wwww  ww",data);  
       }
   },[data])
   console.log("s[setBrData           LineChart.s]",brData);     

   return (
 
<VictoryChart
  theme={VictoryTheme.material}
>

{    brData &&  
  //  brData.map((s)=>{
      // return(  
        <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc"}
        }}
        data={brData}
      />
      //  )
      // })   
      
  }  
</VictoryChart>
  )
  }
 
const style = StyleSheet.create({
  shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 2,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,
  }
})


export default LineChart;