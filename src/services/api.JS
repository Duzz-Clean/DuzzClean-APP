import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8081';

    axios.get('https://api.github.com/users/' + username)
    .then(function(response){
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    })  
  

})
export default api;

