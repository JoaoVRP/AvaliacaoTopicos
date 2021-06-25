
import { MatTableDataSource } from "@angular/material/table";
import { ProdutoService } from "../../../services/produto.service";
import { Produto } from "../../../models/Produto";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {

  nome!: string;
  barras!: string;
  preco!: number;

  constructor(private service: ProdutoService, private router: Router, private snack: MatSnackBar) {}

  ngOnInit(): void { 
   }

  cadastrar(): void {
    let produto = new Produto();
    produto.nome = this.nome;
    produto.codigoBarras = this.barras;
    produto.preco = this.preco;
    this.service.cadastrar(produto).subscribe(produto => {
      console.log(produto);
      this.snack.open("Produto cadastrado", "Produto", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      }) ;
      this.router.navigate([""]);
    });
  }

 }
