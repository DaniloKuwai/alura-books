import logo from '../../img/download-imagens/logo.svg'
import './estilo.css'

function Logo(){
    return(
        <div className='logo'>
          <img className='logo-img' src={logo}></img>
          <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo;