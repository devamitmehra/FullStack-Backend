// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersModule } from './users/users.module';
// import { AppDataSource } from 'shared-orm-library/dist/data-source';
// import { User } from 'shared-orm-library/dist/entities/user.entity';
// import { Settings } from 'shared-orm-library/dist/entities/settings.entity';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'codebrew',
//       password: 'root123',
//       database: 'UserAssignment',
//       entities: [User, Settings],
//       synchronize: false,
//     }),
//     TypeOrmModule.forFeature([User]),
//     UsersModule,
//   ],
// })
// export class AppModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AppDataSource } from 'shared-orm-library/dist/data-source';
import { User } from 'shared-orm-library/dist/entities/user.entity';
import { Settings } from 'shared-orm-library/dist/entities/settings.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forFeature([User, Settings]),
    UsersModule,
  ],
})
export class AppModule {}
