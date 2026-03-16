import './estilo.css'
import Logo from '../Logo/index.js'
import OpcoesHeader from '../Opcoesheader/index.js';
import Iconesheader from '../Iconesheader/index.js'

function Header(){
    return(
        <header className="App-header">
        <Logo/>
        <OpcoesHeader/>
        <Iconesheader/>
        </header>
    )
}

export default Header;