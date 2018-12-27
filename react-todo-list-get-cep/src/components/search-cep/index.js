"use strict";

import React from "react";

const SearchCep = () => (
  <div>
    <h2>Busca CEP</h2>
    <form>
      <input type="text" name="cep" />
      <button type="submit">Buscar Endereço</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>CEP</th>
          <th>Endereço</th>
          <th>Bairro</th>
          <th>Cidade</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>17204670</td>
          <td>Deolindo de Oliveira e Souza</td>
          <td>Jardim Sanzovo</td>
          <td>Jau</td>
          <td>SP</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SearchCep;
