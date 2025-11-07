import "./../TDA-styles/AllQuests.css";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCourse, submitAssignment } from '../features/coursesSlice';

export default function AllQuests() {
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses.courses || []);
    const [mode, setMode] = useState('student'); // 'student' or 'teacher'
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [studentName, setStudentName] = useState('Student');
    const [answersByCourse, setAnswersByCourse] = useState({});

    function handleAddCourse(e) {
        e.preventDefault();
        if (!title) return;
        dispatch(addCourse({ title, description, lecturer: 'Lektor' }));
        setTitle(''); setDescription('');
    }

    function handleSubmit(courseId) {
        const answers = answersByCourse[courseId] || '';
        dispatch(submitAssignment({ courseId, student: studentName, answers }));
        setAnswersByCourse(prev => ({ ...prev, [courseId]: '' }));
    }

    return (
        <div className="all-quests-section">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2>Kurzy</h2>
                <div>
                    <label style={{marginRight: 8}}>Režim:</label>
                    <select value={mode} onChange={e=>setMode(e.target.value)}>
                        <option value="student">Student</option>
                        <option value="teacher">Lektor</option>
                    </select>
                </div>
            </div>

            {mode === 'teacher' && (
                <form onSubmit={handleAddCourse} style={{margin: '12px 0'}}>
                    <input placeholder="Název kurzu" value={title} onChange={e=>setTitle(e.target.value)} required />
                    <input placeholder="Krátký popis" value={description} onChange={e=>setDescription(e.target.value)} />
                    <button type="submit">Přidat kurz</button>
                </form>
            )}

            <div className="all-quests-container">
                <div style={{marginBottom: 12}}>
                    <label style={{marginRight:8}}>Jméno studenta:</label>
                    <input value={studentName} onChange={e=>setStudentName(e.target.value)} />
                </div>
                {courses.map(course => (
                    <div key={course.id} style={{border: '1px solid #ddd', padding: 12, marginBottom: 8}}>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <p><b>Lektor:</b> {course.lecturer}</p>

                        {mode === 'student' ? (
                            <div>
                                <textarea placeholder="Sem napište své odpovědi / řešení" value={answersByCourse[course.id] || ''} onChange={e=>setAnswersByCourse(prev=>({ ...prev, [course.id]: e.target.value }))} />
                                <br />
                                <button onClick={()=>handleSubmit(course.id)}>Odevzdat</button>
                                <div style={{marginTop:8}}>
                                    <b>Odevzdání:</b>
                                    {course.submissions.length === 0 ? <div>Žádná odevzdání</div> : (
                                        <ul>
                                            {course.submissions.map(s => (
                                                <li key={s.id}>{s.student}: {s.grade} %</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <b>Odevzdané práce</b>
                                {course.submissions.length === 0 ? <div>Žádná odevzdání</div> : (
                                    <ul>
                                        {course.submissions.map(s => (
                                            <li key={s.id}><b>{s.student}</b>: {s.grade} % — <i>{s.answers.substring(0,80)}{s.answers.length>80? '...':''}</i></li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
