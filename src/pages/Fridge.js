import React from 'react';
import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';
import Logo from '../ressources/images/fridgeqru.svg';

class Fridge extends React.Component {
    render() {
        return (
            <>
                <div id="Fridge">
                    <Sidebar pageWrapId={"page-wrap"} outerContainerId={"app"} />
                    <div id="page-wrap">
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
                    </div>
                </div>
            </>
        );
    };
};

export default Fridge;