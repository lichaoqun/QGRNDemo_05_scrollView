/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export class App extends Component<{}> {
  render() {
    return (
        <ScrollView
            horizontal = {true}
            showsHorizontalScrollIndicator = {false}
            pagingEnabled = {true}
            scrollEnabled = {false}

        >
            {this.getScrollViewSubViews()}
        </ScrollView>
    );
  }

  getScrollViewSubViews(){
    var subViews = [];
    var colors = ['red', 'orange', 'yellow', 'green', 'blue'];

    for(var i = 0; i< 5; i++){
      subViews.push(
          <View
              key={i}
              style = {{backgroundColor:colors[i] ,width:320, height:100}}>
            <Text>
              {i}
            </Text>
          </View>
      )
    }
      return subViews;
  }
}
export default class App1 extends Component<{}> {
    render() {
        return (
            <View>


            </View>
        );
    }
}