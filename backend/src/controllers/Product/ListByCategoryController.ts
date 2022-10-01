import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/Product/ListbyCategoryService";

class ListByCategoryController{
    async handle(req: Request, res: Response){
        const id_category = req.query.id_category as string
        const listByCategory = new ListByCategoryService()

        const product = await listByCategory.execute({
            id_category
        })

        return res.json(product)
    }

}
export {ListByCategoryController}