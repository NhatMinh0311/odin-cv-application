export default function General({
    name, 
    email, 
    phone, 
    onNameChange, 
    onEmailChange, 
    onPhoneChange
}) {
    return (
        <div className="cards">
            <h2>General Info</h2>
            <hr />
            <label htmlFor="name">Full Name: </label>
            <input type="text" id="name" placeholder="Full Name" value={name} onChange={onNameChange} required autoComplete="off"/>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" placeholder="Email" value={email} onChange={onEmailChange} required autoComplete="off"/>
            <label htmlFor="phone">Phone Number: </label>
            <input type="text" id="phone" placeholder="Phone Number" value={phone} onChange={onPhoneChange} required autoComplete="off"/>
        </div>
    )
}