export function getArticles(){
    return function(dispatch){
        return callApi().
        then(res=>{
            console.log(res)
            dispatch({
                type:'LOAD_ARTICLE_SUCCESS',
                payload: res.articles,
            })
        })
        .catch(error => {
            throw(error)
        })
    }
}

function callApi(){
    return (
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=58df8c1651ce4704aaa5432072bc0f02')
        .then(Response =>{
            console.log(Response)
           return Response.json()
        })
        .catch(error=>{
            return error
        })
    )
}