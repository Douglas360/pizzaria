import prismaClient from "../../prisma";
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

interface AuthRequest{
    email: string;
    password: string
}

class AuthUserService{
    async execute({email, password}: AuthRequest){
        //verificar se o email existe
        const user = await prismaClient.user.findFirst({where:{email:email}})

        if(!user){
            throw new Error("User/Password incorrect");
            
        }

        //verificar se a senha está correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Password incorrect");
        }


        //gerar token JWT e devolver dados
        const token = sign(
            {
                name: user.name,
                email: user.email
        },
        process.env.JWT_SECRET,
        {
            subject: user.id_user,
            expiresIn: '30d'
        })
        
        return {
           // id: user.id_user,
            name: user.name,
            email: user.name,
            token: token

        }
    }
}export {AuthUserService}