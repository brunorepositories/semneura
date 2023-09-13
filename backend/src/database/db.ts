require('dotenv').config()

const initOptions = {
	promiseLib: Promise,
	connect (client) {
		// const cp = client.connectionParameters
		console.log('Conectado na base de dados:', client)
	},
	error (err) {
		if (err) {
			console.log(err)
		}
	},
	query (e) {
		console.log('QUERY:', e.query)
	}
}

const dbConfig = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	poolSize: 10,
	idleTimeoutMillis: 50
}

const pgp = require('pg-promise')(initOptions)
const db = pgp(dbConfig)

export default db
