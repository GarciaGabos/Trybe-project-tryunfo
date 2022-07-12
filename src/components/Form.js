import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
//   constructor() {
//     super();

  //     this.onInputChange = this.onInputChange.bind(this);
  //     this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

  //     this.state = {
  //       cardName: ' ',
  //       cardDescription: ' ',
  //       cardAttr1: ' ',
  //       cardAttr2: ' ',
  //       cardAttr3: ' ',
  //       cardImage: ' ',
  //       cardRare: ' ',
  //       cardTrunfo: false,
  //       hasTrunfo: false,
  //       isSaveButtonDisabled: false,

  //     };
  //   }

  //   onInputChange({ target }) {
  //     const { name, value } = target;
  //     this.setState({ [name]: value });
  //   }

  //   onSaveButtonClick() {
  //     this.setState({ isSaveButtonDisabled: true });
  //   }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <form>
          <label htmlFor="name-input">
            Nome da carta:
            <input
              data-testid="name-input"
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              // value={ this.state.cardName }
              // onChange={ this.onInputChange }
            />
          </label>

          <label htmlFor="description-input">
            Descrição da carta:
            <textarea
              data-testid="description-input"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            //   value={ this.state.cardDescription }
            //   onChange={ this.onInputChange }
            />
          </label>

          <label htmlFor="attr1-input">
            Atributo 1:
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            //   value={ this.state.cardAttr1 }
            //   onChange={ this.onInputChange }
            />
          </label>

          <label htmlFor="attr2-input">
            Atributo 2:
            <input
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            //   value={ this.state.cardAttr2 }
            //   onChange={ this.onInputChange }
            />
          </label>

          <label htmlFor="attr3-input">
            Atributo 3:
            <input
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            //   value={ this.state.cardAttr3 }
            //   onChange={ this.onInputChange }
            />
          </label>

          <label htmlFor="image-input">
            Caminho para imagem da carta:
            <input
              data-testid="image-input"
              type="text"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            //   value={ this.state.cardImage }
            //   onChange={ this.onInputChange }
            />
          </label>

          <label htmlFor="rare-input">
            Raridade:
            <select
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            //   value={ this.state.cardRare }
            //   onChange={ this.onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo-input">
            Trunfo:
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            //   value={ this.state.cardTrunfo }
            //   onChange={ this.onInputChange }
            />
          </label>

          <button
            type="button"
            data-testid="save-button"
            name="save"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            // disabled={ this.state.isSaveButtonDisabled }
            // onClick={ this.onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
