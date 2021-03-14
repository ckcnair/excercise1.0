import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions/actions";
class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      note: "",
    };
  }

  handleChange(event) {
    this.setState({ note: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createNote({ note: this.state.note });
    this.setState({ note: "" });
  }

  removeNotes = (event, index) => {
    event.preventDefault();
    this.props.removeNote(index);
  };

  listGroupItem(data, index) {
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {console.log(data)}
          </li>
        </div>
        <div className="col-md-2">
          <button
            onClick={(e) => this.removeNotes(e, index)}
            className="btn btn-warning"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <h1>Notes</h1>
        <div>
          <h3>Create New</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.note}
              onChange={this.handleChange}
              className="form-control"
            />
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </form>
          <ul className="list-group">
            {this.props.notes && this.props.notes.length
              ? this.props.notes.map((note, i) => this.listGroupItem(note, i))
              : "Nothing to show!"}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: (note) => dispatch(actions.createNote()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
