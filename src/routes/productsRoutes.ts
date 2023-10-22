import express from "express";
import productsRoutesController from "./controller/productsRoutesController";

const productsRoutes = express.Router();

productsRoutes.get("/", productsRoutesController.getAllProducts);

export default productsRoutes;