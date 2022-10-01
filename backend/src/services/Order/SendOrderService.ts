import prismaClient from "../../prisma";

interface OrderRequest{
    id_order: string
}
class SendOrderService{
    async execute({id_order}: OrderRequest){
        const order = await prismaClient.order.update({
            where:{
                id_order:id_order
            },
            data:{
                draft:false
            }
        })
            return order
    }

}
export {SendOrderService}