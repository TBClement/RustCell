import { useState } from 'react';

export default function Header({ greetFn }) {
  const [name, setName] = useState("");
  return (
    <div className='header'>
      <div className='header-section'>
        <h1>RustCell</h1>
      </div>

      <div className='header-section'>
        <form
          className="row"
          onSubmit={(e) => {
            e.preventDefault();
            greetFn(name);
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet</button>
        </form>
      </div>
    </div>
  )
}