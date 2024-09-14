// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteAll, deleteStudent } from "../feature/Slicer/studentSlice";

// function Display() {
//   const students = useSelector((state) => state.students);
//   console.log(students);
//   const dispatch = useDispatch();
//   const [isEditable, setIsInfoEditable] = useState(false); // State for editing student info

//   const deleteHandler = (id) => {
//     dispatch(deleteStudent({ id })); // Dispatch the deleteStudent action with the student id
//   };
//   const deleteAllHandler = () => {
//     if (window.confirm("Are you sure")) dispatch(deleteAll());
//     else {
//       // Do nothing when user clicks "Cancel" button in the confirm dialog
//     }
//   };
//   const editInfo = () => {
//     setIsInfoEditable(!isEditable);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Student List</h2>
//         {students.length > 0 ? (
//           <>
//             <ul>
//               {students.map((student) => (
//                 <li key={student.id} className="mb-2">
//                   <div className="border-b border-gray-200 py-2 flex justify-between items-center">
//                     <span className="font-bold">{student.name}</span>:{" "}
//                     {student.mark} marks
//                     <button
//                       className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
//                       onClick={() => {
//                         if (isEditable) {
//                           editInfo();
//                         } else setIsInfoEditable((prev) => !prev);
//                       }}
//                       // disabled={todo.completed}
//                     >
//                       {isEditable ? "📁" : "✏️"}
//                     </button>
//                     <button
//                       onClick={() => deleteHandler(student.id)}
//                       className="bg-white text-white px-2 py-1 rounded-lg"
//                     >
//                       ❌
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <button
//               onClick={deleteAllHandler}
//               className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
//             >
//               Delete All
//             </button>
//           </>
//         ) : (
//           <p className="text-center">No students found.</p>
//         )}
//         {/* <button 
//                             onClick={deleteAllHandler}
//                             disabled={students.length === 0} // Disable button if no students
//                             className={`mt-4 px-4 py-2 rounded-lg transition duration-300 ${
//                                 students.length === 0
//                                     ? 'bg-gray-400 cursor-not-allowed'
//                                     : 'bg-red-600 text-white hover:bg-red-700'
//                             }`}
//                         >
//                             Delete All
//                         </button> */}
//       </div>
//     </div>
//   );
// }

// export default Display;
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAll, deleteStudent, updateStudent } from "../feature/Slicer/studentSlice";

function Display() {
  const students = useSelector((state) => state.students); // Default to empty array
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editMark, setEditMark] = useState(0);

  const deleteHandler = (id) => {
    dispatch(deleteStudent({ id }));
  };

  const deleteAllHandler = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteAll());
    }
  };

  const startEditing = (student) => {
    setEditingId(student.id);
    setEditName(student.name);
    setEditMark(student.mark);
  };

  const saveUpdate = (id) => {
    dispatch(updateStudent({ id, name: editName, mark: editMark }));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Student List</h2>
        {students.length > 0 ? (
          <>
            <ul>
              {students.map((student) => (
                <li key={student.id} className="mb-2">
                  <div className="border-b border-gray-200 py-2 flex justify-between items-center">
                    {editingId === student.id ? (
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="border border-gray-300 px-2 py-1 rounded-lg"
                        />
                        <input
                          type="number"
                          value={editMark}
                          onChange={(e) => setEditMark(Number(e.target.value))}
                          className="border border-gray-300 px-2 py-1 rounded-lg"
                        />
                        <button
                          onClick={() => saveUpdate(student.id)}
                          className="bg-green-500 text-white px-2 py-1 rounded-lg"
                        >
                        "📁"
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="bg-gray-500 text-white px-2 py-1 rounded-lg"
                        >
                          ❌
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center w-full">
                        <span className="font-bold">{student.name}</span>: {student.mark} marks
                        <div className="flex space-x-2">
                          <button
                            onClick={() => startEditing(student)}
                            className="bg-white text-white px-2 py-1 rounded-lg"
                          >
                            ✏️
                          </button>
                          <button
                            onClick={() => deleteHandler(student.id)}
                            className="bg-white text-white px-2 py-1 rounded-lg"
                          >
                            ❌
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={deleteAllHandler}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
              disabled={students.length === 0}
            >
              Delete All
            </button>
          </>
        ) : (
          <p className="text-center">No students found.</p>
        )}
      </div>
    </div>
  );
}

export default Display;
