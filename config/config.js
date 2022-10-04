const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'Marcos_te_falta_calle',
    mongoUri: process.env.MONGODB_URI || 'mongodb+srv://blue_01:z2Mr4xPOExAhdPWK@clusterprojectx.kg9wb90.mongodb.net/?retryWrites=true&w=majority'
}

export default config