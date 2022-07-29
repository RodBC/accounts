import { Module } from '@nestjs/common';
import { ChangePassService } from './change-pass.service';
import { ChangePassController } from './change-pass.controller';

@Module({
  controllers: [ChangePassController],
  providers: [ChangePassService]
})
export class ChangePassModule {}
