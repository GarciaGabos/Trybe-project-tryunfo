import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    // this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      myDeck: [],
      searchName: '',
      filterRare: 'todas',
    };
  }

  handleSearchName = ({ target }) => {
    this.setState({
      searchName: target.value,
    });
  }

  onSaveButtonClick = (e) => {
    e.preventDefault();

    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo };

    this.setState((previousState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      myDeck: [...previousState.myDeck, newCard],
    }), () => this.setState({
      hasTrunfo: !!cardTrunfo,
    }));
  };

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value },
      () => this.saveConditions());
    this.checkTrunf();
  }

  removeCard = ({ cardName }) => {
    const { myDeck } = this.state;
    this.setState((prevState) => ({
      myDeck: prevState.myDeck.filter((card) => card.cardName !== cardName),
    }), () => {
      if (myDeck.some((card) => card.cardTrunfo === true && card.cardName === cardName)) {
        this.setState({ hasTrunfo: false });
      }
    });
  }

  checkTrunf() {
    const { myDeck } = this.state;
    const trunfoCheck = myDeck.some((card) => card.cardTrunfo === true);
    if (trunfoCheck === true) {
      this.setState({ hasTrunfo: true });
    }
  }

  saveConditions() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare,
    } = this.state;

    const maxNumberSum = 210;
    const maxNumberForEach = 90;
    if (cardName.length !== 0
    && cardDescription.length !== 0
    && cardImage.length !== 0
    && cardRare.length !== 0
    && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxNumberSum
    && Number(cardAttr1) <= maxNumberForEach
    && Number(cardAttr2) <= maxNumberForEach
    && Number(cardAttr3) <= maxNumberForEach
    && Number(cardAttr1) >= 0
    && Number(cardAttr2) >= 0
    && Number(cardAttr3) >= 0) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, searchName, filterRare,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo, myDeck,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          handleSubmit={ this.handleSubmit }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
          addNewCart={ this.addNewCart }

        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <h1>Meu Baralho:</h1>
        <p>Filtros de pesquisa:</p>
        <p>Por Nome:</p>
        <label htmlFor="search-card">
          <input
            data-testid="name-filter"
            type="text"
            name="search-card"
            id="search-card"
            onChange={ this.handleSearchName }
          />
        </label>
        <p>Por raridade:</p>
        <select
          data-testid="rare-filter"
          onChange={ this.onInputChange }
          name="filterRare"
          placeholder="Selecione a raridade"
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        { filterRare === 'todas'
          ? myDeck
            .filter((card) => card.cardName.includes(searchName))
            .map((eachCard, i) => (
              <div key={ i }>
                <Card
                  cardName={ eachCard.cardName }
                  cardDescription={ eachCard.cardDescription }
                  cardAttr1={ eachCard.cardAttr1 }
                  cardAttr2={ eachCard.cardAttr2 }
                  cardAttr3={ eachCard.cardAttr3 }
                  cardImage={ eachCard.cardImage }
                  cardRare={ eachCard.cardRare }
                  cardTrunfo={ eachCard.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.removeCard(eachCard) }
                >
                  Excluir
                </button>
              </div>)) : myDeck
            .filter((card) => card.cardName.includes(searchName))
            .filter((cards) => cards.cardRare === filterRare)
            .map((eachCard) => (
              <div key={ eachCard.cardName }>
                <Card
                  cardName={ eachCard.cardName }
                  cardDescription={ eachCard.cardDescription }
                  cardAttr1={ eachCard.cardAttr1 }
                  cardAttr2={ eachCard.cardAttr2 }
                  cardAttr3={ eachCard.cardAttr3 }
                  cardImage={ eachCard.cardImage }
                  cardRare={ eachCard.cardRare }
                  cardTrunfo={ eachCard.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.removeCard(eachCard) }
                >
                  Excluir
                </button>
              </div>)) }
      </div>
    );
  }
}

export default App;
