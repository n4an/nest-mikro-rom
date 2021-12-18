import { LoggerNamespace } from '@mikro-orm/core'
import { MikroOrmMiddleware, MikroOrmModule } from '@mikro-orm/nestjs'
import { MiddlewareConsumer, Logger, Module, NestModule } from '@nestjs/common'
import { ProfilesModule } from './modules/profiles/profiles.module'
import { UsersModule } from './modules/users/users.module'

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      useFactory: () => ({
        allowGlobalContext: true,
        populateAfterFlush: true,


        dbName: 'test',
        debug: true,
        discovery: {
          warnWhenNoEntities: true
        },
        host: 'localhost',
        password: '123456',
        // metadataProvider: TsMorphMetadataProvider,
        port: 3306,
        type: 'mysql',
        username: 'root',
        entities: [__dirname + '/modules/**/entities/*.entity.js'],
        entitiesTs: [__dirname + '/modules/**/entities/*.entity.ts'],
      })
    }),
    ProfilesModule,
    UsersModule
  ]
})
export class AppModule {}
