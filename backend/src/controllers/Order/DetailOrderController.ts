import { Request, Response } from "express";
import { DetailOrderService } from "../../services/Order/DetailOrderService";


class DetailOrderController{
    async handle(req: Request, res: Response){

        const {id_order} = req.body
        
        const detailOrderController = new DetailOrderService()

        const order = await detailOrderController.execute({id_order})

        return res.json(order)
    }
}
export {DetailOrderController}