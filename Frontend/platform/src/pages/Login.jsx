// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('role', res.data.role);
//       if (res.data.role === 'candidate') navigate('/candidate');
//       else navigate('/employer');
//     } catch (err) {
//       alert(err.response.data.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-16 p-8 bg-white shadow-lg rounded">
//       <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block w-full mt-2 p-3 border rounded" />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="block w-full mt-4 p-3 border rounded" />
//       <button type="submit" className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
//     </form>
//   );
// }