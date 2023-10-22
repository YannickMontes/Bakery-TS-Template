import express from "express";
import 'dotenv/config';
import Database from "./database/database";
import productsRoutes from "./routes/productsRoutes";

async function makeApp(database: Database): Promise<express.Express> 
{
	const app: express.Express = express();
	
	app.locals.database = database;
	await database.connect();
	app.locals.PORT = process.env.PORT || 3000;
	
	app.use(express.json());
	app.use("/api/products", productsRoutes);

	return app;
}

export default makeApp;
