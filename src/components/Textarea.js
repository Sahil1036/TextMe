import { useState } from "react";
export default function (props) {
  const [Text, setText] = useState("");
  const Layout={
    backgroundColor: props.Theme === "dark"?"rgb(43 48 53)":"white",
    color: "#7b7b7b",
    fontWight: "bold",
    padding: "10px",
    borderRadius: "15px",
    margin: "10px",
  };

  function change(e) {
    setText(e.target.value);
  }

  function Uppercase() {
    setText(Text.toUpperCase());
    props.showMess("Text is Converted to uppercase!");
  }
  function Lowercase() {
    setText(Text.toLowerCase());
    props.showMess("Text is Converted to lowercase!");
  }
  function Copy() {
    navigator.clipboard.writeText(Text);
    props.showMess("Text is copied to clipboard!");
  }
  function Cut() {
    navigator.clipboard.writeText(Text);
    setText("");
    props.showMess("Text is cuted to clipboard!");
  }
  function RemoveSpace() {
    setText(Text.replace(/\s+/g, " "));
    props.showMess("Removed extra spaces!");
  }
  function Clear() {
    setText("");
    props.showMess("Text is Cleared!");
  }

  return (
    <>
      <div className="Usertext" style={center}>
        <h1>Enter Your Text Below To Preview :</h1>
      </div>
      <div className="Usertext" style={center}>
        <textarea
          style={Layout}
          name="Text"
          id="Usertext"
          cols="100"
          rows="8"
          value={Text}
          onChange={change}
        ></textarea>
      </div>
      <div className="Usertext" style={center}>
        <button
          type="button"
          className="btn btn-primary mx-2 mb-1"
          disabled={Text.length === 0}
          onClick={Uppercase}
        >
          Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 mb-1"
          disabled={Text.length === 0}
          onClick={Lowercase}
        >
          Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 mb-1"
          disabled={Text.length === 0}
          onClick={Copy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 mb-1"
          disabled={Text.length === 0}
          onClick={Cut}
        >
          Cut Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 mb-1"
          disabled={Text.length === 0}
          onClick={RemoveSpace}
        >
          Remove Spaces
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 mb-1"
          disabled={Text.length === 0}
          onClick={Clear}
        >
          Clear Text
        </button>
      </div>
      <div className="Usertext" style={center}>
        <div style={{ width: "77%" }}>
          <h1>Text Live Preview :</h1>
          <pre style={{ border: "2px solid black" }}>{Text}</pre>
          <p>
            <strong>{Text.split(/\s/).filter((e)=>{
              return e.length>0;
            }).length}</strong> Words and{" "}
            <strong>{Text.length}</strong> Characters{" "}
          </p>
        </div>
      </div>
    </>
  );
}

const center = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexWrap: "wrap",
  fontSize: "25px",
};
