import React from "react";

class AddPlayerForm extends React.Component {
  constructor() {
    super();
    this.createPlayer = this.createPlayer.bind(this);
  }
  createPlayer(event) {
    event.preventDefault();
    const player = {
      name: this.name.value,
    };
    this.props.addPlayer(player);
    this.playerForm.reset();
  }
  render() {
    return (
      <form
        ref={(input) => { this.playerForm = input; }}
        onSubmit={(e) => { this.createPlayer(e); }}
      >
        <input ref={(input) => { this.name = input; }} type="text" placeholder="Name" />
        <button type="submit">Add player</button>
      </form>
    );
  }
}

export default AddPlayerForm;
