import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
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

    @Get()
    //@Query('start') => 'start' is a parameter for filter data. In Postman {{server}}:{{port}}/api/v1/names?start=Ju
    getNames(@Query('start') start:string){
        return this.namesService.getNames(start);
    }

    @Put('/:name/:newName')
    updateName(@Param('name') name:string, @Param('newName') newName:string){
        return this.namesService.updateName(name,newName)
    }

    @Delete('clear') //this one must to be placed before all delete functions
    clearNames(){
        return this.namesService.clearNames()
    }

    @Delete('/:name')
    deleteName(@Param('name') name:string){
        return this.namesService.deleteName(name)
    }

    

}

