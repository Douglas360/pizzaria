import { Request, Response } from "express";
import { SendOrderService } from "../../services/Order/SendOrderService";

class SendOrderController{
    async handle(req: Request, res: Response){
        const {id_order} = req.body
        
        const sendOrder = new SendOrderService()

        const order = await sendOrder.execute({id_order})

        return res.json(order)
    }
}
export {SendOrderController}