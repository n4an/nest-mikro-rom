import { LoggerNamespace } from '@mikro-orm/core'
import { MikroOrmMiddleware, MikroOrmModule } from '@mikro-orm/nestjs'
import { MiddlewareConsumer, Logger, Module, NestModule } from '@nestjs/common'

import { UsersModule } from './modules/users/users.module'

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      useFactory: () => ({
        autoLoadEntities: false,
        dbName: 'nuxt_nest',
        debug: ['discovery', 'info', 'query', 'query-params'],
        discovery: {
          warnWhenNoEntities: true
        },
        host: 'localhost',
        logging: true,
        password: '123456',
        // metadataProvider: TsMorphMetadataProvider,
        port: 3306,
        type: 'mysql',
        username: 'root',
        synchronize: true,
        entities: [__dirname + '/modules/**/entities/*.entity.js'],
        entitiesTs: [__dirname + '/modules/**/entities/*.entity.ts'],
        logger: msg => (new Logger('MikroOrm')).log(msg)
      })
    }),
    UsersModule
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MikroOrmMiddleware)
      .forRoutes('(.*)')
      // .forRoutes('*')
  }
}
