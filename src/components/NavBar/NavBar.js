import React, { Component }  from 'react';
import { useState } from 'react';
import { CardWidget } from "./CartWidget/CartWidget";
import { MenuNavBar } from "../NavBar/MenuNavBar/MenuNavBar";

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-warning">
                <MenuNavBar />
                <CardWidget />
            </nav>
        </div>
    );
}
