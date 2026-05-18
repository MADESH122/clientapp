// import { useState, useEffect } from 'react';

// const GeneratedQuestions = () => {
//   const [questionsData, setQuestionsData] = useState(null);
//   const [activeTab, setActiveTab] = useState('All');

//   useEffect(() => {
//     const savedData = localStorage.getItem('generatedQuestions');
//     if (savedData) {
//       setQuestionsData(JSON.parse(savedData));
//     }
//   }, []);

//   if (!questionsData) {
//     return <div className="loading">No questions found. Please upload a resume first.</div>;
//   }

//   if (!questionsData.success) {
//     return <div className="error">Failed to generate questions.</div>;
//   }

//   // Safely access questions
//   const questions = questionsData.questions || { easy: [], medium: [], hard: [] };

//   const allQuestions = [
//     ...(questions.easy || []).map(q => ({ level: 'Easy', text: q })),
//     ...(questions.medium || []).map(q => ({ level: 'Medium', text: q })),
//     ...(questions.hard || []).map(q => ({ level: 'Hard', text: q }))
//   ];

//   const displayedQuestions = activeTab === 'All' 
//     ? allQuestions 
//     : allQuestions.filter(q => q.level === activeTab);

//   return (
//     <div className="questions-page">
//       <div className="questions-container">
//         <div className="questions-header">
//           <h1>Personalized Interview Questions</h1>
//           <p>Based on your resume • Role: {questionsData.jobRole || 'Full Stack Developer'}</p>
//         </div>

//         <div className="tabs">
//           {['All', 'Easy', 'Medium', 'Hard'].map(tab => (
//             <button
//               key={tab}
//               className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         <div className="questions-grid">
//           {displayedQuestions.length > 0 ? (
//             displayedQuestions.map((q, index) => (
//               <div key={index} className="question-card">
//                 <div className="card-header">
//                   <h3 className={q.level.toLowerCase()}>{q.level}</h3>
//                 </div>
//                 <p className="question-text">{q.text}</p>
//               </div>
//             ))
//           ) : (
//             <p>No questions available in this category.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GeneratedQuestions;