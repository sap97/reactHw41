import logo from './logo.svg';
import './App.css';
import React from 'react';
import CreateUserForm from './pages/CreateUserForm';


const title = 'Create user'
  const App = () =>{
    const handleSubmit = async (formData) => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        if (!response.ok) {
          throw new Error('Failed to create user');
        }
        alert('User created');
      } catch{
        
      }
    };


    return (
      <div>
    <h2>{title}</h2>
        <CreateUserForm onSubmit={handleSubmit} />
      </div>
    );
  }



export default App;
