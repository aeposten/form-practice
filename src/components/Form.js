function Form({ formData, handleChange }) {
  return (
    <form>
      <label htmlFor="first-name">
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          id="first-name"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="last-name">
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          id="last-name"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        Email Address:
        <input
          type="email"
          name="email"
          value={formData.email}
          id="email"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="comments">
        Comments
        <textarea
          name="comments"
          value={formData.comments}
          id="comments"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="checkbox">
        Can you check the box?
        <input
          type="checkbox"
          name="checkbox"
          checked={formData.checkbox}
          id="checkbox"
          onChange={handleChange}
        />
      </label>

      <fieldset>
        <legend>Select An Option</legend>

        <input
          type="radio"
          id="this-one"
          name="selectBox"
          value="This one!"
          checked={formData.selectBox === "This one!"}
          onChange={handleChange}
        />
        <label htmlFor="this-one">This One!</label>
        <br />

        <input
          type="radio"
          id="no-me"
          name="selectBox"
          value="No me!"
          checked={formData.selectBox === "No me!"}
          onChange={handleChange}
        />
        <label htmlFor="no-me">No me!</label>
        <br />
      </fieldset>
      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
    </form>
  );
}
export default Form;
