export default {
  url: process.env.DATABASE_URL,
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || 'development'
}
