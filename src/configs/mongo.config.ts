
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

export const getMongoCloudConfig = async (configServise: ConfigService): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoCloudString(configServise),
    ...getMongoOptions()
  };
};

const getMongoCloudString = (configServise: ConfigService) =>
  'mongodb+srv://' +
  configServise.get('MONGO_LOGIN') +
  ':' +
  configServise.get('MONGO_PASSWORD') +
  '@' +
  configServise.get('MONGO_HOST') +
  '/' +
  configServise.get('MONGO_DBNAME');  
  '?retryWrites=true&w=majority';

const getMongoOptions = () => ({})
