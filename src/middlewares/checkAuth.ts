import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import 'dotenv/config';

async function checkAuth(req: Request, res: Response, next: NextFunction)
{
	// Vérifier le token d'authentification ici.
}

export default checkAuth;