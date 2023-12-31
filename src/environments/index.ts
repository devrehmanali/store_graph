import * as dotenv from 'dotenv';
dotenv.config();

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development';

// author
const AUTHOR: string = process.env.AUTHOR || 'Rehman Ali';

// application
const PRIMARY_COLOR: string = process.env.PRIMARY_COLOR || '#87e8de';
const DOMAIN: string = process.env.DOMAIN || 'localhost';
const PORT: number = +process.env.PORT || 14047;
const END_POINT: string = process.env.END_POINT || 'graphql';
const VOYAGER: string = process.env.VOYAGER || 'voyager';
const FE_URL: string = process.env.FE_URL || 'xxx';
const RATE_LIMIT_MAX: number = +process.env.RATE_LIMIT_MAX || 10000;
const GRAPHQL_DEPTH_LIMIT: number = +process.env.GRAPHQL_DEPTH_LIMIT || 3;

// mongodb
const MONGO_URL: string =
  process.env.MONGO_URL || 'mongodb://localhost:27017/mygraphqlbackend';

// typeorm
const enviroment = {
  development: {
    url: MONGO_URL,
  },
  testing: {
    url: MONGO_URL,
  },
  staging: {
    url: MONGO_URL,
    // host: 'localhost',
    // port: MONGO_PORT!,
    // username: '',
    // password: '',
    // database: MONGO_DB!,
  },
  production: {
    url: MONGO_URL,
  },
};
const TYPEORM = enviroment[NODE_ENV];

// jsonwebtoken
const ISSUER: string = process.env.ISSUER || 'Rehman Ali';
const AUDIENCE: string =
  process.env.AUDIENCE || 'http://devrehmanali.github.io';
const ACCESS_TOKEN: string = process.env.ACCESS_TOKEN || 'access-token';
const ACCESS_TOKEN_SECRET: string =
  process.env.ACCESS_TOKEN_SECRET || 'access-token-key';
const REFRESH_TOKEN: string = process.env.REFRESH_TOKEN || 'refresh-token';
const REFRESH_TOKEN_SECRET: string =
  process.env.REFRESH_TOKEN_SECRET || 'refresh-token-key';
const EMAIL_TOKEN: string = process.env.EMAIL_TOKEN || 'email-token';
const EMAIL_TOKEN_SECRET: string =
  process.env.EMAIL_TOKEN_SECRET || 'email-token-key';
const RESETPASS_TOKEN: string =
  process.env.RESETPASS_TOKEN || 'resetpass-token';
const RESETPASS_TOKEN_SECRET: string =
  process.env.RESETPASS_TOKEN_SECRET || 'resetpass-token-key';

// bcrypt
const BCRYPT_SALT: number = +process.env.BCRYPT_SALT || 10;

// nodemailer
const NODEMAILER_USER: string = process.env.NODEMAILER_USER || 'xxx';
const NODEMAILER_PASS: string = process.env.NODEMAILER_PASS || 'xxx';

// cloudinary
const CLOUDINARY_NAME: string = process.env.CLOUDINARY_NAME || 'chnirt';
const CLOUDINARY_API_KEY: string =
  process.env.CLOUDINARY_API_KEY || '475584948229723';
const CLOUDINARY_API_SECRET: string =
  process.env.CLOUDINARY_API_SECRET || 'Duno2be58mE2lCFLcuOssGKG54c';

// pubsub
const NOTIFICATION_SUBSCRIPTION = 'newNotification';
const USER_SUBSCRIPTION = 'newUser';
const MESSAGES_SUBSCRIPTION = 'newMessages';

// passport
const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID || 'xxx';
const GOOGLE_CLIENT_SECRET: string = process.env.GOOGLE_CLIENT_SECRET || 'xxx';
const GOOGLE_CALLBACK_URL: string =
  process.env.GOOGLE_CALLBACK_URL || 'auth/google/callback';

const FACEBOOK_APP_ID: string = process.env.FACEBOOK_APP_ID || 'xxx';
const FACEBOOK_APP_SECRET: string = process.env.FACEBOOK_APP_SECRET || 'xxx';
const FACEBOOK_CALLBACK_URL: string =
  process.env.FACEBOOK_CALLBACK_URL || 'auth/facebook/callback';

// google cloud
const GOOGLE_APPLICATION_CREDENTIALS: string =
  process.env.GOOGLE_APPLICATION_CREDENTIALS || 'xxx';

// stripe
const STRIPE_PUBLIC_KEY: string = process.env.STRIPE_PUBLIC_KEY || 'xxx';
const STRIPE_SECRET_KEY: string = process.env.STRIPE_SECRET_KEY || 'xxx';
const STRIPE_PLAN: string = process.env.STRIPE_PLAN || 'xxx';

export {
  NODE_ENV,
  AUTHOR,
  PRIMARY_COLOR,
  DOMAIN,
  PORT,
  END_POINT,
  VOYAGER,
  FE_URL,
  RATE_LIMIT_MAX,
  GRAPHQL_DEPTH_LIMIT,
  TYPEORM,
  MONGO_URL,
  ISSUER,
  AUDIENCE,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN,
  REFRESH_TOKEN_SECRET,
  RESETPASS_TOKEN,
  RESETPASS_TOKEN_SECRET,
  EMAIL_TOKEN,
  EMAIL_TOKEN_SECRET,
  BCRYPT_SALT,
  NODEMAILER_USER,
  NODEMAILER_PASS,
  CLOUDINARY_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  USER_SUBSCRIPTION,
  NOTIFICATION_SUBSCRIPTION,
  MESSAGES_SUBSCRIPTION,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  FACEBOOK_CALLBACK_URL,
  GOOGLE_APPLICATION_CREDENTIALS,
  STRIPE_PUBLIC_KEY,
  STRIPE_SECRET_KEY,
  STRIPE_PLAN,
};
