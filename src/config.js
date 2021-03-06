module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DATABASE_URL || 'postgresql://santiagocasar@localhost/conscioussheep',
  CLIENT_ORIGIN: 'https://conscioussheep-app.santiago1.now.sh',
  CLIENT_ORIGINAL:'http://localhost:3002',
  TESTPORT:5432,
  TEST_DB_URL:'postgresql://santiagocasar@localhost/conscioussheep-test',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
  JWT_EXPIRY: process.env.JWT_EXPIRY || 1000000
}
