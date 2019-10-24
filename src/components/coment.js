import React from 'react';
import ComentList from './comentList';

class Coment extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>Comentários</h3>
          <ComentList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <input
              id="new-coment"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Adicionar #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  export default Coment;