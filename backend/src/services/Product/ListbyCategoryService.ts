import prismaClient from "../../prisma";

interface ProductRequest{
    id_category: string
}
class ListByCategoryService{
    async execute({id_category}:ProductRequest){
        const findByCategory = await prismaClient.product.findMany({
            where:{id_category:id_category}
        })

        return findByCategory
            
        }
    }


export {ListByCategoryService}