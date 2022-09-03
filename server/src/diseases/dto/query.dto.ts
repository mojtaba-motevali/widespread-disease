import {  BadRequestException } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsArray, IsNumber, IsOptional } from 'class-validator';

// diseases?ids=1,22,121,144
export class QuerySearch {
 
    @IsArray()
    @Transform(({value})=>{
        if(!value || value.length < 1){
            throw new BadRequestException();
        }
        const a = value.split(',');
        for(let i = 0 ; i < a.length ; ++i){
            const item = parseInt(a[i],10);
            if(typeof item === 'number'){
                a[i] = item;
            }else {
                throw new BadRequestException();
            }
        }
        return a;
    })
    signs:[number]
}

export class QueryDiseaseDoctor {
    @IsNumber()
    @IsOptional()
    @Transform(({value})=> {
        return parseInt(value);
    })
    specialistid?:number;
    @IsNumber()
    @IsOptional()
    @Transform(({value})=> {
        return parseFloat(value);
    })
    latitude?:number;
    @IsNumber()
    @IsOptional()
    @Transform(({value})=> {
        return parseFloat(value);
    })
    longitude?:number;
}