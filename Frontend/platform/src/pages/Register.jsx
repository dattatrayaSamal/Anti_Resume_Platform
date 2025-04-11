// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function Register() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'candidate' });
//   const navigate = useNavigate();

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/auth/register', formData);
//       navigate('/login');
//     } catch (err) {
//       alert(err.response.data.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-16 p-8 bg-white shadow-lg rounded">
//       <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
//       <input name="name" onChange={handleChange} placeholder="Name" className="block w-full mt-2 p-3 border rounded" />
//       <input name="email" onChange={handleChange} placeholder="Email" className="block w-full mt-4 p-3 border rounded" />
//       <input name="password" onChange={handleChange} placeholder="Password" type="password" className="block w-full mt-4 p-3 border rounded" />
//       <select name="role" onChange={handleChange} className="block w-full mt-4 p-3 border rounded">
//         <option value="candidate">Candidate</option>
//         <option value="employer">Employer</option>
//       </select>
//       <button type="submit" className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
//     </form>
//   );
// }