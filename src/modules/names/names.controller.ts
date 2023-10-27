import { Body, Controller, Post } from '@nestjs/common';
import { NamesService } from './names.service';

@Controller('api/v1/names')
export class NamesController {

    constructor(private namesService:NamesService){

    }

    //Create an EndPoint in controller and in service
    @Post()
    createName(@Body() data:{name:string}){
        return this.namesService.createName(data.name);
    }
}
