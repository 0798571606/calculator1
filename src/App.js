import { useState } from 'react';
import './App.css';

function App() {
  const [showStudents, setShowStudents] = useState(true);

  const [students, setStudents] = useState([
    { name: 'hamid', id: 1 },
    { name: 'yasser', id: 2 },
    { name: 'mohammad', id: 3 },
    { name: 'shakib', id: 4 },
    { name: 'khalil', id: 5 },
  ]);

  function handleDelete(id) {
    setStudents((prevStudent) => {
      return prevStudent.filter((student) => {
        return id !== student.id;
      });
    });
  }

  return (
    <div>
      <div >
        {showStudents && <button onClick={() => setShowStudents(false)}>Hide</button>}
        {!showStudents && <button onClick={() => setShowStudents(true)}>Show</button>}
      </div>

      {showStudents &&
        students.map((student, index) => (
          <div className='student' key={index}>
            <h3>
              {index + 1} - {student.name}
            </h3>
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default App;
