const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'Your_Secret_Key',
    mongoUri: process.env.MONGODB_URI || 'MongoAtlas_URL'
}

export default config
