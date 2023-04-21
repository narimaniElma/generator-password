import { useState, useEffect } from "react";
import "./styles.scss";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLettters,
  specialCharacters,
} from "./characters";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(7);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [num, setNum] = useState(false);
  const [symbols, setSymbols] = useState(true);

  // pas = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é'
  // passwordLength = 7 -> generateRandomIndex => charAt[index]

  const handleGeneratePassword = () => {
    // if (!uppercase && !lowercase && !num && !symbols) {
    //   alert('You must select at least one option');
    // }
    
    let characterList = "";

    if (uppercase) {
      characterList += upperCaseLetters;
    }
    if (lowercase) {
      characterList += lowerCaseLettters;
    }
    if (num) {
      characterList += numbers;
    }
    if (symbols) {
      characterList += specialCharacters;
    }
console.log('click')
     setPassword(passwordCreator(characterList))
  };

  const passwordCreator = (characterList) => {
    let password = '';
    const characterLength = characterList.length;
    for (let i = 0; i++; i < passwordLength) {
      const ind = generateRandomIndex(characterLength)
      password += characterList.charAt(ind);
    }

    return password;
  }

  const generateRandomIndex = (limit) => {
    return Math.round(Math.random() * limit);
  };

  useEffect(() => {
    handleGeneratePassword();
  }, []); 

  return (
    <div className="container">
      <div className="generator">
        <h2 className="generator__header">Password Generator</h2>

        <div className="generator__password">
          { password }
          <button className="generator__passwordGenerateBtn">
            copyBtnText
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="password-length">Password length</label>
          <input
            name="password-length"
            id="password-length"
            type="number"
            max="20"
            min="7"
            defaultValue={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="uppercase-letters">Include uppercase letters</label>
          <input
            id="uppercase-letters"
            name="uppercase-letters"
            type="checkbox"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lowercase-letters">Include lowercase letters</label>
          <input
            id="lowercase-letters"
            name="lowercase-letters"
            type="checkbox"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="include-numbers">Include Numbers</label>
          <input id="include-numbers" name="include-numbers" type="checkbox" checked={num}
            onChange={(e) => setNum(e.target.checked)} />
        </div>

        <div className="form-group">
          <label htmlFor="include-symbols">Include Symbols</label>
          <input id="include-symbols" name="include-symbols" type="checkbox" checked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}/>
        </div>

        <button className="generator__btn" onClick={handleGeneratePassword}>Generate Password</button>
      </div>
    </div>
  );
}

export default App;
