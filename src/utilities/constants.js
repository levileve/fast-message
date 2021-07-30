import * as dotenv from 'dotenv';

dotenv.config();

export default class Constants {
  static env = process.env.NODE_ENV.trim();

  static port = process.env.PORT.trim();

  static host = process.env.HOST.trim();

  static database = {
    host: process.env.DATABASE_HOST.trim(),
  };

  static timezone = process.env.TIMEZONE.trim();

  static language = process.env.LANGUAGE.trim();

  static fileSizeLimit = 5242880; // 5MB
}
