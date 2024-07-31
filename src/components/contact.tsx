// import { useState } from 'react'
import { Link } from 'react-router-dom';
import { dark_list, dark_logo, email, logo } from '../assets/images';
import '../index.css'
import Navigation from './navigation';

function Contato() {
    // const [count, setCount] = useState(0)

    let isOpen = false;

    function toggleMenu() {
        let sideBar = document.querySelector('.mobileMenu') as HTMLElement
        // setIsOpen(true)
        isOpen = true

        if (isOpen == true) {
            sideBar.style.display = 'flex';
        } else {
            sideBar.style.display = 'none'
        }
    }

    return (
        <>
            <div className='body'>
                <div className="mobileMenu">
                    <Navigation />
                </div>
                <div className="contactHeader">
                    <div className="list" onClick={toggleMenu}>
                        <img src={dark_list} alt="" />
                    </div>
                    <div className="topLogo">
                        <img src={dark_logo} alt="" />
                    </div>
                    <nav>
                        <Link to='/'><p>Home</p></Link>
                        <Link to='/panel'><p>Painel</p></Link>
                        <Link to='/multimedia'><p>Multimídia</p></Link>
                        <Link to='/contact'><p>Contato</p></Link>
                    </nav>
                </div>

                <div>
                    <div className='element'>
                        <h1>Precisa de ajuda?</h1>
                        <p>Entre em contato conosco através dos nosso canal de atendimento </p>
                    </div>

                    <div className="mini_element"></div>

                    <section className='backgroundContact'>

                    </section>
                    <section className='sendEmail'>
                        <form action="">
                            <input id='name' type="name" placeholder='Digite seu nome' />
                            <input id='email' type="email" placeholder='Digite seu e-mail' />
                            <input id='message' type="text" placeholder='Digite sua mensagem' />
                            <button id='enviarEmail'>Enviar</button>
                        </form>
                        <img src={email} alt="" />
                    </section>

                    <div className="second_mini_element"></div>
                </div>
                <footer>
                    <section>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="menuFooter">
                            <h4>Menu</h4>
                            <Link to='/'><p>Home</p></Link>
                            <Link to='/panel'><p>Painel</p></Link>
                            <Link to='/multimedia'><p>Multimídia</p></Link>
                            <Link to='/contact'><p>Contato</p></Link>
                        </div>
                        <div className="contact">
                            <h4>Contato</h4>
                            <p>contato@interyzen.com.br</p>
                        </div>
                    </section>
                </footer>
            </div>
        </>
    )
}

export default Contato
