import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native';
import ItemCard from "./components/ItemCard";

const App = () => {

  const [data, setData] = useState([])

  const getDataApi = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = undefined;
    try {
      result = await fetch(url);
      result = await result.json();
      setData(result);
    } catch {
      console.warn('error');
    }
  }

  useEffect(() => {
    getDataApi();
  }, [])

  return (
    <ScrollView>
      {
        data.length === 0 ?
          <View>
            <ActivityIndicator />
          </View> :
          // data.map((item) => (
          //   <ItemCard data={item} />
          // ))
          <FlatList
            data={data}
            renderItem={({ item }) => <ItemCard data={item} />}
          />
      }
    </ScrollView>
  )
}

export default App