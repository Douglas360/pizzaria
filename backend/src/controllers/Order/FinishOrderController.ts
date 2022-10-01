import { Request, Response } from "express";
import { FinishOrderService } from "../../services/Order/FinishOrderService";

class FinishOrderController{
    async handle(req: Request, res: Response){
        const {id_order} = req.body
        
        const finishOrderService = new FinishOrderService()

        const order = await finishOrderService.execute({id_order})

        return res.json(order)

    }
}

export {FinishOrderController}