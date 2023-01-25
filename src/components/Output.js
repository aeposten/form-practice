function Output ({formData}) {
    return (
        <section className="output">
            <div className="info">First Name: {formData.firstName}</div>
            <div className="info">Last Name: {formData.lastName}</div>
            <div className="info">Email: {formData.email}</div>
            <div className="info">Comments: {formData.comments}</div>
            <div className="info">Can we check it?!: {formData.checkbox ? "yes" : "no"}</div>
            <div className="info">Which box?: {formData.selectBox}</div>
            <div className="info">Fav Color: {formData.favColor}</div>
        </section>
    )
}

export default Output;