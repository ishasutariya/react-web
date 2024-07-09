import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../style/apicall.css'
import Orderedlist from '../Home/Orderedlist';



const Apicall = () => {
    const [listpopup, setlistpopup] = useState(false);
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/dishes')
            .then(response => {
                console.log('API Response:', response.data);
                setDishes(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the dishes!', error);
            });
    }, []);

    return (
        <div className="dishes-container">
            {dishes.map((dish, index) => (
                <div className="dish-card" key={index}>
                    {dish.image && <img src={dish.image} alt={dish.title} className='mainimage' />}
                    <div className='sectiontop'>
                        <h2>{dish.title}</h2>
                        <p>{dish.description}</p>
                    </div>
                    {console.log(dish.description)}
                    <div onClick={() => setlistpopup(true)} style={{ cursor: "pointer" }}>
                        {dish.item.map(value => {
                            return (<div className="item-info">
                                {/* {console.log(dish)} */}
                                <div className='information'>
                                    <div className='fname'>
                                        <p className='name'><strong> {value.name} </strong></p><i class="fa-solid fa-circle-info"></i>
                                    </div>
                                    <p className='description'>{value.description}</p>
                                    <p className='price'><strong>{value.price}</strong></p>
                                </div>
                                <div className='imageinformation'>
                                    <i id='plus' class="fa-solid fa-plus"></i>
                                    <img src={value.image} />
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            ))}
            <Orderedlist trigger={listpopup} settrigger={setlistpopup}></Orderedlist>
        </div>
    );
}

export default Apicall;


