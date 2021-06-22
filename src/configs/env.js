export default {
  url: process.env.DB_URL,
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || 'development'
}
