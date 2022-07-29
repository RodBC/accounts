import { 
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";
import {ApiProperty, ApiTags} from '@nestjs/swagger'
@ApiTags('User')
@Entity( {name: 'user'} )
export class User{

@ApiProperty({name:'id', type:Number})
@PrimaryGeneratedColumn('increment', { name: 'id' })
id: string;

@ApiProperty({name:'email', type:String})
@Column()
email: string;

@ApiProperty({name:'name', type:String})
@Column()
name:string;

@ApiProperty({name: 'login', type:String})
@Column()
login: string;

}