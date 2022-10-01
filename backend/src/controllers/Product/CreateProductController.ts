import {Request, Response } from 'express'
import { CreateProductService } from '../../services/Product/CreateProductService';

interface MulterRequest extends Request {
    file: any;
}

class CreateProductController{
    
  async handle(req: Request, res: Response){
    const documentFile  = (req as MulterRequest).file;
    const { name, price, description, id_category } = req.body;

    const createProductService = new CreateProductService();

    if(!documentFile){
      throw new Error("error upload file")
    }else{

      const { originalname, filename: banner} = documentFile;

      console.log(banner);

      const product = await createProductService.execute({
        name,
        price,
        description,
        banner,
        id_category
      });
  
      return res.json(product)
    }

  }
}

export { CreateProductController }
