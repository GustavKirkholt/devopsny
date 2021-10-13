import {makeAutoObservable, observable} from "mobx"

class GiraffeStore {

    giraffes = ["Marius","Melman"];

    constructor(props) {
        makeAutoObservable(this,{giraffes: observable},{autoBind:true});

    }

}
export const giraffestore = new GiraffeStore();
