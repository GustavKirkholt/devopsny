import {makeAutoObservable, observable, runInAction} from "mobx"

const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment
class GiraffeStore {

    giraffes = ["Loading..."];
    state = [""];

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
}
export const giraffestore = new GiraffeStore();
