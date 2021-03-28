import { titulo , tituloProduto , sloganProduto } from './style'
export default function Title ({text, text1, text2}) {
    return (
    <div>
        <p style={titulo}>{text}</p>
        <p style={tituloProduto}>{text1}</p>
        <p style={sloganProduto}>{text2}</p>
    </div>
    )
}