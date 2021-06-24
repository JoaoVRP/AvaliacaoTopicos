import { Request, Response } from "express";
import {produtoSchema} from "../models/ProdutoSchema";

class ProdutoController {
  async listar(request: Request, response: Response) {
    try {
      const produto = await produtoSchema.find().exec();
      const msg = produto.length == 0 ? "Não existem produtos cadastrados" : "Produtos encontrados";
      response.status(201).json({ data: produto, error: false, msg: msg
  });
    } catch (error) {
      response.status(400).json({ data: error, error: true, msg: "Falha ao realizar a busca"
  });
    }
  }

  async cadastrar(request: Request, response: Response) {
    try {

      const codigoBarras = request.body.codigoBarras;
      const produtoExiste = await produtoSchema.findOne({"codigoBarras": codigoBarras}).exec() != null;
    
      if (produtoExiste){
        response.status(409).json({ data: null, error: true, msg: "Código de barras já cadastrado!"})
        return
      }

      var bodyToSend = request.body;
      bodyToSend["criadoEm"] = new Date().toISOString();
      const produto = await produtoSchema.create(bodyToSend);
      response.status(201).json({ data: produto, error: false, msg: "Produto cadastrado com sucesso!",
      });
    } catch (error) {
      response.status(400).json({ data: error, error: true, msg: "Não foi possível cadastrar o produto.",
      });
    }
  }

}

export { ProdutoController };
