import BannerPrincipal from '../BannerPrincipal'
import BannerSecundario from '../BannerSecundario'
import Prateleiras from '../Prateleiras'
import PrateleirasMarcas from '../PrateleirasMarcas'
import './style.css'
const Main = () => {
  return (
    <main className="main">
      <BannerPrincipal />
      <BannerSecundario />
      <Prateleiras />
      <PrateleirasMarcas />  
    </main>
  )
}
export default Main