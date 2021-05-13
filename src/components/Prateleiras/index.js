import Card from '../Card'
import './style.css'

const produtos = [
  {
    "name": "t-shirt",
    "price": 48,
    "photo": "https://i.ibb.co/51Szwz0/alex-haigh-f-Et6-Wd4t4j0-unsplash.jpg"
  },
  {
    "name": "Amora",
    
    "photo": "https://www.imagemhost.com.br/images/2021/05/11/faith-yarn-Wr0TpKqf26s-unsplash.jpg",
    "price": 45
  },
  {
    "name": "camiseta",
    "photo": "https://www.imagemhost.com.br/images/2021/05/11/mulher.png",
    "price": 20
  },
  {
    "name": "verde",
    "photo": "https://www.imagemhost.com.br/images/2021/05/11/homem.png",
    "price": 10
  }

]
const Prateleiras = () => {
  return (
    <section className="prateleiras">
    

    {
      produtos.map(
        (produto)=><Card produto={produto}/>
        
      )
    }
    
     {/*  <Card />
      <Card />
      <Card />
      <Card /> */}
    </section>
  )
}
export default Prateleiras