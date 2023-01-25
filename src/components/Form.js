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
          onChange={handleChange}
        />
        <label htmlFor="this-one">This One!</label>
        <br />

        <input
          type="radio"
          id="no-me"
          name="selectBox"
          value="No me!"
          onChange={handleChange}
        />
        <label htmlFor="no-me">No me!</label>
        <br />
      </fieldset>
    </form>
  );
}
export default Form;
