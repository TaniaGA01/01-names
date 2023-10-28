import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { NamesService } from './names.service';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('api/v1/names')
@ApiTags('Names')
export class NamesController {

    constructor(private namesService:NamesService){

    }
    //Each EndPoint in controller and in service :

    @Post()
    @ApiBody({
        description:'Adding a name',
        examples:{
            name1:{
                value:{
                    name:'Fernando'
                }
            },
            name2:{
                value:{
                    name:'Alberto'
                }
            },
            name3:{
                value:{
                    name:'Natalia'
                }
            }
        }
    })
    @ApiOperation({//this is for swagger API documentation
        description: "This endpoint creates a new name and returns 'True' if name is added correctly"
    })
    createName(@Body() data:{name:string}){
        return this.namesService.createName(data.name);
    }

    @Get()
    @ApiQuery({
        name:'start',
        type:'string',
        required:false,
        description:'Letters with which query begins'
    })
    @ApiOperation({
        description: "This endpoint returns all names"
    })
    //@Query('start') => 'start' is a parameter for filter data. In Postman {{server}}:{{port}}/api/v1/names?start=Ju
    getNames(@Query('start') start:string){
        return this.namesService.getNames(start);
    }


    @Put('/:name/:newName')
    @ApiParam({//documentation des params
        name:'name',
        type:'string',
        description:'Original name'
    })
    @ApiParam({
        name:'newName',
        type:'string',
        description:'New name'
    })
    @ApiOperation({
        description: "This endpoint updates the fist parameter name by second one and returns 'True' if name is modified correctly"
    })
    updateName(@Param('name') name:string, @Param('newName') newName:string){
        return this.namesService.updateName(name,newName)
    }


    @Delete('clear') //this one must to be placed before all delete functions
    @ApiOperation({
        description: "This endpoint deletes all names"
    })
    clearNames(){
        return this.namesService.clearNames()
    }


    @Delete('/:name')
    @ApiParam({
        name:'name',
        type:'string',
        description:'Name to delete'
    })
    @ApiOperation({
        description: "This endpoint deletes selected name"
    })
    deleteName(@Param('name') name:string){
        return this.namesService.deleteName(name)
    }
}

