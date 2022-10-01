import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/Order/RemoveOrderService";



class RemoveOrderController{
    async handle(req: Request, res, Response){
        const id_order = req.query.id_order as string
        const removeOrder = new RemoveOrderService()

        const order = await removeOrder.execute({id_order})

        return res.json(order)

    }}

export {RemoveOrderController}