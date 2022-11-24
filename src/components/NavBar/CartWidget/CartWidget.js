import React, { Component }  from 'react';
import { useState } from 'react';
import "./CartWidget.scss";

export const CardWidget = () => {
    return (
        <div>
            <div className="container-fluid d-flex justify-content-end ContainerCardWidget">
                <div className="navbar-brand row ContainerImgP" href="#">
                    <img onmouseover="showCart(this)" class="cart mt-2" src="cart.png" alt=""></img>
                    <p className="col text-dark">10</p>
                </div> 
            </div>
        </div>
    )
}
