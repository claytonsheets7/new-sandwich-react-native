class MainActivity extends Component {

  constructor(props) {
 
    super(props);
  
    YellowBox.ignoreWarnings([
     'Warning: componentWillMount is deprecated',
     'Warning: componentWillReceiveProps is deprecated',
   ]);
  
  }
 
   render()
   {
      return(
 
         <View style = { styles.MainContainer }>
 
            <Text style={{fontSize: 23}}> This is Activity - 1 </Text>
          
         </View>
      );
   }
}