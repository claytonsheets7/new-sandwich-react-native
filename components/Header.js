import React, { Component } from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

const Header = () => (
	<Text style={styles.header}>News Sandwich</Text>
);

const styles = StyleSheet.create({
  header: {
	  fontSize: 30,
	  width: 350,
	  marginTop: 40
  }
});

export default Header;