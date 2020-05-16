import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#E0FFFF'
  },
  containerLogo:{
    flex:1,
    justifyContent:'center'
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:50
  },
  input:{
    backgroundColor:'#FFF',
    width:'90%',
    marginBottom:13,
    fontSize:15,
    borderRadius:7,
    padding:10, 
  },
  btnSubmit:{
    backgroundColor:'#00CED1',
    width:'90%',
    height:38,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
  },
  submitText:{
    color:'#FFF',
    fontSize:18
  },
  btnRegister:{
    marginTop:10,
  },
  registerText:{
    color:'#000000'
  }
  
});
export default styles;