import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDTO{  
    //movie를 만들때 필요한 것을 사람들로부터 받아옴
    //id는 받아오면 안됨
   
   @IsString() //유효성 검사
    readonly title:string;

    @IsNumber()
    readonly year:number;

    @IsOptional()
    @IsString({each:true}) //each를 통해 모든 요소를 각각 검사함
    readonly generes:string[];
}