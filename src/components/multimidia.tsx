// import { useState } from 'react'
// import { useState } from 'react'
import { Link } from 'react-router-dom';
import { audi, background_multimedia, bmw, dark_logo, hyundai, image_cars, image_stopped_car, interface_func, logo, m1, m2, mercedes, multimedia, painel_1, ultraMonitoring, volkswagen, wifi } from '../assets/images';
import '../index.css'
import Carousel from './carousel';

function Multimidia() {
    // const [count, setCount] = useState(0)
    const images = [m1, m2];

    return (
        <>
            <div>
                <div className="headerProduct">
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

                <div className='main'>
                    <img src={background_multimedia} alt="" />
                </div>

                <div className="titleContentProduct">
                    <h1>InteRyzen <b>Pulse</b></h1>
                </div>

                <body>
                    <section className="firstSection">
                        <div className="textImageProduct">
                            <h2><i>InteRyzen <b>Pulse</b></i></h2>
                            <p>É um multimídia digital incomparável.</p>
                        </div>
                        <div className="image">
                            <img src={multimedia} alt="" />
                        </div>
                    </section>

                    <section className="functionalities">
                        <h1>Conheça as funcionalidades</h1>
                        <div className="allFunctions">
                            <div className='function'>
                                <div className='iconFunc'>
                                    <img src={wifi} alt="" />
                                </div>
                                <div className='textFunc'>
                                    <p>Conexão com a internet</p>
                                </div>
                            </div>
                            <div className='function'>
                                <div className='iconFunc'>
                                    <img src={ultraMonitoring} alt="" />
                                </div>
                                <div className='textFunc'>
                                    <p>Monitoramento completo</p>
                                </div>
                            </div>
                            <div className='function'>
                                <div className='iconFunc'>
                                    <img src={interface_func} alt="" />
                                </div>
                                <div className='textFunc'>
                                    <p>Interface personalizável</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="carousel">
                        <div className='mainCarousel'>
                            <Carousel images={images} />
                        </div>
                    </section>

                    <section className='secondSectionProduct'>
                        <div className="textImageProduct">
                            <p>Experimente uma condução mais confortável e conectada com </p>
                            <h2><i>InteRyzen <b>Pulse</b></i></h2>
                        </div>
                        <div className="image">
                            <img src={image_stopped_car} alt="" />
                        </div>
                    </section>

                    <section className="compatibilities">
                        <h1>Veja abaixo a compatibilidade</h1>
                        <div className="marks">
                            <img src={volkswagen} alt="" />
                            <img src={hyundai} alt="" />
                            <img src={audi} alt="" />
                            <img src={bmw} alt="" />
                            <img src={mercedes} alt="" />
                        </div>
                    </section>

                    <section className="lastSection">
                        <div className="textImageProduct">
                            <h2><i>Adquira já o <b>seu</b></i></h2>
                            <p>Vá para a concessionária mais próxima de uma das marcas apresentadas </p>
                        </div>
                        <div className="image">
                            <img src={image_cars} alt="" />
                        </div>
                    </section>

                    <section className="productCard">
                        <div className="card">
                            <div className='cardImage'>
                                <img src={painel_1} alt="" />
                            </div>
                            <div className='cardText'>
                                <h3>Painel</h3>
                                <p>Tecnológico e inovador, conectividade, segurança e conveniência integradas.</p>
                            </div>
                            <button><Link to='/panel'>Saiba mais</Link></button>
                        </div>
                    </section>

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

export default Multimidia