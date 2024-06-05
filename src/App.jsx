import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [response, setResponse] = useState("Hi there! How can I assist you?");
  // We also store the input we get from the user in the 'value' state and
  // update it everytime the user types into the input field we have added below
  const [value, setValue] = useState("");

  // We use this function in the newly added 'input' in the return statement.
  // Each time the user types into the input, this function ensures that the
  // 'value' state is updated
  const onChange = (e) => setValue(e.target.value);

  // This function runs when the user presses the button we have added below
  // This function takes the contents of 'value' (the input from the user)
  // and then sends this value to our server, which then sends a new request
  // to the API
  // The function then waits for the new response and updates the 'response'
  // value which we then display on the page
  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3005/chatbot", {
      question: value,
    });
    setResponse(response.data);
  };

  return (
    <>
      <div className="container">
        <div>
          <input type="text" value={value} onChange={onChange}></input>
        </div>
        <div>
          <button onClick={handleSubmit}>Click me for answers!</button>
        </div>
        <div>
          <p>Chatbot: {response}</p>
        </div>
      </div>
    </>
  );
}

export default App;
