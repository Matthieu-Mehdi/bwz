import './Header.scss';
import logo from '../../asset/logo-bwz.png';
import { useState, useEffect } from 'react';

function Header(){

    const [scrollPosition, setScrollPosition] = useState(0);


    const handleScroll = () => {
        const position = window.scrollY;
        console.log(position);
        setScrollPosition(position);

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${scrollPosition < 30 ? "Header" : "Header"}`}>
        
                <div className="Header-logo">
                    <a href='/'>
                    <img className={`${scrollPosition < 30 ? "Header-image" : "Header-smallimg"}`} src={logo} alt="Logo bwz" />
                    </a>
                </div>

                <div className="Header-nav">
                    <a className="Header-nav" href="/">Acceuil</a>
                    <a className="Header-nav" href="/">Qui sommes-nous ?</a>
                    <a className="Header-nav" href="/">Portfolio</a>
                    <a className="Header-nav" href="/">Contact</a>
                </div>

        </header>
    )
}

export default Header; 