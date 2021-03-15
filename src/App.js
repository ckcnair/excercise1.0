import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions/actions";
class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: "",
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.title.trim() || Number(this.state.title)) return;
    let note = {
      title: this.state.title,
    };
    this.props.createNote(note);
    this.setState({ title: "" });
  }

  removeNotes = (event, index) => {
    event.preventDefault();
    this.props.removeNote(index);
  };

  listGroupItem(data, index) {
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={data.id} className="list-group-item clearfix">
            {data.note.title}
            <span className="badge badge-light">&nbsp;{data.date}</span>
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
            <div className="form-row">
              <div className="col-md-10">
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-success">
                Save
              </button>
            </div>
          </form>
          <hr />
          <ul className="list-group list-group-flush">
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
    createNote: (note) => dispatch(actions.createNote(note)),
    removeNote: (index) => dispatch(actions.removeNote(index)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
