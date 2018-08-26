/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
import React from 'react'
import { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {combineReducers,createStore} from 'redux'
import {Reducer} from './Reducers/Index'
import {Provider} from "react-redux"
import Counter from "./Components/Counter/Index"

const store = createStore(Reducer)


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Counter/>
      </Provider>
    );
  }
}
