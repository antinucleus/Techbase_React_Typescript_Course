import { useState } from 'react';
import './App.css';
import { User } from './interfaces';


function App() {
  const [user, setUser] = useState<User | null>(null)

  const fetchUser = () => setUser({
    name: "Faruk",
    age: 23,
    country: "Turkey",
    address: {
      street: "Istanbul",
      number: 1453,
      zip: "1071"
    },
    admin: true
  })
  return (
    <>
      <button onClick={fetchUser} >Fetch user on click</button>
      {user && <p>{`Welcome ${user.name}`}</p>}
    </>
  );
}

export default App;
