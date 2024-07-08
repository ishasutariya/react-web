import React from 'react'
import '../../style/bestellungen.css'

function Bestellungen(props) {
    return (props.trigger)?(
        <div className='seconed-popuo'>
            <div className='seconed-inner'>
                    <button className='close-btn' onClick={()=>props.settrigger(false)}><i class="fa-solid fa-xmark"></i></button>
                    {props.children}
            </div>
        </div>  
    ):"";
}
export default Bestellungen

