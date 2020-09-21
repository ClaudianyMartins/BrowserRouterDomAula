import React, { Component } from "react";
import "../../styles.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Olá, seja bem vindo à tela Home</h2>
        <br />
        <p>Escolha a página que você deseja acessar:</p>
        <Link to={"/cep"}> Visualizar CEP </Link> <br />
        <Link to={"/produtos"}> Visualizar Produtos </Link>
      </div>
    );
  }
}
