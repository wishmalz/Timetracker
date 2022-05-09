import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '@app/ormconfig';
import { UserModule } from '@app/user/user.module';
import { AuthMiddleware } from './user/middlewares/auth.middleware';
import { TimespanModule } from './timespan/timespan.module';
import { ClientModule } from './client/client.module';
import { ProjectModule } from './project/project.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TagModule,
    UserModule,
    TimespanModule,
    ClientModule,
    ProjectModule,
    TeamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
