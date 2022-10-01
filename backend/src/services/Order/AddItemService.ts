import prismaClient from "../../prisma";

interface ItemRequest{
    id_order: string
    id_product: string
    amount: number
}
class AddItemService{
    async execute({id_order, id_product, amount}: ItemRequest){
        const order = await prismaClient.item.create({
            data:{
                id_order:id_order,
                id_product:id_product,
                amount: amount
            }
        })
            return order
    }


}
export {AddItemService}