import { useState } from "react";


export default  function AddClass () {
  const [name, setName] = useState("");
  const [teachername, setTname] = useState("");
  const [studentid, setsid] = useState("");
  const [studentname, setsname] = useState("");
  const [courseName, setCN] = useState("");
  const [assignNo, setassignNo] = useState("");
  const [description, setdescription] = useState("");
  const [quiz, setqid] = useState("");
 
  const [isPending, setIspending] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const class2 = { name, teachername, studentid,studentname,courseName,assignNo,description,quiz };

    setIspending(true);

    fetch("http://localhost:8000/addclass/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(class2),
    }).then(() => {
      console.log("New Class added");
      setIspending(false);
      console.log("successful");
    });
  };

  return (
    <div >
      <h2>Add a New Class</h2>
      <form onSubmit={handleSubmit}>
        <label>Class Name:</label>
        <br/>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <br/>
        <label>Teacher Name:</label>
        <br/>
        <input
          type="text"
          required
          value={teachername}
          onChange={(e) => setTname(e.target.value)}
        />
 <br/>
        <label>StudentID:</label>
        <br/>        
        <input
          type="text"
          required
          value={studentid}
          onChange={(e) => setsid(e.target.value)}
        />
         <br/>
        <label>Student name:</label>
        <br/>
        <input
          type="text"
          required
          value={studentname}
          onChange={(e) => setsname(e.target.value)}
        />

<br/>
<label>Course Name:</label>
<br/>
        <input
          type="text"
          required
          value={courseName}
          onChange={(e) => setCN(e.target.value)}
        />
 <br/>
<label>Assignment No:</label>
<br/>
        <input
          type="text"
          required
          value={assignNo}
          onChange={(e) => setassignNo(e.target.value)}
        />
 <br/>
<label>Description of Assignment:</label>
<br/>
        <input
          type="text"
          required
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
 <br/>
<label>quiz:</label>
<br/>
        <input
          type="text"
          required
          value={quiz}
          onChange={(e) => setqid(e.target.value)}
        />


        
        {!isPending && <input type="submit" value="Add class"/>}
        {isPending && <button disabled>Adding...</button>}
      </form>
    </div>
  );
};


