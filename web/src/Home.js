import React from "react";
import {Button} from "@material-ui/core";
import { Component } from 'react';

function Home () {

    return (
        <div className="Home">
            <header className="Home-header">
                <title>Home </title>
                    <div className="centered">
                        <h1>Test React Build!</h1>
                    </div>
                    <div className="centered">
                        <Button variant="contained" color="primary">Knap</Button>
                    </div>
                </header>
            </div>
        );
}

export default Home;