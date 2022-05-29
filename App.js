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


}
render(){
  return{
    View
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
