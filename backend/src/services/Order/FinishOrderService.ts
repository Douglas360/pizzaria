import prismaClient from "../../prisma";

interface OrderRequest{
    id_order: string
}
class FinishOrderService{
    async execute({id_order}: OrderRequest){
        const order = prismaClient.order.update({
            where:{
                id_order:id_order
            },
            data:{
                status: true
            }})

            return order
    }

}
export {FinishOrderService}