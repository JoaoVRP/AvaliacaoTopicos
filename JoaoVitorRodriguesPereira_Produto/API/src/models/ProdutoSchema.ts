import mongoose, { Schema } from "mongoose";

const produto = new Schema(
  {
    nome: {
      type: String,
      required: [true, "É obrigatório o preenchimento do campo de nome!"],
    },
    codigoBarras: {
      type: String,
      required: [true, "É obrigatório o preenchimento do campo de código de barras!"],
    },
    preco: {
      type: Number,
      required: [true, "É obrigatório o preenchimento do campo de preço!"],
    },
    criadoEm: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

var produtoSchema = mongoose.model("Produtos", produto, "Produtos");

export { produtoSchema };
