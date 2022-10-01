import prismaClient from "../../prisma"
class DetailUserService{
    async execute(user_id: string){

        const user = await prismaClient.user.findFirst({
            where:{id_user:user_id},
            select:{ //Lista apenas esses dados
                id_user: true,
                name: true,
                email: true,
            }})
        return user
    }
}
export {DetailUserService}