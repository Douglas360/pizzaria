import { Request, Response } from "express";
import { AddItemService } from "../../services/Order/AddItemService";

class AddItemController{
    async handle(req:Request, res:Response){
        const {id_order, id_product, amount} = req.body
        const addItem = new AddItemService()
        
        const order = await addItem.execute({
            id_order,
            id_product,
            amount
         })
         
         return res.json(order)
    }

}

export {AddItemController}