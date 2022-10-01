import prismaClient from "../../prisma";

interface DetailRequest {
    id_order: string
}
class DetailOrderService {
    async execute({ id_order }: DetailRequest) {

        const order = await prismaClient.item.findMany({ 
            where:{ 
                id_order: id_order 
            },
            include:{
                product: true,
                order: true
            }    
        })
        
        return order
    }

}
export { DetailOrderService }