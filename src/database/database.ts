import mongoose from "mongoose";

// Déclarer ici les interfaces de retour de chacune des fonctions de la BDD.

interface ProductsResult
{
	products: null; // <= a modifier
	error: any;
}

class Database 
{
	constructor(private isFromTest: boolean) {}

	async connect() {
		try {
			let dbAddress = (
				this.isFromTest
					? process.env.DB_ADDRESS_TEST
					: process.env.DB_ADDRESS
			) as string;
			await mongoose.connect(dbAddress);
			console.log(`DB Connected ! (${dbAddress})`);
		} catch (error) {
			console.log("Error while connecting to DB !");
			console.log(error);
		}
	}

	// Délcarer les fonctions d'accès a la BDD ici
	async getAllProducts()
	{
		return { products: null, error: null }
	}
}

export default Database;