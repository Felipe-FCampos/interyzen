import { Link } from "react-router-dom";
import { connection, display, home, phone, x } from "../assets/images";
import '../css/mobile.css';
// import { useState } from "react";

const Navigation = () => {

    // const [isOpen, setIsOpen] = useState(true)
    let isOpen = true;

    function toggleMenu(){
      let sideBar = document.querySelector('.mobileMenu') as HTMLElement
    //   setIsOpen(false)
        isOpen = false;
  
      if(isOpen == false){
        sideBar.style.display = 'none'
      } else {
        sideBar.style.display = 'flex';
      }
    }

    return (
        <>
            <div className="background"></div>
            <div>
                <div className="sideBarNavigation" >
                    <div className="exit">
                        <img src={x} alt="" onClick={toggleMenu}/>
                    </div>
                    <ul>
                        <li>
                            <img src={home} alt="" />
                            <Link to='/'><p>Home</p></Link>
                        </li>
                        <hr />
                        <li>
                            <img src={display} alt="" />
                            <Link to='/panel'><p>Painel</p></Link>
                        </li>
                        <hr />
                        <li>
                            <img src={connection} alt="" />
                            <Link to='/multimedia'><p>Multimídia</p></Link>
                        </li>
                        <hr />
                        <li>
                            <img src={phone} alt="" />
                            <Link to='/contact'><p>Contato</p></Link>
                        </li>
                    </ul>
                </div >
            </div>

        </>
    );
}

export default Navigation;