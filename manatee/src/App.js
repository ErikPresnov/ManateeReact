import React, { useEffect, useState } from "react"

function App() {
  const url = "http://localhost:8080/applications"
  const [ applications, setData ] = useState([]);
  const fetchInfo = () => {
    return fetch(url, {
              method: "GET"
             })
            .then((res) => res.json())
            .then((d) => setData(d))
  }
  useEffect(() => {
    fetchInfo();
  }, [])
  const row = {padding: '5px', margin: '5px'};
  const cell = {padding: '5px', margin: '5px'};
  return (
    <div>
      <table border={1}>
        <tr style={row}>
          <th style={cell}>Aplication ID</th>
          <th style={cell}>Application state</th>
          <th style={cell}>Candidate ID</th>
          <th style={cell}>Candidate Name</th>
          <th style={cell}>Interview ID</th>
          <th style={cell}>Interview State</th>
          <th style={cell}>Interviewer</th>
          <th style={cell}>Time</th>
          <th style={cell}>Interview type</th>
        </tr>
      {applications.map( application => {
        return <tr key={application.id} style={row}>
          <td style={cell}>{application.id}</td>
          <td style={cell}>{application.applicationState}</td>
          <td style={cell}>{application.candidate.id}</td>
          <td style={cell}>{application.candidate.firstName + " " + application.candidate.lastName}</td>
          <td style={cell}>{application.interview.id}</td>
          <td style={cell}>{application.interview.state}</td>
          <td style={cell}>{application.interview.interviewer}</td>
          <td style={cell}>{application.interview.time}</td>
          <td style={cell}>{application.interview.interviewType}</td>
        </tr>
      })}
      </table>
    </div>
  )  
}

export default App;


