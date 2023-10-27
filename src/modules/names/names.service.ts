import { Injectable } from '@nestjs/common';

@Injectable()
export class NamesService {

    private _names: string[];

    constructor(){
        this._names = []
    }

    //Create an EndPoint in controller and in service
    createName(name:string){
        this._names.push(name);
        console.log('Names:', this._names);
        return true;
    }

}
