import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <form>
          <label>
            Nome da carta:
            <input data-testid="name-input" type="text" name="name" />
          </label>

          <label>
            Descrição da carta:
            <textarea data-testid="description-input" name="description" />
          </label>

          <label>
            Atributo 1:
            <input data-testid="attr1-input" type="number" name="atribute1" />
          </label>

          <label>
            Atributo 2:
            <input data-testid="attr2-input" type="number" name="atribute2" />
          </label>

          <label>
            Atributo 3:
            <input data-testid="attr3-input" type="number" name="atribute3" />
          </label>

          <label>
            Caminho para imagem da carta:
            <input data-testid="image-input" type="text" name="image" />
          </label>

          <label>
            Raridade:
            <select data-testid="rare-input" name="rarity">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label>
            Trunfo:
            <input type="checkbox" data-testid="trunfo-input" name="trunfo" />
          </label>

          <label>
            Salvar os dados:
            <button
              type="button"
              data-testid="save-button"
              name="save"
              onClick="alert('Hello World!')"
            >
              Salvar
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;

// um buttonque contenha o atributo data-testid="save-button" e que tenha o texto "Salvar".
