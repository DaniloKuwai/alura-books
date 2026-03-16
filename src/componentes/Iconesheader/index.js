import './estilo.css'
import perfil from '../../img/download-imagens/perfil.svg'
import sacola from '../../img/download-imagens/sacola.svg'

const icones = [perfil,sacola]

function Iconesheader(){
    return(
        <ul className='icones'>
          {icones.map( (icon) =>(
            <li className='icone'><img src={icon}></img></li>
          ))}
        </ul>
    )
}

export default Iconesheader;