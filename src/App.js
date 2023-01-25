import { useState } from "react";

import Output from "./components/Output";
import Form from "./components/Form";
function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });


  function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    })
  }
  return (
    <div className="App">
      <h1>React Form Practice</h1>
      <Form formData={formData} handleChange={handleChange}/>
      <Output formData={formData} />
    </div>
  );
}

export default App;
