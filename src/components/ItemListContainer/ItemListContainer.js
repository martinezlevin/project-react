import React, { Component }  from 'react';
import { useState } from 'react';
import "./ItemListContainer.scss"
export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="titulo">
            <h1 className="Nike" >{greeting}</h1>
        </div>
    );
}
