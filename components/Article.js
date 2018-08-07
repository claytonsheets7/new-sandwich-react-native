import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Button, Linking } from 'react-native';

const Article = ({ title, desc, url, urlToImage }) => {
  return (
    <View style={styles.article}>
      <Text style={{fontWeight: 'bold'}}>{title}</Text>
	  <Image style={{width: 380, height: 200}} source={{uri: urlToImage}}/>
	  <Text numberOfLines={3}>{desc}</Text>
	  <Button style={{fontWeight: 'bold'}} title="Read more" onPress={ ()=>{ Linking.openURL(url)}} />
    </View>
  );
};

const styles = StyleSheet.create({
  article: {
	width: 380,
	padding: 5,
    borderTopColor: '#CCC',
    borderTopWidth: 1,
	paddingTop: 20
  }
});

export default Article;