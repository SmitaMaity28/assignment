import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
function JobPost() {
  const [jobData, setJobData] = useState({
    jobTitle: '',
    jobDescription: '',
    experienceLevel: '',
    candidateEmail: '',
    endDate: ''
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // API call to submit job post
    try {
        const API_URL = 'https://jobpost-bacend.onrender.com/api/auth/postJob';
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token":sessionStorage.getItem("authtoken") 
          },
          body: JSON.stringify({...jobData,candidateEmail:jobData.candidateEmail.split(" ")})
        });
    
        const result = await response.json();
      
            if (response.ok) {
            alert('Job posted successfully!');
            setJobData({
                jobTitle: '',
                jobDescription: '',
                experienceLevel: '',
                candidateEmail: '',
                endDate: ''
              });
              console.log(result);
            } 
            else{
                alert('Error occcured!');
            }
    } catch (error) {
        console.log(error)
    }
    console.log('Job post submitted:', jobData);
  };

  return (
    <div className="job-post-container">
      <h2>Create Job Posting</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="jobTitle"
          className="form-input"
          placeholder="Enter Job Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="jobDescription"
          className="form-input"
          placeholder="Enter Job Description"
          onChange={handleChange}
          required
        />
        <select
          name="experienceLevel"
          className="form-input"
          onChange={handleChange}
          required
        >
          <option value="">Select Experience Level</option>
          <option value="Junior">Junior</option>
          <option value="Mid">Mid</option>
          <option value="Senior">Senior</option>
        </select>
        <input
          type="text"
          name="candidateEmail"
          className="form-input"
          placeholder="Add Candidate (Email)"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="endDate"
          className="form-input"
          onChange={handleChange}
          required
        />
        <button type="submit" className="form-button">Post Job</button>
      </form>
    </div>
  );
}

export default JobPost;
