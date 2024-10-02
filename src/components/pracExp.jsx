export default function Practical({
    companyName,
    location, 
    position,
    mainResponsibilities,
    fromDate,
    untilDate,
    onCompanyNameChange,
    onLocationChange,
    onPositionChange,
    onMainResponsibilitiesChange,
    onFromDateChange,
    onUntilDateChange,
    onSubmit
    }) {
        return(
            <div className="cards">
                <h2>Practical Experiences</h2>
                <hr />
                <label htmlFor="company-name">Company's Name: </label>
                <input type="text" id="company-name" value={companyName} onChange={onCompanyNameChange} required autoComplete="off"/>
                <label htmlFor="company-location">Location: </label>
                <input type="text" id="company-location" value={location} onChange={onLocationChange} required autoComplete="off"/>
                <label htmlFor="position">Position: </label> 
                <input type="text" id="position" value={position} onChange={onPositionChange} required autoComplete="off"/>
                <label htmlFor="main-responsibilities">Main responsibilities: </label>
                <input type="text" id="main-responsibilities" value={mainResponsibilities} onChange={onMainResponsibilitiesChange} required autoComplete="off"/>
                <div className="date-input">
                    <label htmlFor="from-date">From Date: </label>
                    <input type="text" id="from-date" value={fromDate} onChange={onFromDateChange} required autoComplete="off"/>
                    <label htmlFor="until-date">Until Date:</label>
                    <input type="text" id="until-date" value={untilDate} onChange={onUntilDateChange} required autoComplete="off"/>
                </div>

                <button onClick={onSubmit}>Submit</button>
            </div>
        )
}