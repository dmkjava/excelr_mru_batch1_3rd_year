

url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(result => result.json())
.then(data => {
    // console.log(data) 

    for( user of  data){
        console.log(user.username) ;
    }
})
.catch(err=> console.log(err))