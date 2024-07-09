import React from 'react'
import '../../style/orderedlist.css'
function Orderedlist(props) {
    return (props.trigger) ? (
        <div >
            <div className='popup'>
                <div className='popup-liner'>
                    <button className='close-btn' onClick={() => props.settrigger(false)} style={{ cursor: "pointer" }} ><i class="fa-solid fa-xmark"></i></button>
                    {props.children}
                    <h1>Lieferadresse eingeben</h1>
                    <div>
                        <form className="form">
                            <input type="text" id="fname" name="firstname" placeholder="Vollständige Adresse eingeben" />
                            <div className='error'>
                                <i class="fa-solid fa-triangle-exclamation"></i>
                                <p>Bitte gib Deine Straße und Hausnummer ein.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}
export default Orderedlist;