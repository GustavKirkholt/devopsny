import {makeAutoObservable, observable, runInAction} from "mobx"
import {response} from "../node/yarn/dist/lib/cli";

const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment
class GiraffeStore {

    giraffes = ["Loading..."];
    state = [""];
    giraffe = 'Ny Giraf';

    constructor(props) {
        makeAutoObservable(this,{giraffes: observable},{autoBind:true});
        this.fetchGiraffes();

    }

    state = "Loading";

    fetchGiraffes() {
        fetch(baseUrl + "rest/giraffes").then(
            (response) => response.json().then(
                (json) => runInAction(() => this.giraffes=json)
                    .then(this.state = "Done")
                    .catch(this.state = "Failed")
            )
        )
    }

    postGiraffes () {
       const giraffe = this.giraffe
        fetch(baseUrl + "rest/giraffes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(giraffe),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Succes', giraffe);
            })
            .catch((error) => {
                console.error('Error', giraffe);
            })
    }
}
export const giraffestore = new GiraffeStore();
