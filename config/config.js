const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: 'mongodb+srv://pranjalbankawat:CJrwzn38dSnGmNyg@mongocluster.hxejvic.mongodb.net/expense_tracker?retryWrites=true&w=majority&appName=MongoCluster'
}

export default config
