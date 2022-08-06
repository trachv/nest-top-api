
import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (configServise: ConfigService): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configServise),
    ...getMongoOptions()
  };
};

const getMongoString = (configServise: ConfigService) =>
  'mongodb://' +
  configServise.get('MONGO_LOGIN') +
  ':' +
  configServise.get('MONGO_PASSWORD') +
  '@' +
  configServise.get('MONGO_HOST') +
  ':' +
  configServise.get('MONGO_PORT') +
  '/' +
  configServise.get('MONGO_AUTHDATABASE');

const getMongoOptions = () => ({})
