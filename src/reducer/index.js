import { combineReducers } from 'redux'


const initialState={
    userinfos: []
};

  
//function update(state = initialState, action) {
const update = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE':
            console.log("INCREASE");
            console.log(state);
            console.log(action);
            state.userinfos.push(action.userinfo) 
            console.log(state.userinfos);
            return {
                userinfos:state.userinfos
            };
        case 'LIKE':
            console.log("LIKE");
            console.log(state);
            var updated = action.userinfo;
            state.userinfos[updated.index] = action.userinfo;
            console.log(state.userinfos);
            return {
                userinfos:state.userinfos    
            };
        case 'NOTLIKE':
            console.log("NOTLIKE");
            console.log(state);
            var updated = action.userinfo;
            state.userinfos[updated.index] = action.userinfo;
            console.log(state.userinfos);
            return {
                userinfos:state.userinfos
            };
        default:
            return state;
    }
}

export default update;
// export default combineReducers({
//     userinfos: update,

// })