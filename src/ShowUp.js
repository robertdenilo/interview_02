import  React,{ Component } from 'react';
import { withRouter } from 'react-router-dom'  
import { Button,List,Avatar } from 'antd';

var ReviewedUser = [];
var backToMain;
class ShowUp extends Component {

    constructor(props,context){
        super(props,context);
        console.log("show up....");
        console.log(this.props.location);
        if(this.props.location.state!== undefined){
            ReviewedUser = this.props.location.state.userinfo;
            backToMain = this.props.location.state.backToMain;
        }


    }

    componentWillMount () {
        console.log("will mount");
        //const { store } = this.context
        this._updateUserInfos()
        //store.subscribe(() => this._updateUserInfos())
      }
    
      _updateUserInfos () {
        const { userinfos } = this.props
        //const state = store.getState()
        console.log(this.props);
        this.setState({ userinfos: userinfos })
      }
    

    // goback(){
    //     var path = {
    //         pathname:'/',
    //         state:{userinfo: ReviewedUser},
    //       };
    //       console.log('XXXX')
    //       console.log(ReviewedUser);
    //     this.props.history.push(path);
    // }
    render() {      //{this.ReviewedUser.map((user,i) => <User key={user.index} user={user.userinfo} />)}
        var data;
        if(!isNaN(ReviewedUser  ) && ReviewedUser.length>0){
            console.log(ReviewedUser[0].userinfo);
            data = ReviewedUser.filter((user)=>user.like===true);
        }
        console.log("show me");
        console.log(this.props);
        return(<div >
            
         {/* {ReviewedUser.filter((user)=>user.like===true).map((user, key) => 
            <User key={key}  index={user.index} userinfo={user.userinfo} like={user.like}/>
        )}   */}
        <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
        <div style={{ width:700,  boxShadow: 'darkgrey 0px 0px 30px 5px inset'}} >
            <div style={{fontSize: 30, testAllign:'center'}}>
            <p> Favorite List </p>
            </div>
        <List itemLayout="horizontal"  dataSource={this.props.userinfos.filter((user)=>user.like===true)}   renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size={100} src={item.userinfo.avatar}/>}
            />
            <User  index={item.index} userinfo={item.userinfo} like={item.like}/>
        </List.Item>
         )}
        /> </div></div>
            {/* <Button type="primary" onClick={()=>this.goback()}> return </Button>
            <Route exact={true} path="/" component={Candidate}/> 
            <Router>
                <div>
                  <ul>
                      <li><Link to={{pathname:"/",state:ReviewedUser}}>Go Back</Link></li>
                  </ul>
                </div>
            </Router>  */}
        </div>
        )
    }
}
class User extends Component {
    
    constructor(){
        super();
        this.state={color:"#00FF00"};
    }
    onNotLike(){
        ReviewedUser[this.props.index] = {
            index:this.props.index,
            like:false,
            userinfo:this.props.userinfo
        }
        this.setState({color:'#FF0000'});
        backToMain(ReviewedUser);
        if (this.props.increaseActionFunc) {
            this.props.notLikeActionFunc({index:this.props.index, userinfo:this.props.userinfo, like:false})
          }
        
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps !== this.props){
            this.setState({index:this.props.index, like:this.props.like});
        }
        
    }
    render () {
      
      var userinfo = {name:"",location:""};
      if(this.props.userinfo !== undefined){
        var userinfo = this.props.userinfo;
      }

      return (
        <div style={{backgroundColor:this.state.color}}>
          {/* <div><Avatar size={64} icon="user" src={userinfo.avatar}/></div>   */}
          <div>Name：{userinfo.name}</div>
          <div>Address：{userinfo.location}</div>
          <Button type="primary" onClick={()=>this.onNotLike()}> No Like Anymore </Button>
          <hr />
        </div>
      )
    }
  }
export default withRouter(ShowUp);