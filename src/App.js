import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      cardName: ' ',
      cardDescription: ' ',
      cardAttr1: ' ',
      cardAttr2: ' ',
      cardAttr3: ' ',
      cardImage: ' ',
      cardRare: ' ',
      cardTrunfo: false,
      // hasTrunfo: false,
      // isSaveButtonDisabled: false,
    };
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ this.state.cardName }
          cardDescription={ this.state.cardDescription }
          cardAttr1={ this.state.cardAttr1 }
          cardAttr2={ this.state.cardAttr2 }
          cardAttr3={ this.state.cardAttr3 }
          cardImage={ this.state.cardImage }
          cardRare={ this.state.cardRare }
          cardTrunfo={ this.state.cardTrunfo }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ this.state.cardName }
          cardDescription={ this.state.cardDescription }
          cardAttr1={ this.state.cardAttr1 }
          cardAttr2={ this.state.cardAttr2 }
          cardAttr3={ this.state.cardAttr3 }
          cardImage={ this.state.cardImage }
          cardRare={ this.state.cardRare }
          cardTrunfo={ this.state.cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
