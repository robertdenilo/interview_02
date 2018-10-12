import { connect } from 'react-redux';
import Candidate from './../Candidate';

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
      increaseActionFunc: (userinfo) => dispatch({type:'INCREASE',userinfo:userinfo}),
      likeActionFunc: (userinfo) => dispatch({type:'LIKE',userinfo:userinfo}),
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Candidate);