import React, { useState, ChangeEvent } from "react";

const State = () => {

const [txt, setTxt] = useState<string | null>(null)
const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value)
}

  return <div><p>
    O texto é {txt}</p>
    <input type="text" onChange={handleChange} />
    </div>;
};

export default State;
