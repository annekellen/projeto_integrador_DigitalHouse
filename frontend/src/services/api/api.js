import axios from 'axios'
const getData = async ()=>{

  return await axios.get("http://localhost:3333/products")
 }
 export default getData