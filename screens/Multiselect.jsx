 import React from "react";
import { useState, useEffect } from 'react'; 
import Icon from 'react-native-vector-icons/MaterialIcons'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import RendProbBar from './RendProbBar';
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

import { VictoryPie, VictoryBar, VictoryGroup , VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
// import { Svg,Line } from 'react-native-svg'; 
 
const MultiSelect = props => {  
  const options= props.data[1];  
  const [selectedItems, setSelectedTeams] = useState([]) 
  const [dataTosand, setdataTosand] =  useState([]) 
  const [data, setdatad] = useState([]);
  const x= props.data[0]; 

  const newlist = options.map((obj)=>{  
      return  {   
      item :  obj ,
      id :  obj ,
      } 
   }) 
   
   useEffect(() => { 
    setdatad([])  
    if(x[0]){ 
       (x).map((item) => {  
          setdatad(oldArray  => [...oldArray , { id: item.id , name:item.name ,twitte :item.twitte , problems: item.problems}])
          console.log("s[problemsproblemsproblemsproblems.s]",item);  
        }) 
     }
   },[x])
  
  const onSelectedNewChange = (selectedItems) => {
   let maxItems = 3
      if ( selectedItems.length > maxItems ) {     
          return;     }     
       setSelectedTeams(selectedItems)   
 }  
   

  useEffect(() => { 
    setdataTosand([])  
    console.log("selectedItems]", selectedItems);  
    if( data[0] !== "undefined" && data[0] != null ) 
      {   
     data.map((item) => {
      let total=0;
      item.problems.map((t)  =>{ total +=  Number(t.y)}) 
      total = total/100   
      console.log("filerrrrr-------------]", item.problems.filter((r) => { return selectedItems.includes(r.x)})); 
      let d=0;
      let x = (item.problems.filter((r) => { return selectedItems.includes(r.x)}) ).map((i) => { 
        console.log("------------------------]",  selectedItems[0]);   
        
        return  {
          x: item.name,
          y:  Number(i.y) ,
          z: Number(((i.y)/total).toFixed(0))  ,
          item: selectedItems[d++]
        }
      })
          console.log("3333333333333]", x)   
            setdataTosand(oldArray  => [...oldArray,x]);     
         })              
      }
     else  {console.log("else]", dataTosand);  } 
       console.log("444444444444]", dataTosand); 
     },[selectedItems])

     console.log("ששששששששששששששששששש]", dataTosand);  
      return (  
      <View>   
              <SectionedMultiSelect 
                    items={newlist}
                    displayKey="item"
                    uniqueKey="item"
                    showDropDowns={true}
                    readOnlyHeadings={false}
                    IconRenderer={Icon}
                    selectText="Select up to 3 Features"
                    onSelectedItemsChange={onSelectedNewChange}
                    selectedItems={selectedItems}
                    showChips={true}
                  />   
                   { ( dataTosand !== "undefined") &&( dataTosand!= null  ) && 
                      <View>  
                      <RendProbBar  data={dataTosand}/>
                </View>  }    
     </View> ) 
}
 
export default MultiSelect
