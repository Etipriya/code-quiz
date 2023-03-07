import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(prop) {
    super(prop);
  }

  startQuiz = () => {
    console.log("start quiz");
  };

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>CODE QUIZ</h1>
        </div>

        <div className="position-absolute top-50 start-50 translate-middle start-quiz-container">
          <button className="btn btn-success" onClick={this.startQuiz}>
            START
          </button>
        </div>
      </div>
    );
  }
}

export default App;
