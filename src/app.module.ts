import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassThrough } from 'stream';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      entities: [PassThrough], // Example entity, replace with actual entities
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
