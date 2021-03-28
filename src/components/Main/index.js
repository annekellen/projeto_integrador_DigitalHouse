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
      <h1 className="prateleiras__title">Prateleiras</h1>
      <Prateleiras />
      <PrateleirasPromocao /> 
      <PrateleirasMarcas />  
    </main>
  )
}
export default Main