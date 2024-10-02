export default function Educational({
    schoolName,
    location, 
    major,
    startDate,
    endDate,
    onSchoolNameChange,
    onLocationChange,
    onMajorChange,
    onStartDateChange,
    onEndDateChange,
    onSubmit
    }) {
        return(
            <div className="cards">
                <h2>Educational Experience</h2>
                <hr />
                <label htmlFor="school-name">School's Name: </label>
                <input type="text" id="school-name" value={schoolName} onChange={onSchoolNameChange} required autoComplete="off"/>
                <label htmlFor="school-location">Location: </label>
                <input type="text" id="school-location" value={location} onChange={onLocationChange} required autoComplete="off"/>
                <label htmlFor="major">Major: </label>
                <input type="text" id="major" value={major} onChange={onMajorChange} required autoComplete="off"/>
                <div className="date-input">
                    <label htmlFor="start-date">Start Date: </label>
                    <input type="text" id="start-date" value={startDate} onChange={onStartDateChange} required autoComplete="off"/>
                    <label htmlFor="end-date">End Date:</label>
                    <input type="text" id="end-date" value={endDate} onChange={onEndDateChange} required autoComplete="off"/>
                </div>

                <button onClick={onSubmit}>Submit</button>
            </div>
        )
}