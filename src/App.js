// import React, { Component }  from 'react';
// import { useState } from 'react';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";


const App = ()=>{
    return (
        <div>
        <NavBar/>
        <ItemListContainer greeting={"Nike"}/>
        </div>
    )
}
export default App;
