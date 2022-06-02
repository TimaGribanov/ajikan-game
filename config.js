const config = {
    db: {
        host: "process.env.DB_HOST",
        user: "process.env.DB_USER",
        password: "process.env.DB_PWD",
        database: "process.env.DB_SCHEMA"
    }
}

module.exports = config;