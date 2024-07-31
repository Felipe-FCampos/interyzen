// import { useState } from 'react'
import { Link } from 'react-router-dom';
import { audi, background_panel, bmw, control, dark_logo, hyundai, image_cars, image_sunset, interface_func, list, logo, mercedes, monitoring, multimidia_1, p1, p2, p3, panel, volkswagen } from '../assets/images';
import '../index.css'
import Carousel from './carousel';
import Navigation from './navigation';

function Painel() {
  // const [count, setCount] = useState(0)

    // const [isOpen, setIsOpen] = useState(false)
    let isOpen = false;

    function toggleMenu(){
      let sideBar = document.querySelector('.mobileMenu') as HTMLElement
      // setIsOpen(true)
      isOpen = true
  
      if(isOpen == true){
        sideBar.style.display = 'flex';
      } else {
        sideBar.style.display = 'none'
      }
    }


  const images = [p1, p2, p3];

  return (
    <>
      <div className='body'>
        <div className="mobileMenu">
          <Navigation />
        </div>
        <div className="headerProduct">
          <div className="list" onClick={toggleMenu}>
            <img src={list} alt="" />
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

        <div className='mainProduct'>
          <img src={background_panel} alt="" />
        </div>

        <div className="titleContentProduct">
          <h1>InteRyzen <b>Nexus</b></h1>
        </div>

        <div>
          <section className="firstSectionProduct">
            <div className="textImageProduct">
              <h2><i>InteRyzen <b>Nexus</b></i></h2>
              <p>É um painel digital de última geração.</p>
            </div>
            <div className="image">
              <img src={panel} alt="" />
            </div>
          </section>

          <section className="functionalities">
            <h1>Conheça as funcionalidades</h1>
            <div className="allFunctions">
              <div className='function'>
                <div className='iconFunc'>
                  <img src={control} alt="" />
                </div>
                <div className='textFunc'>
                  <p>Navegação pelo veículo</p>
                </div>
              </div>
              <div className='function'>
                <div className='iconFunc'>
                  <img src={monitoring} alt="" />
                </div>
                <div className='textFunc'>
                  <p>Monitoramento em tempo real</p>
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
            <div className="image">
              <img src={image_sunset} alt="" />
            </div>
            <div className="secondTextImageProduct">
              <p>Experimente uma condução mais intuitiva com o grande</p>
              <h2><i>InteRyzen <b>Nexus</b></i></h2>
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
                <img src={multimidia_1} alt="" />
              </div>
              <div className='cardText'>
                <h3>Multimídia</h3>
                <p>Entretenimento, conectividade e funcionalidades integradas.</p>
              </div>
              <button><Link to='/multimedia'>Saiba mais</Link></button>
            </div>
          </section>

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

export default Painel
