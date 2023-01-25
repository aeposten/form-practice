

function Form({formData, handleChange}) {
  return (
    <form>
      <label htmlFor="first-name">First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          id="first-name"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="last-name">Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          id="last-name"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">Email Address:
        <input
          type="email"
          name="email"
          value={formData.email}
          id="email"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="comments">Comments
        <textarea
          name="comments"
          value={formData.comments}
          id="comments"
          onChange={handleChange}
        />
      </label>
    </form>
  );
}
export default Form;
