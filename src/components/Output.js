function Output ({formData}) {
    return (
        <section className="output">
            <div className="info">First Name: {formData.firstName}</div>
            <div className="info">Last Name: {formData.lastName}</div>
            <div className="info">Email: {formData.email}</div>
            <div className="info">Comments: {formData.comments}</div>
        </section>
    )
}

export default Output;