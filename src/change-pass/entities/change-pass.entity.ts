import { 
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";
import {ApiProperty, ApiTags} from '@nestjs/swagger'
@ApiTags('ChangePassAttempt')
@Entity( {name: 'ChangePassAttempt'} )
export class ChangePassAttempt{

@ApiProperty({name:'id', type:Number})
@PrimaryGeneratedColumn('increment', { name: 'id' })
id: string;

@ApiProperty({name:'userid', type:String})
@Column()
userid: string;

@ApiProperty({name:'user', type:String})
@Column()
user:string;

@ApiProperty({name: 'date', type:Number})
@Column()
date: string;

@ApiProperty({name: 'changed', type:Boolean})
@Column()
changed: string;

@ApiProperty({name: 'ip', type:String})
@Column()
ip: string;

@ApiProperty({name: 'detail', type:String})
@Column()
detail: string;


}