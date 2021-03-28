import Title from '../Title'
import BannerPrincipal from '../BannerPrincipal'
import BannerSecundario from '../BannerSecundario'
import Prateleiras from '../Prateleiras'
import PrateleirasMarcas from '../PrateleirasMarcas'
import PrateleirasPromocao from '../PrateleirasPromocao'
import './style.css'
const Main = () => {
  return (
    <main className="main">
      <BannerPrincipal />
      <BannerSecundario />
      <Title text="Confira os nossos produtos"/>
      <Prateleiras />
      <PrateleirasPromocao /> 
      <PrateleirasMarcas />  
    </main>
  )
}
export default Main