import React, { useState ,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/notes")
    .then(res => res.json())
    .then(data => setNotes(data))
  },[])

//   return(
//     <div>
//       <h1>{notes.title}</h1>
//       <p>{notes.content}</p>
//     </div>
//   );
// }

  // function deleteNote(id) {
  //   setNotes(prevNotes => {
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  return (
    <div>
      <Header />
      {notes.map((noteItem, index) => {
        return (
          <Note
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
