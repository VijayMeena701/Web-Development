import React, { useState, useEffect } from 'react';
import arrayOfData from './data'; // data file containing json objects
import { FaAngleDoubleRight } from 'react-icons/fa';
function App() {
  const [loading, setLoading] = useState(true);
  const [education,setEducation] = useState(['']);
  const [value, setValue] = useState(0);
  const fetchData = async () => {
    const newEducation = arrayOfData;  // fetch data here using url;
    setEducation(newEducation);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  },[]);
  
  const { institute, dates, duties, title, link } = education[value];

  var educationMarkup = loading ? (
      <section className="section loading">
        <h2>Loading...</h2>
      </section>
  ) : (
    <section className="section">
    <div className="title">
      <h2>Education</h2>
      <div className="underline"></div>
    </div>
    <div className="edus-center">
      <div className="btn-container">
        {education && education.map((edu, index) => {
          return <button key={edu.id} onClick={()=> setValue(index)} className={`edu-btn ${index === value && 'active-btn'}`} >
            {edu.short}
          </button>
        })}
      </div>
      <article className="edu-info">
      <h3>{title}</h3>
      <h4>{institute}</h4>
      <p className="edu-date">{dates}</p>
      {duties && duties.map((duty, index)=>{
        return <div className="edu-desc" key={index}>
          <FaAngleDoubleRight className="edu-icon"/>{duty}
        </div>
      })}
      </article>
    </div>
    <button type="button" className="btn"><a href={link} target="_blank" rel="noopener noreferrer" >{ link ? 'more info' : 'not available'}</a></button>
  </section>
  );
  

  return educationMarkup
}

export default App
