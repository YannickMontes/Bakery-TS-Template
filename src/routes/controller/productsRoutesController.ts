import { Request, Response } from "express";

async function getAllProducts(req: Request, res: Response)
{
	let {products, error } = await req.app.locals.database.getAllProducts();
	if(error)
		return res.status(500).json({error});
	else
		return res.status(200).json({products});
}

export default {
	getAllProducts,
}