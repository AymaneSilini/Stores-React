import React from 'react';
import {RangeStepInput} from 'react-range-step-input';
import Slider from '../components/Slider';
import Logo from '../ressources/images/fridgeqru.svg';
import { Button} from 'react-bootstrap';

class Fridge extends React.Component {
    render() {
        return (
        <>
        <Button id="btn-show-tools" variant='primary' href="/home">
          QRCode
          </Button>
        <div className='center-image'>
    <img src={Logo} style={{ width:"25%", height :"25%" }}   alt="Fridge Logo" />
    </div>
    <br></br>  
    <div className='center-image'>
        <h1>Taux de remplissage du congélateur</h1>
        </div>

        <br></br>
        <div className='center-image'>
        <Slider/>
        </div>


    </>
    );
    };
};

export default Fridge;