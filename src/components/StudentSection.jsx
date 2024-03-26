// src/StudentSection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './studentsection.css';

const StudentSection = () => {
    const [examTaken, setExamTaken] = useState(false);
    const navigate = useNavigate();

    const startExam = () => {
        setExamTaken(true);
        navigate('/scribble');
    };

    return (
        <div className="student-section-container">
            <div className="student-section">
                <div className="student-details">
                    <h2>Student Details</h2>
                    <p><strong>Branch:</strong> ECE</p>
                    <p><strong>Enrollment ID:</strong> 0201EC201028</p>
                    <p><strong>Semester:</strong> 5th</p>
                    <p><strong>Parent Name:</strong> John Doe</p>
                    <p><strong>Address:</strong> JEC CAMPUS</p>
                    <p><strong>No. of Backlog:</strong> 2</p>
                </div>
                <div className="exam-button">
                    {examTaken ? (
                        <button disabled>Exam Taken</button>
                    ) : (
                        <button onClick={startExam}>Take Exam</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentSection;
