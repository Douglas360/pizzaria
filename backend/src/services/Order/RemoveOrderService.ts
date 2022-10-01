import prismaClient from "../../prisma";

interface OrderRequest{
    id_order: string
}
class RemoveOrderService{
    async execute({id_order}: OrderRequest){
        const order = await prismaClient.order.delete({where:{id_order:id_order}})
        return order
    }

}

export {RemoveOrderService}