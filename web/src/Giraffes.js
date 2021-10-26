import React from "react";
import {giraffestore} from "./GiraffeStore";
import Button from "@mui/material/Button";
import { observer } from "mobx-react-lite";


function Giraffes () {

        return (
            <div className="Giraffes">
                <header className="Giraffes-header">
                    <title>Giraffes</title>
                    <div class="centered">
                        <h2>{giraffestore.state}</h2>
                    </div>
                    <div class="centered">
                        <Button variant="contained" color="primary" onClick={() => giraffestore.postGiraffes()}>
                            Add Giraffe </Button>
                    </div>
                    <div class="centered">
                        <ul>
                            {giraffestore.giraffes.map((giraffeName,key)=>
                                <li key={key}>{giraffeName}</li>
                            )}
                        </ul>
                    </div>
                </header>
            </div>
        );
}

export default observer (Giraffes);