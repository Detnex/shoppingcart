import React,{ Component }from 'react';
import './App.css';
import Table from './components/table';
import Form from './components/form';

class App extends Component {
  state = {
      characters : [    ]
  }

   removeCharacter = index => {
  const { characters } = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}

handleSubmit = character => {
  this.setState({ characters: [...this.state.characters, character] })
}

  render() {
    
    const { characters } = this.state

    return (
     <div className="App"> 
      <div className="app1">
        <h2>Shopping List</h2>
       <Table cdata = {characters} remove={this.removeCharacter} />
      </div>
      <div className="app2"> 
        <h2>Add Items</h2>
       <Form handleSubmit={this.handleSubmit} />
        </div>
        <h1>Prepare Your Cart</h1>
      </div>
    )
  }
}

export default App;
