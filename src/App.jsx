import { useState } from 'react'
import General from './components/generalInfo'
import Educational from './components/eduExp';
import Practical from './components/pracExp';
import './App.css';
import './styles/inputCards.css';
import './styles/resume.css';

function App() {
  // States of General Infos
  const [name, setName] = useState("David Coperfield");
  const [email, setEmail] = useState("coperfield@example.com");
  const [phone, setPhone] = useState("(+01)99999999");

// States of Educational experiences
  const [schoolName, setSchoolName] = useState("");
  const [location, setLocation] = useState("");
  const [major, setMajor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [eduIndex, setEduIndex] = useState(1);
  const [submittedEduExp, setSubmittedEduExp] = useState([
    {
      id: 0,
      schoolName: "Example school",
      location: "New York, USA",
      major: "Magic",
      startDate: "2021",
      endDate: "2024"
    }
  ]);
  const [edittingEdu, setEdittingEdu] = useState(null);

  // States of Practical Experiences
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [position, setPosition] = useState("");
  const [mainRespon, setMainRespon] = useState("")
  const [fromDate, setFromDate] = useState("");
  const [untilDate, setUntilDate] = useState("");

  const [pracIndex, setPracIndex] = useState(1);
  const [submittedPracExp, setSubmittedPracExp] = useState([]);
  const [edittingPrac, setEdittingPrac] = useState(null);

  function handleEduSubmit() {
    if (edittingEdu === null) {
      setSubmittedEduExp([
        ...submittedEduExp,
        {
          id: eduIndex,
          schoolName,
          location,
          major,
          startDate,
          endDate
        }
      ]);
      setEduIndex(eduIndex + 1);
    }
    else {
      setSubmittedEduExp(
        submittedEduExp.map(data => 
          { return (data.id === edittingEdu) ? {id: data.id, schoolName, location, major, startDate, endDate} : data}
        )
      );
      setEdittingEdu(null);
    }
    setSchoolName("");
    setLocation("");
    setMajor("");
    setStartDate("");
    setEndDate("");
    
  }

  function handleEduDelete(id) {
    setSubmittedEduExp(
      submittedEduExp.filter(data => data.id !== id)
    );
    if (edittingEdu === id) {
      setSchoolName("");
      setLocation("");
      setMajor("");
      setStartDate("");
      setEndDate("");
    }
  }

  function handlePracSubmit() {
    if (edittingPrac === null) {
      setSubmittedPracExp([
        ...submittedPracExp,
        {
          id: pracIndex,
          companyName,
          companyLocation,
          position,
          mainRespon,
          fromDate,
          untilDate
        }
      ]);
      setPracIndex(pracIndex + 1);
    }
    else {
      setSubmittedPracExp(
        submittedPracExp.map(data => 
        (edittingPrac === data.id) ? { id: data.id, companyName, companyLocation, position, mainRespon, fromDate, untilDate } : data)
      )
    }
    setCompanyName("");
    setCompanyLocation("");
    setPosition("");
    setMainRespon("");
    setFromDate("");
    setUntilDate("");
  }

  function handlePracDelete(id) {
    setSubmittedPracExp(
      submittedPracExp.filter(data => data.id !== id)
    );
    if (edittingPrac === id) {
      setCompanyName("");
      setCompanyLocation("");
      setPosition("");
      setMainRespon("");
      setFromDate("");
      setUntilDate("");
    }
  }
  return (
    <>
      <div>
        <General
          name={name}
          email={email}
          phone={phone}
          onNameChange={(e) => setName(e.target.value)}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPhoneChange={(e) => setPhone(e.target.value)}
        />
        <Educational
          schoolName={schoolName}
          location={location}
          major={major}
          startDate={startDate}
          endDate={endDate}
          onSchoolNameChange={(e) => setSchoolName(e.target.value)}
          onLocationChange={e => setLocation(e.target.value)}
          onMajorChange={e => setMajor(e.target.value)}
          onStartDateChange={e => setStartDate(e.target.value)}
          onEndDateChange={e => setEndDate(e.target.value)}
          onSubmit={handleEduSubmit}
        />
        <Practical
          companyName={companyName}
          location={companyLocation}
          position={position}
          mainResponsibilities={mainRespon}
          fromDate={fromDate}
          untilDate={untilDate}
          onCompanyNameChange={e => setCompanyName(e.target.value)}
          onLocationChange={e => setCompanyLocation(e.target.value)}
          onPositionChange={e => setPosition(e.target.value)}
          onMainResponsibilitiesChange={e => setMainRespon(e.target.value)}
          onFromDateChange={e => setFromDate(e.target.value)}
          onUntilDateChange={e => setUntilDate(e.target.value)}
          onSubmit={handlePracSubmit}
        />
      </div>


      <div id="resume">
        <div id="general-sec">
          <h1>{name}</h1>
          <p className="info">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{height: "1.5rem"}}><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
            {email}          
          </p>
          <p className="info">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{height: "1.5rem"}}><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
            {phone}
          </p>
        </div>
        <hr />
        <div>
          {submittedEduExp.length === 0 && "No submitted data yet."}
          {submittedEduExp.map((exp) => 
              {
                  return (
                  <div key={exp.id} className="exps" > 
                      <div onClick={() => {
                        setSchoolName(exp.schoolName);
                        setLocation(exp.location);
                        setMajor(exp.major);
                        setStartDate(exp.startDate);
                        setEndDate(exp.endDate);
                        setEdittingEdu(exp.id);
                      }}>
                        <h4>{exp.startDate + ' - ' + exp.endDate}</h4>
                        <div>
                          <h3>{exp.major}</h3>
                          <p className="info">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{height: "1.5rem"}}><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" /></svg>
                            {exp.schoolName}
                          </p>
                          <p className="info">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{height: "1.5rem"}}><path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z" /></svg>
                            {exp.location}
                          </p>
                        </div>
                      </div>
                      <button onClick={() => handleEduDelete(exp.id)}>Delete</button>
                  </div>
                  )
              })
          }
        </div>
        <hr />
        <div>
            {submittedPracExp.length === 0 && "No submitted data yet."}
            {submittedPracExp.map((exp) => 
              {
                  return (
                  <div key={exp.id} className="exps" > 
                      <div onClick={() => {
                        setCompanyName(exp.companyName);
                        setCompanyLocation(exp.companyLocation);
                        setPosition(exp.position);
                        setMainRespon(exp.mainRespon);
                        setFromDate(exp.fromDate);
                        setUntilDate(exp.untilDate);
                        setEdittingPrac(exp.id);
                      }}>
                        <h4>{exp.fromDate + ' - ' + exp.untilDate}</h4>
                        <div>
                          <h3>{exp.companyName}</h3>
                          <p className="info">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{height: "1.5rem"}}><path d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z" /></svg>
                            {exp.position}
                          </p>
                          <p className="info">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{height: "1.5rem"}}><path d="M21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H11V19.13L19.39 10.74C19.83 10.3 20.39 10.06 21 10M14 4.5L19.5 10H14V4.5M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83Z" /></svg>
                            {exp.mainRespon}
                          </p>
                          <p className="info">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{height: "1.5rem"}}><path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z" /></svg>
                            {exp.companyLocation}
                          </p>
                        </div>
                      </div>
                      <button onClick={() => handlePracDelete(exp.id)}>Delete</button>
                  </div>
                  )
              })
            }
        </div>
      </div>
    </>
  )
}

export default App
