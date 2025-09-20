import { useState } from "react";
import "./App.css";

function Cal() {
  const [average, setAverage] = useState(0);
  const [grade, setGrade] = useState("");

  function Compute() {
    // collect all input values by id
    const s1 = Number(document.getElementById("s1").value);
    const s2 = Number(document.getElementById("s2").value);
    const s3 = Number(document.getElementById("s3").value);
    const s4 = Number(document.getElementById("s4").value);
    const s5 = Number(document.getElementById("s5").value);
    const s6 = Number(document.getElementById("s6").value);
    const s7 = Number(document.getElementById("s7").value);
    const s8 = Number(document.getElementById("s8").value);
    const s9 = Number(document.getElementById("s9").value);
    const s10 = Number(document.getElementById("s10").value);

    // compute average
    const total = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 ;
    let compute = total / 10
    setAverage(compute);

    // assign grade by switch
    let result = "";
    switch (true) {
      case total >= 90:
        result = "A";
        break;
      case total >= 85:
        result = "B";
        break;
      case total >= 80:
        result = "C";
        break;
      case total >= 75:
        result = "D";
        break;
      default:
        result = "";
    }
    setGrade(result);
  }

  return (
    <>
      <main className="main">
        <div className="subjectGroup">
          <h1 className="subjectTitle">Subject</h1>
          <input type="text" placeholder="Math" />
          <input type="text" placeholder="Science" />
          <input type="text" placeholder="English" />
          <input type="text" placeholder="Filipino" />
          <input type="text" placeholder="E.S.P" />
          <input type="text" placeholder="E.P.P / I.C.T" />
          <input type="text" placeholder="T.L.E" />
          <input type="text" placeholder="A.P / S.S" />
          <input type="text" placeholder="M.A.PE.H" />
          <input type="text" placeholder="Values Education" />
        </div>

        <div className="subjectGrade">
          <h1 className="subjectTitle">Grade</h1>
          <input type="number" placeholder="100" id="s1" />
          <input type="number" placeholder="100" id="s2" />
          <input type="number" placeholder="100" id="s3" />
          <input type="number" placeholder="100" id="s4" />
          <input type="number" placeholder="100" id="s5" />
          <input type="number" placeholder="100" id="s6" />
          <input type="number" placeholder="100" id="s7" />
          <input type="number" placeholder="100" id="s8" />
          <input type="number" placeholder="100" id="s9" />
          <input type="number" placeholder="100" id="s10" />
        </div>
      </main>
      <section className="Group">
      <button onClick={Compute}>Compute</button>
      <div className="result">
        Average: {compute} <br />
        Grade: {grade}
      </div>
      </section>
    </>
  );
}

export default Cal;
