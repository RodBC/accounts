import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ChangePassModule } from './change-pass/change-pass.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'postgres',
      autoLoadEntities:true,
    }),
    ChangePassModule,

  ],
})
export class AppModule {}
