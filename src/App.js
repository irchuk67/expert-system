import React from 'react';
import MyForm from "./Componens/Form";
import {connect} from "react-redux";
import Decision from "./Componens/Decision";
import './App.scss';

const App = () => {
    return (
        <div className="App">
            <div className={'form-part'}>
                <h1>Куди варто інвестувати гроші?</h1>
                <MyForm/>
            </div>
            <div className={'decision-part'}>
                <h1>Рішення:</h1>
                <Decision/>
            </div>

        </div>
    );
}

export default App;
