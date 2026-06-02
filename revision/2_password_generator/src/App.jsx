import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const paswordRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) characters += "0123456789";
    if (symbolAllowed) characters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 1; i <= length; i++) {
      let ch = Math.floor(Math.random() * characters.length);
      pass += characters[ch];
    }
    setPassword(pass);
  }, [length, numberAllowed, symbolAllowed]);

  const copyToClipBoard = useCallback(() => {
    paswordRef.current?.select();
    paswordRef.current?.setSelectionRange(0, password.length);
    console.log("paswordRef", paswordRef.current?.focus());
    window.navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, symbolAllowed, generatePassword]);

  return (
    <>
      <div
        className="text-white container mx-auto p-4 mt-20 flex justify-center items-center flex-col space-y-2
      bg-gray-900  max-w-2xl
      "
      >
        <h1 className="text-4xl text-center">Password Generator</h1>

        <div className="mt-4 p-6 rounded w-full max-w-2xl flex flex-col space-y-4">
          <div className="flex">
            <input
              type="text"
              readOnly
              value={password}
              placeholder="Your Password"
              className="bg-gray-800 text-orange-400 p-2 text-2xl rounded w-full text-center outline-none"
              ref={paswordRef}
            />
            {/* copy btn */}
            <button
              className={`p-2 rounded w-fit cursor-pointer text-white transition-all duration-300 ${
                copied
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={copyToClipBoard}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            {/* after copy the password show ✅ on copy btn */}
            {/* show copied btn for 2 seconds after copy the password */}
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <input
                type="range"
                min="6"
                max="30"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
              />
              <label className="text-orange-400">Length {length}</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="numbers"
                checked={numberAllowed}
                onChange={() => setNumberAllowed(!numberAllowed)}
              />
              <label htmlFor="numbers" className="text-orange-400">
                Include Numbers
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="symbols"
                checked={symbolAllowed}
                onChange={() => setSymbolAllowed(!symbolAllowed)}
              />
              <label htmlFor="symbols" className="text-orange-400">
                Include Symbols
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
