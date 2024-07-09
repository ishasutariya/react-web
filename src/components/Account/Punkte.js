import React from "react";
import '../../style/punkte.css'
import backgroundp1 from '../../images/backgroundimagep1.jpg'
import image1 from '../../images/image1.webp'
import image2 from '../../images/image2.webp'
import image3 from '../../images/image3.webp'
import image4 from '../../images/image4.webp'
import image5 from '../../images/image5.webp'
import image6 from '../../images/image7.webp'
import image7 from '../../images/image8.webp'
import image8 from '../../images/image8.webp'
import image9 from '../../images/image9.webp'
import image10 from '../../images/image10.webp'
import image11 from '../../images/image11.webp'
import Footer from "../Home/Footer";

function Punkte() {
    return (
        <>
            <div className="punkte">
                <nav className="nav-p">
                    <div className="logo-p">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "130px", color: "orange" }} viewBox="0 0 2226 684">
                            <path d="M620.854 227.352c0-32.021-30.19-57.104-68.734-57.104h-10.402c4.196-4.201 8.08-8.675 11.519-13.471 16.332-22.774 21.561-49.218 14.348-72.547-7.408-23.958-26.484-43.072-52.337-52.442-33.892-12.279-73.595-6.171-108.933 16.763-40.187 26.081-71.434 55.407-90.954 75.895-13.911-17.018-34.072-36.114-60.455-61.094l-7.698-7.289c-30.776-29.176-71.371-42.926-108.58-36.762-27.663 4.576-50.056 19.612-61.439 41.254-11.688 22.224-11.684 49.265.013 74.192 6.344 13.518 15.658 25.476 27.278 35.501H87.086c-38.547 0-68.743 25.082-68.743 57.102l-.004 148.995h57.627V610.75c0 32.021 30.193 57.104 68.737 57.104h351.575c38.547 0 68.743-25.082 68.743-57.104V376.346h55.83l.003-148.994zM430.586 85.953c23.517-15.263 48.848-19.724 69.469-12.246 12.603 4.566 21.688 13.201 24.933 23.693 3.057 9.884.146 22.057-7.985 33.393-13.917 19.41-39.278 31.454-67.839 32.217l-10.625.287c-51.35 1.403-79.553 1.804-95.615-3.004 17.093-18.467 47.748-48.436 87.662-74.34zM116.65 81.312c4.825-9.176 15.489-15.745 29.255-18.022a65.36 65.36 0 0 1 10.677-.864c20.586 0 42.333 9.292 59.955 25.996l7.714 7.308c32.217 30.503 51.672 49.311 61.509 63.391l-3.683 4.748 1.363 1.819c-25.624.665-65.316-.418-108.16-9.506-27.361-5.805-48.397-20.52-57.714-40.375-5.711-12.171-6.045-24.743-.916-34.495zm-53.72 146.04c0-5.041 10.143-12.517 24.156-12.517H298.2V331.76H62.926l.004-104.408zm57.623 383.398V376.346H298.2v246.921H144.703c-14.518 0-24.15-7.534-24.15-12.517zm399.882 0c0 5.041-10.143 12.517-24.156 12.517H342.787V376.346h177.648V610.75zm55.83-278.99H342.787V214.835H552.12c14.517 0 24.148 7.534 24.148 12.517l-.003 104.408zM745.833 283.609a9.493 9.493 0 0 1 9.493-9.493h123.35c64.522 0 111.018 45.546 111.018 104.852s-46.496 104.85-111.018 104.85H825.54a4.747 4.747 0 0 0-4.747 4.747v84.444a9.493 9.493 0 0 1-9.493 9.493h-55.974a9.493 9.493 0 0 1-9.493-9.493v-289.4zM871.56 420.244c23.722 0 41.751-16.606 41.751-41.277s-18.029-41.277-41.751-41.277h-46.02a4.747 4.747 0 0 0-4.747 4.747v73.06a4.747 4.747 0 0 0 4.747 4.747h46.02zM1004.987 480.023v-122.4a9.493 9.493 0 0 1 9.493-9.493h51.232a9.493 9.493 0 0 1 9.493 9.493V470.06c0 29.416 10.913 53.612 42.699 53.612 31.312 0 46.022-22.774 46.022-53.612V357.622a9.493 9.493 0 0 1 9.493-9.493h51.229a9.493 9.493 0 0 1 9.493 9.493v215.386a9.493 9.493 0 0 1-9.493 9.493h-46.961a9.493 9.493 0 0 1-9.493-9.493v-13.279h-.948c-12.335 17.079-35.583 28.466-65.473 28.466-67.371 0-96.786-45.546-96.786-108.172zM1280.698 348.129h46.961a9.493 9.493 0 0 1 9.493 9.493v13.279h.948c12.335-17.079 36.532-28.466 67.37-28.466 68.793 0 98.682 45.546 98.682 108.172v122.4a9.493 9.493 0 0 1-9.493 9.493h-51.229a9.493 9.493 0 0 1-9.493-9.493V461.52c0-29.89-11.861-54.56-45.547-54.56-32.261 0-46.97 23.248-46.97 54.56v111.489a9.493 9.493 0 0 1-9.493 9.493h-51.229a9.493 9.493 0 0 1-9.493-9.493V357.622c-.001-5.243 4.25-9.493 9.493-9.493zM1602.946 582.502h-51.232a9.493 9.493 0 0 1-9.493-9.493V257.516a9.493 9.493 0 0 1 9.493-9.493h51.232a9.493 9.493 0 0 1 9.493 9.493v167.841c0 4.298 5.256 6.383 8.203 3.254l72.96-77.496a9.495 9.495 0 0 1 6.912-2.986h59.583c8.281 0 12.592 9.862 6.968 15.941l-76.516 82.697a4.747 4.747 0 0 0-.326 6.054l85.076 114.526c4.653 6.264.182 15.154-7.621 15.154h-60.432a9.495 9.495 0 0 1-7.517-3.695l-57.9-75.057a4.747 4.747 0 0 0-7.115-.457l-20.886 20.886a4.747 4.747 0 0 0-1.39 3.356v45.474c.002 5.243-4.249 9.494-9.492 9.494zM1817.03 490.461v-76.857a4.747 4.747 0 0 0-4.747-4.747h-23.243a9.493 9.493 0 0 1-9.493-9.493v-41.742a9.493 9.493 0 0 1 9.493-9.493h23.243a4.747 4.747 0 0 0 4.747-4.747v-49.335a9.493 9.493 0 0 1 9.493-9.493h51.229a9.493 9.493 0 0 1 9.493 9.493v49.335a4.747 4.747 0 0 0 4.747 4.747h60.72a9.493 9.493 0 0 1 9.493 9.493v41.742a9.493 9.493 0 0 1-9.493 9.493h-60.72a4.747 4.747 0 0 0-4.747 4.747v76.857c0 23.721 12.335 34.633 31.312 34.633 8.661 0 16.855-2.573 23.924-6.733 4.752-2.796 10.862-1.031 13.328 3.9l17.79 35.581c2.062 4.123.852 9.113-2.828 11.889-16.471 12.429-39.553 17.989-65.971 17.989-57.883.001-87.77-32.262-87.77-97.259z"></path>
                        </svg>
                    </div>
                    <div className="side-icon">
                        <div className="svg-p">
                            <svg viewBox="0 0 16 16" fill="none" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true"><path d="M1.438 10.435a7.001 7.001 0 0013.127 0L8 9.828l-6.563.607z" fill="#FFDA44"></path><path d="M8.001 1a7.001 7.001 0 00-6.563 4.567L8 6.174l6.564-.607A7.001 7.001 0 008 1z" fill="#333"></path><path d="M1.438 5.567a6.987 6.987 0 000 4.868h13.127a6.984 6.984 0 000-4.868H1.438z" fill="#D80027"></path></svg>
                        </div>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </nav>
                <div className="header-p">
                    <img src={backgroundp1} />
                </div>

                <div className="punkte-navbar">
                    <div className="punkte-navbar-item">
                        <ul>
                            <li>
                                <a href="#" id="alle">Alle anzeigen</a>
                                <a href="#">Unterhaltung</a>
                                <a href="#">Essen</a>
                                <a href="#">Restaurants</a>
                                <a href="#">Einkaufen</a>
                                <a href="#">Sport und Freizeit</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main-section-p">
                <div className="card">
                    <div className="card-title">
                        <h2>Willkommen!</h2>
                        <p>Löse Deine Punkte für Angebote von Top-Marken und Rabatte bei Lieferando ein.</p>
                    </div>
                    <div className="card-button">
                        <div>Anmelden</div>
                    </div>
                    <div className="card-icon">
                        <p>So funktioniert's</p>
                        <div className="right-arrow">
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
                <div className="side-section-p">
                    <div className="title">
                        <h1>11 angebote</h1>
                        <select name="cars" id="cars">
                            <option value="Beliebtheit">Beliebtheit</option>
                            <option value="Neuste">Neuste</option>
                            <option value="Punkte: aufsteigend">Punkte: aufsteigend</option>
                        </select>
                    </div>
                    <div>
                        <div className="main-cards">
                            <div className="main-card">
                                <div className="images-p">
                                    <img src={image1} />
                                </div>
                                <div className="description">
                                    <h1>Spotify</h1>
                                    <p>Spotify Premium gratis</p>
                                    <p id="text-number">30 Punkte</p>
                                </div>
                            </div>
                            <div className="main-card">
                                <div className="images-p">
                                    <img src={image2} />
                                </div>
                                <div className="description">
                                    <h1>Tree of Tea</h1>
                                    <p>GRATIS* FRÜCHTETEE SET</p>
                                    <p id="text-number">45 Punkte</p>
                                </div>
                            </div>
                        </div>
                        <div className="main-cards">
                            <div className="main-card">
                                <div className="images-p">
                                    <img src={image3} />
                                </div>
                                <div className="description">
                                    <h1>Sky X</h1>
                                    <p>-40 % auf Sky X Sport und Live TV Streaming</p>
                                    <p id="text-number">40 Punkte</p>
                                </div>
                            </div>
                            <div className="main-card">
                                <div className="images-p">
                                    <img src={image4} />
                                </div>
                                <div className="description">
                                    <h1>Sky X</h1>
                                    <p>-40 % auf Sky X Fiction und Live TV Streaming</p>
                                    <p id="text-number">40 Punkte</p>
                                </div>
                            </div>
                        </div>
                        <div className="main-cards-1">
                            <div className="main-card-1">
                                <div className="images-p">
                                    <img src={image5} />
                                </div>
                                <div className="description">
                                    <h1>Coca-Cola®</h1>
                                    <p>3 € Gutschein für dein GRATIS Getränk</p>
                                    <p id="text-number">75 Punkte</p>
                                </div>
                            </div>
                            <div className="second-text">
                                    <p>3 € Gutschein für dein GRATIS Getränk</p>
                            </div>
                        </div>
                        <div className="main-cards">
                            <div className="main-card">
                                <div className="images-p">
                                    <img src={image6} />
                                </div>
                                <div className="description">
                                    <h1>World of Warships: Legends</h1>
                                    <p>WoWS: Legends – Versorgungslieferung</p>
                                    <p id="text-number">50 Punkte</p>
                                </div>
                            </div>
                            <div className="main-card">
                                <div className="images-p">
                                    <img src={image7} />
                                </div>
                                <div className="description">
                                    <h1>Mymuesli</h1>
                                    <p>Gratis* Müsli-Mix bis €13</p>
                                    <p id="text-number">50 Punkte</p>
                                </div>
                            </div>
                        </div>
                        <div className="main-cards">
                            <div className="main-card">
                                <div className="images-p">
                                    <img src={image8} />
                                </div>
                                <div className="description">
                                    <h1>JBL</h1>
                                    <p>JBL 20% Rabatt</p>
                                    <p id="text-number">50 Punkte</p>
                                </div>
                            </div>
                            <div className="main-card">
                                <div className="images-p">
                                    <img src={image9} />
                                </div>
                                <div className="description">
                                    <h1>Mymuesli</h1>
                                    <p>Gratis* mymuesli2go Probierpaket</p>
                                    <p id="text-number">50 Punkte</p>
                                </div>
                            </div>
                        </div>
                        <div className="main-cards">
                            <div className="main-card">
                                <div className="images-p">
                                    <img src={image10} />
                                </div>
                                <div className="description">
                                    <h1>RTL+</h1>
                                    <p>2 Monate zum halben Preis</p>
                                    <p id="text-number">100 Punkte</p>
                                </div>
                            </div>
                            <div className="main-card">
                                <div className="images-p">
                                    <img src={image11} />
                                </div>
                                <div className="description">
                                    <h1>Zattoo</h1>
                                    <p>2 Monate TV-Streaming gratis*</p>
                                    <p id="text-number">65 Punkte</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Punkte;