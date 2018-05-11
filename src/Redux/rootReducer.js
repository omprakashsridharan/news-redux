const reducer = (state=[], action)=>{
    switch(action.type){
        case 'LOAD_ARTICLE_SUCCESS':
            return state.concat(action.payload)
        default: 
            return state
    }
}

export default reducer

