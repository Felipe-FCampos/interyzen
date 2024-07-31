import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { background, image_1, image_2, icon_1, icon_2, icon_3, icon_4, icon_5, icon_6, paineis, painel_1, multimidia_1, logo, list } from '../assets/images';
import '../index.css'
import Navigation from './navigation';
import CarouselMobile from './carousel_mobile';


function Home() {
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

  const [firstClass, setFirstClass] = useState('firstHidden')
  const [secondClass, setSecondClass] = useState('secondHidden')
  const [thirdClass, setThirdClass] = useState('thirdHidden')
  
  function handleScroll() {
    if (document.documentElement.scrollTop > 100) {
      setFirstClass('firstShow');
    } else {
      setFirstClass('firstHidden');
    }

    if (document.documentElement.scrollTop > 460) {
      setSecondClass('secondShow');
    } else {
      setSecondClass('secondHidden');
    }

    if (document.documentElement.scrollTop > 1690) {
      setThirdClass('thirdShow')
    } else {
      setThirdClass('thirdHidden')
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='body'>
      <div className="mobileMenu">
            <Navigation/>
        </div>
        <div className="header">
          <div className="list"  onClick={toggleMenu}>
            <img src={list} alt="" />
          </div>
          <div className="topLogo">
            <img src={logo} alt="" />
          </div>
          <nav>
            <Link to='/'><p>Home</p></Link>
            <Link to='/panel'><p>Painel</p></Link>
            <Link to='/multimedia'><p>Multimídia</p></Link>
            <Link to='/contact'><p>Contato</p></Link>
          </nav>
        </div>

        <div className='main'>
          <img src={background} alt="" />
        </div>

        <div className="titleContent">
          <h1>Transformando a experiência automotiva <i>pensando em você</i>.</h1>
          <p>Conheça nossos painéis inteligentes e adaptáveis que foram feitos para se adequarem a você.</p>
        </div>

        <div>
          <section className={`firstSection ${firstClass}`}>
            <div className="image">
              <img src={image_1} alt="" />
            </div>
            <div className="textImage">
              <h2>Descubra o futuro da condução</h2>
              <p>Painéis que se adaptam a cada detalhe da sua jornada, tornando cada momento atrás do volante uma experiência única</p>
            </div>
          </section>

          <section className={`secondSection ${secondClass}`}>
            <div className="textImage">
              <h2>Controle total</h2>
              <p>Explore um painel que vai além do esperado, mantendo tudo sob controle com apenas o levantar de um dedo.</p>
            </div>
            <div className="image">
              <img src={image_2} alt="" />
            </div>
          </section>

          <section className='carousel_mobile_items'>
          <CarouselMobile />
          </section>

          <section className={`items ${thirdClass}`}>
            <div className='itemA'>
              <img src={icon_1} alt="" />
              <p>Conectividade Avançada</p>
            </div>
            <div className='itemB'>
              <img src={icon_2} alt="" />
              <p>Integração com Assistentes Virtuais</p>
            </div>
            <div className='itemA'>
              <img src={icon_3} alt="" />
              <p>Segurança Aprimorada</p>
            </div>
            <div className='itemB'>
              <img src={icon_4} alt="" />
              <p>Eficiência Energética</p>
            </div>
            <div className='itemA'>
              <img src={icon_5} alt="" />
              <p>Autonomia de Condução</p>
            </div>
            <div className='itemB'>
              <img src={icon_6} alt="" />
              <p>Diagnóstico e Manutenção Preditiva</p>
            </div>
          </section>

          <section className="knowTheProduct">
            <div className='product'>
              <h1>Explore agora</h1>
              <img src={paineis} alt="" />
            </div>
          </section>

          <section className='productCard'>
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

export default Home