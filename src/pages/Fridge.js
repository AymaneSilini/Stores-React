import React from 'react';
import Slider from '../components/Slider';
import Menu from '../components/Menu';
import Logo from '../ressources/images/fridgeqru.svg';
import '../ressources/css/Fridge.css';

class Fridge extends React.Component {
    render() {
        return (
            <>
                <div className='Fridge'>
                    <Menu/>
                    <div className='main'>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className='center-image'>
                            <img src={Logo} style={{ width: "25%", height: "25%" }} alt="Fridge Logo" />
                        </div>
                        <br></br>
                        <div className='center-image'>
                            <h1>Taux de remplissage du congélateur</h1>
                        </div>
                        <br></br>
                        <div className='center-image'>
                            <Slider />
                        </div>
                        <h1>{sessionStorage.getItem("token")}</h1>
                    </div>
                </div>
            </>
        );
    };
};

export default Fridge;