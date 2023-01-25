import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  return (
    <form>
      <label htmlFor="first-name">First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          id="first-name"
        />
      </label>
      <label htmlFor="last-name">Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          id="last-name"
        />
      </label>
      <label htmlFor="email">Email Address:
        <input
          type="email"
          name="email"
          value={formData.email}
          id="email"
        />
      </label>
    </form>
  );
}
export default Form;
