import "./styles.css";
import React, { useState } from "react";
import Field from "./Field";
import Languages from "./Language";
import Translate from "./Translate";

export default function App() {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");

  return (
    <div>
      <h1 className="title">App 1 - Lang converter</h1>
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
