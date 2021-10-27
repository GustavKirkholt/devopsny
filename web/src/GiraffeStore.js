import {makeAutoObservable, observable, runInAction} from "mobx"

const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment
class GiraffeStore {

    constructor(props) {
        makeAutoObservable(this,{giraffes: observable},{autoBind:true});
        this.fetchGiraffes();

    }

    fetchGiraffes() {
        fetch(baseUrl + "rest/giraffes").then(
            (response) => response.json().then(
                (json) => runInAction(() => this.giraffes=json)

            )
        )
    }

    queryGiraffes() {
        fetch("http://localhost:8080/rest/giraffes/query").then((res)=>console.log(res.status))
    }
}
export const giraffestore = new GiraffeStore();
