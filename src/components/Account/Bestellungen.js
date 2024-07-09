import React from 'react';
import '../../style/bestellungen.css';

function Bestellungen(props) {
    return (props.trigger) ? (
        <div className='seconed-popuo'>
            <div className='seconed-inner'>
                <button className='close-btn' onClick={() => props.settrigger(false)}></button>
                {props.children}
                <div>
                    <div className='header-section'>
                        <i className="fa-solid fa-angle-left" onClick={() => props.settrigger(false)}></i>
                        <h1>Bestellungen</h1>
                    </div>
                    <div className='image-icon'>
                        <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                            <path d="M12.996 4.719h-2.371V2.53L9.313 1.22H6.688L5.375 2.53V4.72H3.004l-.429 8.452a1.523 1.523 0 001.531 1.61h7.788a1.522 1.522 0 001.531-1.61l-.429-8.452zM6.688 2.53h2.625V4.72H6.688V2.53zM12.05 13.4a.219.219 0 01-.157.07H4.106a.228.228 0 01-.218-.219l.358-7.21h7.508l.359 7.21a.22.22 0 01-.062.149z"></path>
                        </svg>
                    </div>
                    <div className='text-part'>
                        <h1>Noch keine Bestellungen</h1>
                        <p>Du hast noch keine Bestellung getätigt.</p>
                    </div>
                    <div>
                        <button className='b-button'>
                            <a href="/bestellungen">Partner Entdecken</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}

export default Bestellungen;
