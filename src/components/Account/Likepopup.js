import React from "react";
import '../../style/likepopup.css'

function Likepopup(props) {
    return (props.trigger) ? (
        <div className="likepopup">
            <div className="likepopup__container">
                <div className="favoritens__close"></div>
                {props.children}
                <div className='like-section'>
                    <i className="fa-solid fa-angle-left" onClick={() => props.setTrigger(false)}></i>
                    <h1>Favoriten</h1>
                </div>
                <div className='image-icon'>
                    <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true"><path d="M8 14.195L2.234 8.263a3.745 3.745 0 010-5.128 3.413 3.413 0 014.9 0l.875.875.875-.875a3.421 3.421 0 014.909 0 3.754 3.754 0 010 5.128L8 14.195zM4.675 3.406a2.082 2.082 0 00-1.514.648 2.432 2.432 0 000 3.29l4.84 4.961 4.838-4.97a2.432 2.432 0 000-3.281 2.135 2.135 0 00-3.045 0L8.735 5.086a1.103 1.103 0 01-1.531 0L6.189 4.054a2.1 2.1 0 00-1.514-.648z"></path></svg>
                </div>
                <div className='text-part'>
                    <h1>Keine Favoriten</h1>
                    <p>Du hast derzeit keine Favoriten.</p>
                </div>
                <div>
                    <button className='like-button'>
                        <a href="/favoriten">Partner für eine Bestellung entdecken</a>
                    </button>
                </div>
            </div>
        </div>
    ) : " ";
}
export default Likepopup;
