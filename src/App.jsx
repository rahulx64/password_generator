import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [includeChars, setIncludeChars] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);

  const generatePassword = () => {
    const length = 12;
    let charset = "";
    if (includeChars) {
      charset += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
      charset += "0123456789";
    }
    if (charset === "") {
      alert("Please select at least one option.");
      return;
    }
    let newPassword = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      newPassword += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(
      () => {
        alert("Password copied to clipboard");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
        <div className="mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your secure password will appear here"
          />
        </div>
        <div className="flex justify-center mb-4">
          <label className="mr-2">
            <input
              type="checkbox"
              checked={includeChars}
              onChange={() => setIncludeChars(!includeChars)}
            />
            Include Characters
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include Numbers
          </label>
        </div>
        <button
          onClick={generatePassword}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Generate Password
        </button>
        <button
          onClick={copyToClipboard}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
}

export default App;
