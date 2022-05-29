import react, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import axios from 'axios';
import { Component } from 'react/cjs/react.production.min';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts/1';

export default class App extends Component {
  
  constructor(){
    super();
    this.state = {
      isLoading : true, 
      dataSource : [] 
    }
  }


componentDidMount(){
  axios({
    method: 'GET',
    url: `${baseUrl}`,
  }).then((response) => {
    console.log(response.data);
  });
  
  axios.get(`${baseUrl}`).then((response) => {
    console.log(response.data);
  })
  
  .catch((err) => {
    console.log(err);
  });

}
render(){
  return{
    
  }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
