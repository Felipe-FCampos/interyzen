// import { useState } from 'react'
import { Link } from 'react-router-dom';
import { dark_logo, email, logo } from '../assets/images';
import '../index.css'

function Contato() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <div className="contactHeader">
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

                <body>
                    <div className='element'>
                        <h1>Precisa de ajuda?</h1>
                        <p>Entre em contato conosco através dos nosso canal de atendimento </p>
                    </div>

                    <div className="mini_element"></div>

                    <section className='background'>

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
                </body>
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
