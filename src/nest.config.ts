// import { TsMorphMetadataProvider } from '@mikro-orm/reflection'

const database = {
  debug: true,
  dbName: 'test',
  discovery: {
    warnWhenNoEntities: true
  },
  entities: [__dirname + '/modules/**/entities/*.entity.js'],
  entitiesTs: [__dirname + '/modules/**/entities/*.entity.ts'],
  host: 'localhost',
  // metadataProvider: TsMorphMetadataProvider,
  password: '123456',
  port: 3306,
  type: 'mysql',
  username: 'root'
}

export default database
