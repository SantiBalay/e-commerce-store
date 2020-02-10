import React from 'react';

import './HomePage.scss'

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="dir-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title"> GORRAS </h1>
                        <span className="subtitle"> COMPRAR AHORA</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title"> BUZOS </h1>
                        <span className="subtitle"> COMPRAR AHORA</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title"> ZAPATILLAS </h1>
                        <span className="subtitle"> COMPRAR AHORA</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title"> MUJER </h1>
                        <span className="subtitle"> COMPRAR AHORA</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title"> HOMBRE </h1>
                        <span className="subtitle"> COMPRAR AHORA</span>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default HomePage;