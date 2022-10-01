import prismaClient from "../../prisma";

class ListCategoryService{
    async execute(){
        const category = await prismaClient.category.findMany({
            select:{
                id_category: true,
                name: true
            }
        })

        return category
    }
}

export {ListCategoryService}