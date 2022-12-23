import "./App.css";
import { Component } from "react";
import { sampleText } from "./sampleText";
import { marked } from "marked";

class App extends Component {
  state = {
    text: sampleText,
  };
  handleChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
  };
  renderText = (text) => {
    const __html = marked(text);
    return { __html };
  };
  componentDidMount() {
    const text = localStorage.getItem("text");
    if (text) {
      this.setState({ text });
    } else {
      this.setState({ text: sampleText });
    }
    console.log("je suis monté");
  }
  componentDidUpdate() {
    const { text } = this.state;
    localStorage.setItem("text", text);
    console.log(localStorage);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              className="form-control"
              name=""
              id=""
              rows="33"
              value={this.state.text}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="col-sm-6">
            <div
              dangerouslySetInnerHTML={this.renderText(this.state.text)}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
