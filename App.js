import React, { Component } from 'react';
import { ScrollView, View, Styles, Image, Text, StyleSheet, Button, Linking } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Header from './components/Header'
import Article from './components/Article'

class HomeScreen extends Component {
  state = {
    articles: []
  };
  
  static navigationOptions = {
    title: 'Feed'
  };

  componentDidMount() {
	let url =
	'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=edd0276dc8344c2abaeb40a3f6fb439f';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          articles: data.articles
        });
      });
  }

  render() {
    if (this.state.articles.length === 0) {
      return "Loading..";
    }

    const urlImageProxy = 'https://www.washingtonpost.com/resizer/Y5jGvGIjk3PcVRSvGT-TjmN0bFE=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OSKJKOERVUI6RLSZAGEA5LC7DU.jpg';
	
    return <ScrollView>
	<Button
          onPress={() => console.log('clicked!')}
          title="Info"
          color="#fff"
        />
		<Button
          onPress={() => console.log('clicked!')}
          title="Info"
          color="#fff"
        />
		<Button
          onPress={() => console.log('clicked!')}
          title="Info"
          color="#fff"
        />
			<Header/>
			{this.state.articles.map((r, index) => <Article key={index} title={r.title} desc={r.description} url={r.url} urlToImage={r.urlToImage == null || r.urlToImage == undefined ? urlImageProxy : r.urlToImage} />)} 
		</ScrollView>;
  }
}

class ModalScreen extends React.Component {
	static navigationOptions = {
		title: 'Modal'
	};
	
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }}

const RootStack = createMaterialTopTabNavigator({
  Home: {
	  screen: HomeScreen,
  },
  Modal: {
	  screen: ModalScreen
  }
});

export default class App extends Component {
	render() {
		return <RootStack />;
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
