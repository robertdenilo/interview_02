import { connect } from 'react-redux';
import ShowUp from './../ShowUp';

//action
// const increaseAction = {        
//     type:'INCREASE',
//     newuser:{}}
  
//   const likeAction = {        
//     type:'LIKE'}  
  
//   const notLikeAction = {        
//     type:'NOTLIKE'} 
    
  function mapStateToProps(state) {
    return {
      userinfos: state.userinfos
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      notLikeActionFunc: (userinfo) => dispatch({type:'NOTLIKE',newuser:userinfo})
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShowUp);