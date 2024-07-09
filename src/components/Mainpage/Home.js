import React, { useRef, useState } from 'react'
import '../../style/home.css'
import backgroundimage from '../../images/backgroundimage.avif'
import sideicon1 from '../../images/sideicon1.png'
import number from '../../images/number.png'
import Popuplist from '../Mainpage/Popuplist'
import Apicall from '../Mainpage/Apicall'
import { FaArrowCircleUp } from 'react-icons/fa'
import { Button } from '../../style/style'
import Mainpage from '../Account/Mainpage'


function Home() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);


    // change icon 
    const [changeicon, setchangeicon] = useState(true)

    const iconchange = () => {
        setchangeicon(!changeicon)
    }

    // buttonchange
    const [activeButton, setActiveButton] = useState("Lieferung");

    //  navbar arrow
    const navbarRef = useRef(null);

    const scrollLeft = () => {
        navbarRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        navbarRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    // popuplist
    const [buttonpopup, setbuttonpopup] = useState(false);

    // mainpage
    const [popup,setpopup]=useState(false)

    return (
        <>
        
            <Button className='scrollbutton'>
                <FaArrowCircleUp onClick={scrollToTop} className='textbutton'
                    style={{ display: visible ? 'inline' : 'none' }} />
            </Button>

            <div>
                <nav className='nav'>
                    <div className='logo'>
                        <a href='https://www.lieferando.at/lieferservice/essen/8101'>
                            <i class="fa-solid fa-angle-left"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="151" height="35">
                                <path fill="#FF8000" fill-rule="evenodd" d="M62.5 17.7c-.4-.5-1-.9-1.6-1.2-.7-.3-1.4-.4-2.1-.4-.8 0-1.6.1-2.4.4-.7.3-1.4.7-1.9 1.2s-1 1.1-1.3 1.8c-.6 1.7-.6 3.7 0 5.4.3.7.7 1.3 1.3 1.8s1.2.9 1.9 1.2c.8.3 1.6.4 2.4.4.9 0 1.8-.2 2.6-.6.6-.3 1.2-.7 1.7-1.2.2-.2.2-.5 0-.7l-1.5-1.2-.1-.1c-.2-.1-.5-.1-.6.1-.2.2-.5.5-.7.6-.4.3-.9.4-1.4.4-.6 0-1.2-.2-1.7-.6-.5-.5-.8-1.2-.9-2 0-.1.1-.2.2-.2h7.1c.3 0 .5-.2.5-.5v-.5c0-.8-.1-1.6-.4-2.4-.2-.6-.6-1.2-1.1-1.7m-2.2 2.9h-3.9c-.1 0-.2-.1-.3-.2 0-.2.1-.4.2-.5.1-.2.3-.5.5-.7.5-.4 1.1-.7 1.7-.6.6 0 1.1.2 1.5.6.3.3.5.8.6 1.2-.1.1-.2.2-.3.2zm11.4-4.2h-1.8c-.1 0-.2-.1-.2-.2v-.8c0-.7.1-1.2.4-1.4.4-.3.8-.4 1.2-.4h.8c.3 0 .5-.2.5-.5v-1.8c0-.3-.2-.5-.5-.5h-1.5c-.8 0-1.5.1-2.2.4-.5.2-1 .5-1.3 1-.3.4-.5.9-.6 1.4-.1.6-.2 1.1-.2 1.7v1.1c0 .1-.1.2-.2.2h-1.5c-.3 0-.5.2-.5.5v1.7c0 .3.2.5.5.5H66c.1 0 .2.1.3.2v8.2c0 .3.2.5.5.5h2.4c.3 0 .5-.2.5-.5v-8.2c0-.1.1-.2.2-.2h1.8c.3 0 .5-.2.5-.5v-1.7c0-.5-.3-.7-.5-.7zm-21.8-5.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.5-.2-1-.6-1.4-.4-.4-.9-.6-1.4-.6zm1.1 5.5h-2.3c-.3 0-.5.2-.5.5v10.6c0 .3.2.5.5.5H51c.3 0 .5-.2.5-.5V16.9c0-.3-.2-.5-.5-.5zm40.7-.3h-.6c-.7 0-1.3.2-1.9.5-.4.3-.7.6-.9 1v.1l-.1.1c-.1 0-.2-.1-.2-.2v-.7c0-.3-.2-.5-.5-.5H85c-.3 0-.5.2-.5.5v10.7c0 .3.2.5.5.5h2.4c.3 0 .5-.2.5-.5v-4.7c0-.5 0-1 .1-1.5 0-.4.2-.8.4-1.2.2-.3.5-.6.9-.8.4-.2.8-.3 1.2-.3h1.2c.3 0 .5-.2.5-.5v-2c0-.3-.2-.5-.5-.5zm-9.5 1.6c-.4-.5-1-.9-1.6-1.2-.7-.3-1.4-.4-2.1-.4-.8 0-1.6.1-2.4.4-.7.3-1.4.7-2 1.2-.6.5-1 1.1-1.3 1.8-.6 1.7-.6 3.7 0 5.4.3.7.7 1.3 1.3 1.8.6.5 1.2.9 2 1.2.8.3 1.6.4 2.4.4.9 0 1.8-.2 2.6-.6.6-.3 1.2-.7 1.7-1.2.2-.2.2-.5 0-.7l-1.5-1.2H81c-.2-.1-.5-.1-.6.1-.2.2-.5.5-.7.6-.4.3-.9.4-1.4.4-.6 0-1.2-.2-1.7-.6-.5-.5-.8-1.2-.9-2 0-.1.1-.2.2-.2H83c.3 0 .5-.2.5-.5v-.5c0-.8-.1-1.6-.4-2.4-.1-.7-.4-1.3-.9-1.8zm-2.3 2.9H76c-.1 0-.2-.1-.3-.2 0-.2.1-.4.2-.5.1-.2.3-.5.5-.7.2-.2.5-.4.7-.5.3-.1.6-.2 1-.2.6 0 1.1.2 1.5.6.3.3.5.8.5 1.2 0 .2-.1.3-.2.3zm-33.5 4.1h-5.8c-.1 0-.2-.1-.2-.2v-12c0-.3-.2-.5-.5-.5h-2.5c-.3 0-.5.2-.5.5v15c0 .3.2.5.5.5h9c.3 0 .5-.2.5-.5v-2.2c0-.3-.2-.5-.5-.6zm55.1-7.1c-.4-.5-.9-.9-1.5-1.1-.8-.3-1.6-.4-2.4-.4-.9 0-1.8.2-2.6.4-.7.2-1.3.6-1.8 1-.2.2-.2.5 0 .7l1.1 1.1c.2.2.5.2.7 0 .3-.2.5-.4.9-.6.5-.2 1-.4 1.5-.4.6 0 1.1.2 1.5.5.4.3.6.9.6 1.9 0 .1-.1.2-.2.2H98c-.5 0-1.1.1-1.7.1-.5.1-1.1.2-1.6.3-.5.2-.9.4-1.4.7-.4.3-.7.7-.9 1.1-.2.5-.4 1-.4 1.6 0 .5.1 1 .3 1.5.2.4.5.8.9 1.1.4.3.8.5 1.2.6.5.1 1 .2 1.5.2.7 0 1.3-.1 2-.4.5-.2.9-.5 1.2-.9h.2l.1.1v.4c0 .3.2.5.5.5h2.1c.3 0 .5-.2.5-.5v-5.1c0-1-.1-2-.2-3.1-.1-.4-.4-1-.8-1.5m-2.1 6.3c0 .6-.3 1.2-.8 1.5-.2.2-.5.3-.8.4-.3.1-.6.1-1 .1s-.8-.1-1.1-.3c-.3-.2-.5-.5-.5-.9 0-.3.1-.7.4-.9.3-.2.6-.4.9-.5.4-.1.7-.2 1.1-.2h1.6c.1 0 .2.1.2.2v.6zm14.2-6.4c-.3-.5-.7-.9-1.2-1.1-.7-.3-1.4-.4-2.1-.4-.4 0-.8.1-1.1.2-.3.1-.6.2-.9.4-.3.2-.5.3-.7.6-.1.1-.1.2-.2.2l-.1.1c-.1 0-.2-.1-.2-.2v-.4c0-.3-.2-.5-.5-.5h-2.2c-.3 0-.5.2-.5.5v10.7c0 .3.2.5.5.5h2.4c.3 0 .5-.2.5-.5v-5.7c0-.3 0-.7.1-1 0-.3.2-.6.3-.9.1-.3.4-.5.6-.6.3-.2.7-.2 1.1-.2.7-.1 1.3.3 1.5 1 .1.3.2.6.2 1v6.6c0 .3.2.5.5.5h2.4c.3 0 .5-.2.5-.5v-6.3c0-.7-.1-1.4-.2-2.1-.2-.7-.4-1.3-.7-1.9m13.2-6.6h-2.4c-.3 0-.5.2-.5.5v5.7c0 .1-.1.2-.2.2s-.1 0-.1-.1l-.1-.1c-.3-.3-.7-.5-1.1-.7-.6-.2-1.3-.3-2-.3s-1.5.2-2.1.5c-.6.3-1.1.8-1.6 1.3-.4.6-.8 1.2-1 1.9-.5 1.7-.5 3.5 0 5.1.2.7.6 1.3 1.1 1.8.5.5 1.1.9 1.7 1.2.7.3 1.5.4 2.2.4.4 0 .7-.1 1.1-.2.3-.1.7-.2 1-.4.3-.2.5-.3.8-.5l.2-.2.1-.1.1-.1c.1 0 .2.1.2.2v.5c0 .3.2.5.5.5h2.1c.3 0 .5-.2.5-.5v-16c0-.3-.2-.6-.5-.6m-3.3 13.6c-1.1 1-2.9 1-4 0-.5-.5-.7-1.5-.7-2.4 0-.8.2-1.8.7-2.3 1.1-1 2.9-1 4 0 .5.5.7 1.5.7 2.3s-.3 1.9-.7 2.4zm15-6.6c-.6-.5-1.2-.9-1.9-1.2-1.5-.5-3.2-.5-4.8 0-.7.3-1.4.7-1.9 1.2s-1 1.1-1.3 1.8c-.6 1.7-.6 3.7 0 5.4.3.7.7 1.3 1.3 1.8.6.5 1.2.9 1.9 1.2 1.5.5 3.2.5 4.8 0 .7-.3 1.4-.7 1.9-1.2s1-1.1 1.3-1.8c.6-1.7.6-3.7 0-5.4-.3-.7-.8-1.3-1.3-1.8zm-2.3 6.8c-1.1 1-2.9 1-4 0-.5-.5-.7-1.5-.7-2.3 0-.8.2-1.8.7-2.3 1.1-1 2.9-1 4 0 .5.5.7 1.5.7 2.3 0 .8-.3 1.8-.7 2.3zM31 15.5c-.1-.3-1.4-2.7-4-5.9-.1-.1-.1-.2-.1-.3-.2-1.8-.4-3.6-.8-5.4-.1-.4-.4-.6-.8-.7l-2.6-.3h-.1c-.3 0-.5.2-.5.5v.9c-1.6-1.5-3.4-2.8-5.3-4-.4-.1-.8-.3-1.3-.3s-.9.1-1.3.4C5.3 6 .3 15 .1 15.5c0 .1-.1.2-.1.4 0 .4.3.8.7.9l2.6.5c.3.1.6.4.6.8 0 .5.5 10.7 1.1 13.3.2.3.5.6.9.6 1.5 0 2.9-.1 4.4-.1h.1c.2 0 .3-.1.3-.3-.1-.9-.2-2.9-.3-5.1v-.2c0-.2-.1-.3-.3-.4-.8-.5-1.3-1.3-1.4-2.2-.1-3.6-.2-7.7 0-11 0-.3.2-.5.5-.5s.5.2.5.5c-.1 2.2-.1 4.7-.1 7.2 0 .3.3.6.6.6s.6-.3.6-.6c0-2.5 0-5.1.1-7.3 0-.3.2-.5.5-.5s.5.2.5.5c.1 2.3.1 4.9.1 7.4 0 .3.3.6.6.6s.6-.3.6-.6c0-2.5 0-5.1.1-7.2 0-.3.3-.5.5-.5.3 0 .5.2.5.5-.2 3.1-.1 7.1 0 10.6v.1c0 .9-.5 1.8-1.2 2.3-.1.1-.2.2-.2.4 0 0-.1.5.2 3.1.1 1.1.2 1.9.2 2.3 0 .1.1.2.3.2H19c.1 0 .3-.1.3-.2.3-3.1.4-4.9.4-4.9 0-.2-.1-.3-.3-.3l-1.8-.2c-.2 0-.4-.2-.5-.4v-.3c.7-10.4 4.2-13.9 4.2-13.9.1-.1.1-.1.2-.1.2-.2.6-.1.8.1l.1.1v.2c.3 3.3.2 8.8 0 13.2-.2 3.7-.3 6.6-.3 6.6 0 .1.1.2.2.2 1 0 1.9 0 2.9.1.4 0 .8-.3.9-.7.6-2.7 1.1-12.9 1.1-13.3 0-.4.3-.7.6-.8l2.6-.5c.5-.1.8-.6.6-1.1v-.1z" />
                            </svg>
                        </a>
                    </div>
                    <div className='center-text'>
                        Speisekarte
                    </div>
                    <div className='sideicon'>
                        <img src={sideicon1} />
                        <button onClick={() => setpopup(true)} style={{ cursor: "pointer" }}>
                        <i class="fa-solid fa-bars"></i>
                        </button>
                        <Mainpage trigger={popup} settrigger={setpopup}>
                        </Mainpage>
                    </div>
                </nav>
            </div>
            <div className='mainsection'>
                <div className='subsection'>
                    <div className='sub'>

                        <div className='imagesection'>
                            <img src={backgroundimage} />
                        </div>
                        <div className='sideimage'>
                            <img src={number} />
                        </div>
                        <div className='sideimages'>
                            <h1>Number One</h1>
                            <div className='icon'>
                                <i class="fa-solid fa-circle-info"></i>
                                <button onClick={iconchange} style={{ cursor: "pointer" }}>
                                    {changeicon ? <i class="fa-regular fa-heart"></i> : <i class="fa-solid fa-heart"></i>}
                                </button>


                            </div>
                        </div>
                        <div className='subsection2'>
                            <div className='star'>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div className='button'>
                                <button>4.6(200+)</button>
                            </div>
                        </div>
                    </div>
                        <div className='slider-navbar'>
                            <div className="slider-navbar-container">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <button className="nav-arrow left" onClick={scrollLeft}>
                                    &lt;
                                </button>
                                <div className="slider-navbar" ref={navbarRef}>
                                    <ul className="navbar">
                                        <li><a href="a22c" className='belibet'>Beliebt ❤️</a></li>
                                        <li><a href="#f84b">Salate</a></li>
                                        <li><a href="#pasta">Pasta</a></li>
                                        <li><a href="#pizzastangerl">Pizzastangerl</a></li>
                                        <li><a href="#mexikanische-pizza">Mexikanische Pizza Ø 33cm</a></li>
                                        <li><a href="#partner-pizza">Mexikanische Partner-Pizza</a></li>
                                        <li><a href="#partner-pizza">Pizza Ø 33cm</a></li>
                                        <li><a href="#partner-pizza">Partner-Pizza</a></li>
                                        <li><a href="#partner-pizza">Familienpizza</a></li>
                                        <li><a href='#Kebap und Co'>Kebap und Co</a></li>
                                        <li><a href='#Burger'>Burger</a></li>
                                        <li><a href='#Dessert'>Dessert</a></li>
                                        <li><a href='#Alkoholfreie Getränke'>Alkoholfreie Getränke</a></li>
                                        <li><a href='#Alkoholische Getränke'>Alkoholische Getränke</a></li>
                                    </ul>
                                </div>
                                <button className="nav-arrow right" onClick={scrollRight}>
                                    &gt;
                                </button>
                                <div className='icon-list'>
                                    <button onClick={() => setbuttonpopup(true)} style={{ cursor: "pointer" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--list" width="24" height="24"><path d="M2.313 11.938a1.312 1.312 0 1 0 0-2.625 1.312 1.312 0 0 0 0 2.624Z"></path><path d="M14.125 4.719h-8.75V6.03h8.348l.402-1.312Z"></path><path d="M2.313 6.688a1.313 1.313 0 1 0 0-2.626 1.313 1.313 0 0 0 0 2.625Z"></path><path d="M12.506 9.969H5.375v1.312h6.729l.402-1.312Z"></path></svg>
                                    </button>
                                    <Popuplist trigger={buttonpopup} settrigger={setbuttonpopup}>
                                    </Popuplist>
                                </div>
                            </div>
                        </div>
                    <div>
                        <Apicall />
                    </div>
                </div>

                <div className='sidebar'>
                    <div className='topsection'>
                        <h1>Warenkorb</h1>
                    </div>

                    <div className="outer-container">
                        <div className="button-container">
                            <div className={`circle ${activeButton === "Lieferung" ? "left" : "right"}`} />

                            <button
                                className={`buttons ${activeButton === "Lieferung" ? "active" : ""}`}
                                onClick={() => setActiveButton("Lieferung")}
                            >
                                <div className="inf">
                                    <div className="icon"><i className="fa-solid fa-bicycle"></i></div>
                                    <div className="texts">
                                        <div className="text">Lieferung</div>
                                        <div className="subtext">ab 11:45</div>
                                    </div>
                                </div>
                            </button>
                            <button
                                className={`buttons ${activeButton === "Abholung" ? "active" : ""}`}
                                onClick={() => setActiveButton("Abholung")}
                            >
                                <div className="inf">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" className="c-pieIcon c-pieIcon--pick-up" width="20" height="20">
                                            <path d="M8.875 2.531H15V1.22H8.875a4.375 4.375 0 0 0-3.929 2.625H3.257l-.122.052A2.047 2.047 0 0 0 1.962 5.2a2.205 2.205 0 0 0 .788 2.275l-.796 5.95c-.012.365.12.72.367.989a1.163 1.163 0 0 0 .875.367h8.671a1.162 1.162 0 0 0 .875-.367 1.364 1.364 0 0 0 .36-1.05l-.77-5.793a2.695 2.695 0 0 0 1.478-1.54H15V4.72h-2.266l-.123.507a1.558 1.558 0 0 1-1.864 1.252l-.34-.062-1.13 1.129a.578.578 0 0 1-.805 0 .586.586 0 0 1-.12-.64.551.551 0 0 1 .13-.183l1.618-1.54a.752.752 0 0 0 .184-.875.77.77 0 0 0-.718-.49H6.46a2.888 2.888 0 0 1 2.415-1.286Zm0 6.493a1.873 1.873 0 0 0 1.33-.551l.665-.666h.087l.753 5.662H3.266l.761-5.688h3.098a1.873 1.873 0 0 0 1.75 1.242Zm-.639-3.868-.665.63c-.198.192-.35.425-.446.683h-3.5a.936.936 0 0 1-.359-.875.717.717 0 0 1 .324-.394h4.646v-.044Z"></path>
                                        </svg>
                                    </div>
                                    <div className="texts">
                                        <div className="text">Abholung</div>
                                        <div className="subtext">ab 11:15</div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className='lastsection'>
                        <div className='iconsection'>
                            <i class="fa-solid fa-basket-shopping"></i>
                        </div>
                        <div className='textsection'>
                            <h4>Fülle deinen Warenkorb</h4>
                            <p>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <footer>
                    <ul>
                        <li>
                            <a href='https://www.lieferando.at/empfehlen'>Ein Restaurant empfehlen</a>
                            <a href='https://www.lieferando.at/partner/anmelden/'> Ein Restaurant anmelden</a>
                            <a href='https://careers.justeattakeaway.com/de/de'>Jobs</a>
                            <a href='https://www.lieferando.at/agb'>AGB</a>
                            <a href='https://www.lieferando.at/privacy-statement'>Datenschutzerklärung</a>
                            <a href='https://www.lieferando.at/impressum'>Impressum</a>
                            <a href='https://www.lieferando.at/cookiestatement'>Verwendung von Cookies</a>
                            <a href='https://www.lieferando.at/bugbounty'>Bug Bounty</a>
                            <a href='https://app.convercent.com/de-de/LandingPage/d8e86634-ec59-ec11-a985-000d3ab9f296'>Ethik-Hotline</a>
                        </li>
                    </ul>
                    <p>© 2024 Lieferando.at</p>
                </footer>
            </div>
        </>

    )
}

export default Home
// http://localhost:3000/dishes 
