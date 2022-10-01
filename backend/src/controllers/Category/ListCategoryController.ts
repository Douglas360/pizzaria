import { Request, Response } from "express";
import { ListCategoryService } from "../../services/Category/ListCategoryService";

class ListCategoryController{
    async handle(req, res){
        const listCategoryService = new ListCategoryService()

        const category = await listCategoryService.execute()

        return res.json(category)
    }
}

export {ListCategoryController}

