import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    id_category: string
}
class CreateProductService {
    async execute({ name, price, description, banner, id_category }) {
        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                id_category: id_category
            }
        })

        return { product }

    }

}

export { CreateProductService }