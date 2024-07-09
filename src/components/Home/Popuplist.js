import React from 'react'
import '../../style/popuplist.css'


function Popuplist(props) {
    const image = {
        backgroundImage: "url(beg.png)",
        backgroundRepeat: "no-repeat",
    }
    return (props.trigger) ? (
        <div className='popups'>
            <div className='popups-liner'>
                <button className='close-btn' onClick={() => props.settrigger(false)} style={{ cursor: "pointer" }} ><i class="fa-solid fa-xmark"></i></button>
                {props.children}
                <h1>Kategorien</h1>
                <div className='navbar-list'>
                    <div className='nav-lists'>
                        <ul>
                            <li>
                                <div className='navbar-1'>
                                    <p style={image} />
                                    <a href='#' ><b>Beliebt ❤️</b>
                                        <p>Kebap im Brot, Pizza Salami, Wunsch-Pizza</p>
                                    </a>
                                </div>
                                <a href='#'> <b>Salate</b>
                                    <p>Tomatensalat, Grüner Salat, Gemischter Salat, Thunfisch Salat, Griechischer Bauernsalat, Kebap Salat, Backhendlsalat, Capricciosa Salat                                    </p>
                                </a>
                                <a href='#'><b>Pasta</b>
                                    <p>Pasta Bolognese, Pasta Carbonara, Pasta all Arrabbiata, Pasta al Tonno, Pasta Crema di Funghi, Lasagne al Forno  </p>
                                </a>
                                <a href='#'><b>Pizzastangerl</b>
                                    <p>Tonno Stangerl, Schinken Stangerl, No1 Stangerl, Gratkorner Stangerl</p>
                                </a>
                                <a href='#'><b>Mexikanische Pizza Ø 33cm</b>
                                    <p>Mexikanische Pizza Acapulco, Mexikanische Pizza Mexico City, Mexikanische Pizza Mexicana, Mexikanische Pizza Fiesta</p>
                                </a>
                                <a href='#'><b>Mexikanische Partner-Pizza</b>
                                    <p>Mexikanische Partner-Pizza Acapulco, Mexikanische Partner-Pizza Mexico City, Mexikanische Partner-Pizza Mexicana, Mexikanische Partner-Pizza Fiesta</p>
                                </a>
                                <a href='#'><b>Pizza Ø 33cm</b>
                                    <p>Pizza Margherita, Pizza al Funghi, Pizza Salami, Pizza Cardinale, Calzone, Pizza al Tonno, Pizza Hawaii, Pizza Diavolo, Pizza Toscana, Pizza Vegetarisch</p>
                                </a>
                                <a href='#'><b>Partner-Pizza</b>
                                    <p>Partner-Pizza Margherita, Partner-Pizza al Funghi, Partner-Pizza Cardinale, Partner-Calzone, Partner-Pizza Salami, Partner-Pizza Hawaii, Partner-Pizza al Tonno, Partner-Pizza Diavolo, Partner-Pizza Toscana, Partner-Pizza Vegetarisch</p>
                                </a>
                                <a href='#'><b>Familienpizza</b>
                                    <p>Familienpizza</p>
                                </a>
                                <a href='#'><b>Kebap und Co</b>
                                    <p>Kebap im Brot, Kebap mit Käse, Vegetarisches Kebap, XXL Kebap im Brot, Dürüm, Kebap Box mit Pommes frites, Kebap Teller mit Pommes frites, Kapsalon mit Pommes frites, Kebap Menü, Schnitzel Teller mit Pommes frites</p>
                                </a>
                                <a href='#'><b>Burger</b>
                                    <p>Hamburger, Cheeseburger, Mexiko Burger, Steirer Burger, Italien Burger, Chickenburger, Barbecue Burger, Hawaii Burger, Double Burger, No1 Burger</p>
                                </a>
                                <a href='#'><b>Dessert</b>
                                    <p>Topfen-Palatschinken, Nuss-Palatschinken, Mohr im Hemd</p>
                                </a>
                                <a href='#'><b>Alkoholfreie Getränke</b>
                                    <p>Coca Cola 0,33l, Coca Cola 0,5l, Fanta 0,5l, Fanta 0,33l, Sprite 0,33l, Sprite 0,5l, Almdudler 0,33l, Almdudler 0,5l, Mezzo Mix 0,33l, Mezzo Mix 0,5l</p>
                                </a>
                                <a href='#'><b>Alkoholische Getränke</b>
                                    <p>Bier 0,5l</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    ) : "";
}

export default Popuplist
