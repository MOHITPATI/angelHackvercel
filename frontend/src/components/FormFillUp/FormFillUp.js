// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import '../../assets/styles/FormFillUp.css';

// const FormFillUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     address: '',
//     assets: '',
//     fieldOfInterest: '',
//     typeOfUser: 'entrepreneur',
//     rating: 5,
//     profit: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to submit data to the backend
//     console.log('Form Data:', formData);

//     // Post data to the backend
//     fetch('https://your-backend-api.com/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//       navigate('/dashboard');
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   };

//   return (
//     <div className="form-container">
//       <h2>Fill Up Your Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input type="text" name="address" value={formData.address} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Assets</label>
//           <input type="text" name="assets" value={formData.assets} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Field of Interest</label>
//           <input type="text" name="fieldOfInterest" value={formData.fieldOfInterest} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Type of User</label>
//           <select name="typeOfUser" value={formData.typeOfUser} onChange={handleChange} required>
//             <option value="entrepreneur">Entrepreneur</option>
//             <option value="mentor">Mentor</option>
//             <option value="investor">Investor</option>
//           </select>
//         </div>
//         {formData.typeOfUser === 'mentor' && (
//           <div className="form-group">
//             <label>Rating</label>
//             <input type="number" name="rating" value={formData.rating} readOnly />
//           </div>
//         )}
//         {formData.typeOfUser === 'investor' && (
//           <div className="form-group">
//             <label>Profit on Past Investments</label>
//             <input type="text" name="profit" value={formData.profit} onChange={handleChange} required />
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormFillUp;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import '../../assets/styles/FormFillUp.css';

// const FormFillUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     address: '',
//     assets: '',
//     fieldOfInterest: '',
//     typeOfUser: 'entrepreneur',
//     rating: 5,
//     profit: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to submit data to the backend
//     console.log('Form Data:', formData);

//     // Post data to the backend
//     fetch('http://localhost:5000/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//       navigate('/dashboard');
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   };

//   return (
//     <div className="form-container">
//       <h2>Fill Up Your Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input type="text" name="address" value={formData.address} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Assets</label>
//           <input type="text" name="assets" value={formData.assets} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Field of Interest</label>
//           <input type="text" name="fieldOfInterest" value={formData.fieldOfInterest} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Type of User</label>
//           <select name="typeOfUser" value={formData.typeOfUser} onChange={handleChange} required>
//             <option value="entrepreneur">Entrepreneur</option>
//             <option value="mentor">Mentor</option>
//             <option value="investor">Investor</option>
//           </select>
//         </div>
//         {formData.typeOfUser === 'mentor' && (
//           <div className="form-group">
//             <label>Rating</label>
//             <input type="number" name="rating" value={formData.rating} readOnly />
//           </div>
//         )}
//         {formData.typeOfUser === 'investor' && (
//           <div className="form-group">
//             <label>Profit on Past Investments</label>
//             <input type="text" name="profit" value={formData.profit} onChange={handleChange} required />
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormFillUp;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import '../../assets/styles/FormFillUp.css';

// const FormFillUp = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     name: '',
//     phone: '',
//     address: '',
//     assets: '',
//     field_of_interest: '',
//     type: 'Entrepreneur', // default type
//     profit_on_past_investments: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/users/register', formData);
//       alert('User registered successfully');
//     } catch (error) {
//       console.error(error);
//       alert('Error registering user');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//       <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//       <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
//       <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
//       <input type="text" name="assets" placeholder="Assets" value={formData.assets} onChange={handleChange} required />
//       <input type="text" name="field_of_interest" placeholder="Field of Interest" value={formData.field_of_interest} onChange={handleChange} required />
      
//       <select name="type" value={formData.type} onChange={handleChange} required>
//         <option value="Entrepreneur">Entrepreneur</option>
//         <option value="Mentor">Mentor</option>
//         <option value="Investor">Investor</option>
//       </select>

//       {formData.type === 'Investor' && (
//         <input type="text" name="profit_on_past_investments" placeholder="Profit on Past Investments" value={formData.profit_on_past_investments} onChange={handleChange} required />
//       )}
      
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormFillUp;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import '../../assets/styles/FormFillUp.css';

// const FormFillUp = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const email = location.state?.email || '';

//   const [formData, setFormData] = useState({
//     email, // Autofill email from location state
//     name: '',
//     phone: '',
//     address: '',
//     assets: '',
//     fieldOfInterest: '',
//     typeOfUser: 'entrepreneur',
//     rating: 5,
//     profit: ''
//   });


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to submit data to the backend
//     console.log('Form Data:', formData);

//     // Post data to the backend
//     fetch('http://localhost:5000/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//       navigate('/dashboard');
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   };

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({
//   //     ...formData,
//   //     [name]: value
//   //   });
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   // Logic to submit data to the backend
//   //   console.log('Form Data:', formData);

//   //   // Post data to the backend
//   //   fetch('http://localhost:5000/api/users', {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json'
//   //     },
//   //     body: JSON.stringify(formData)
//   //   })
//   //   .then(response => response.json())
//   //   .then(data => {
//   //     console.log('Success:', data);
//   //     navigate('/dashboard');
//   //   })
//   //   .catch((error) => {
//   //     console.error('Error:', error);
//   //   });
//   // };

//   return (
//     <div className="form-container">
//       <h2>Fill Up Your Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} readOnly />
//         </div>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input type="text" name="address" value={formData.address} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Assets</label>
//           <input type="text" name="assets" value={formData.assets} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Field of Interest</label>
//           <input type="text" name="fieldOfInterest" value={formData.fieldOfInterest} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Type of User</label>
//           <select name="typeOfUser" value={formData.typeOfUser} onChange={handleChange} required>
//             <option value="entrepreneur">Entrepreneur</option>
//             <option value="mentor">Mentor</option>
//             <option value="investor">Investor</option>
//           </select>
//         </div>
//         {formData.typeOfUser === 'mentor' && (
//           <div className="form-group">
//             <label>Rating</label>
//             <input type="number" name="rating" value={formData.rating} readOnly />
//           </div>
//         )}
//         {formData.typeOfUser === 'investor' && (
//           <div className="form-group">
//             <label>Profit on Past Investments</label>
//             <input type="text" name="profit" value={formData.profit} onChange={handleChange} required />
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormFillUp;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import '../../assets/styles/FormFillUp.css';

// const FormFillUp = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const email = location.state?.email || '';

//   const [formData, setFormData] = useState({
//     email,
//     name: '',
//     phone: '',
//     address: '',
//     assets: '',
//     field_of_interest: '',
//     type: 'Entrepreneur',
//     rating: 5,
//     profit_on_past_investments: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/users/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         const data = await response.json();
//         // console.log('Success:', data);

//         navigate('/');
//         alert('Successful SignUp',data);
//       } else {
//         console.error('Error:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Fill Up Your Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} readOnly />
//         </div>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input type="text" name="address" value={formData.address} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Assets</label>
//           <input type="text" name="assets" value={formData.assets} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Field of Interest</label>
//           <input type="text" name="field_of_interest" value={formData.field_of_interest} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Type of User</label>
//           <select name="type" value={formData.type} onChange={handleChange} required>
//             <option value="Entrepreneur">Entrepreneur</option>
//             <option value="Mentor">Mentor</option>
//             <option value="Investor">Investor</option>
//           </select>
//         </div>
//         {formData.type === 'Mentor' && (
//           <div className="form-group">
//             <label>Rating</label>
//             <input type="number" name="rating" value={formData.rating} readOnly />
//           </div>
//         )}
//         {formData.type === 'Investor' && (
//           <div className="form-group">
//             <label>Profit on Past Investments</label>
//             <input type="text" name="profit_on_past_investments" value={formData.profit_on_past_investments} onChange={handleChange} required />
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormFillUp;
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import '../../assets/styles/FormFillUp.css';

// const FormFillUp = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const email = location.state?.email || '';

//   const [formData, setFormData] = useState({
//     email,
//     name: '',
//     phone: '',
//     address: '',
//     assets: '',
//     field_of_interest: '',
//     type: 'Entrepreneur',
//     rating: 5,
//     profit_on_past_investments: ''
//   });

//   const [fieldOfInterests, setFieldOfInterests] = useState(['Others']);
//   const [isOtherSelected, setIsOtherSelected] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleFieldOfInterestChange = (e) => {
//     const { value } = e.target;
//     if (value === 'Others') {
//       setIsOtherSelected(true);
//       setFormData({
//         ...formData,
//         field_of_interest: ''
//       });
//     } else {
//       setIsOtherSelected(false);
//       setFormData({
//         ...formData,
//         field_of_interest: value
//       });
//     }
//   };

//   const handleNewFieldOfInterestChange = (e) => {
//     const { value } = e.target;
//     setFormData({
//       ...formData,
//       field_of_interest: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Add new field of interest if 'Others' was selected
//     if (isOtherSelected && formData.field_of_interest) {
//       if (!fieldOfInterests.includes(formData.field_of_interest)) {
//         setFieldOfInterests([...fieldOfInterests, formData.field_of_interest]);
//       }
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/users/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         const data = await response.json();
//         navigate('/');
//         alert('Successful SignUp', data);
//       } else {
//         console.error('Error:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Fill Up Your Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} readOnly />
//         </div>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input type="text" name="address" value={formData.address} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Assets</label>
//           <input type="text" name="assets" value={formData.assets} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Field of Interest</label>
//           <select name="field_of_interest" value={formData.field_of_interest} onChange={handleFieldOfInterestChange} required>
//             {fieldOfInterests.map((interest, index) => (
//               <option key={index} value={interest}>{interest}</option>
//             ))}
//           </select>
//           {isOtherSelected && (
//             <input
//               type="text"
//               name="field_of_interest_other"
//               value={formData.field_of_interest}
//               onChange={handleNewFieldOfInterestChange}
//               placeholder="Enter your field of interest"
//               required
//             />
//           )}
//         </div>
//         <div className="form-group">
//           <label>Type of User</label>
//           <select name="type" value={formData.type} onChange={handleChange} required>
//             <option value="Entrepreneur">Entrepreneur</option>
//             <option value="Mentor">Mentor</option>
//             <option value="Investor">Investor</option>
//           </select>
//         </div>
//         {formData.type === 'Mentor' && (
//           <div className="form-group">
//             <label>Rating</label>
//             <input type="number" name="rating" value={formData.rating} readOnly />
//           </div>
//         )}
//         {formData.type === 'Investor' && (
//           <div className="form-group">
//             <label>Profit on Past Investments</label>
//             <input type="text" name="profit_on_past_investments" value={formData.profit_on_past_investments} onChange={handleChange} required />
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormFillUp;
// revert 1 june
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import '../../assets/styles/FormFillUp.css';

// const FormFillUp = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const email = location.state?.email || '';

//   const [formData, setFormData] = useState({
//     email,
//     name: '',
//     phone: '',
//     address: '',
//     assets: '',
//     field_of_interest: '',
//     type: 'Entrepreneur',
//     rating: 5,
//     profit_on_past_investments: ''
//   });

//   const [fieldOfInterests, setFieldOfInterests] = useState(['Others']);
//   const [isOtherSelected, setIsOtherSelected] = useState(false);

//   // useEffect(() => {
//   //   // Load the existing field of interest options from localStorage or set default options
//   //   const savedInterests = JSON.parse(localStorage.getItem('fieldOfInterests')) || ['Others'];
//   //   setFieldOfInterests(savedInterests);
//   // }, []);

//   // FormFillUp.js
// useEffect(() => {
//   const fetchFieldOfInterests = async () => {
//       try {
//           const response = await fetch('http://localhost:5000/api/fieldOfInterests');
//           if (response.ok) {
//               const interests = await response.json();
//               setFieldOfInterests(interests);
//           } else {
//               console.error('Error fetching field of interests:', response.statusText);
//           }
//       } catch (error) {
//           console.error('Error:', error);
//       }
//   };

//   fetchFieldOfInterests();
// }, []);


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleFieldOfInterestChange = (e) => {
//     const { value } = e.target;
//     if (value === 'Others') {
//       setIsOtherSelected(true);
//       setFormData({
//         ...formData,
//         field_of_interest: ''
//       });
//     } else {
//       setIsOtherSelected(false);
//       setFormData({
//         ...formData,
//         field_of_interest: value
//       });
//     }
//   };

//   const handleNewFieldOfInterestChange = (e) => {
//     const { value } = e.target;
//     setFormData({
//       ...formData,
//       field_of_interest: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Add new field of interest if 'Others' was selected and a new value is provided
//     if (isOtherSelected && formData.field_of_interest) {
//       const normalizedField = formData.field_of_interest.trim().toLowerCase();
//       if (!fieldOfInterests.some(interest => interest.trim().toLowerCase() === normalizedField)) {
//         const updatedInterests = [...fieldOfInterests, formData.field_of_interest];
//         setFieldOfInterests(updatedInterests);
//         localStorage.setItem('fieldOfInterests', JSON.stringify(updatedInterests));
//       }
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/users/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         const data = await response.json();
//         navigate('/');
//         alert('Successful SignUp', data);
//       } else {
//         console.error('Error:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Fill Up Your Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} readOnly />
//         </div>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input type="text" name="address" value={formData.address} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Assets</label>
//           <input type="text" name="assets" value={formData.assets} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Field of Interest</label>
//           {isOtherSelected ? (
//             <input
//               type="text"
//               name="field_of_interest"
//               value={formData.field_of_interest}
//               onChange={handleNewFieldOfInterestChange}
//               placeholder="Enter your field of interest"
//               required
//             />
//           ) : (
//             <select
//               name="field_of_interest"
//               value={formData.field_of_interest}
//               onChange={handleFieldOfInterestChange}
//               required
//             >
//               <option value="" disabled>Select a field of interest</option>
//               {fieldOfInterests.map((interest, index) => (
//                 <option key={index} value={interest}>{interest}</option>
//               ))}
//             </select>
//           )}
//         </div>
//         <div className="form-group">
//           <label>Type of User</label>
//           <select name="type" value={formData.type} onChange={handleChange} required>
//             <option value="Entrepreneur">Entrepreneur</option>
//             <option value="Mentor">Mentor</option>
//             <option value="Investor">Investor</option>
//           </select>
//         </div>
//         {formData.type === 'Mentor' && (
//           <div className="form-group">
//             <label>Rating</label>
//             <input type="number" name="rating" value={formData.rating} readOnly />
//           </div>
//         )}
//         {formData.type === 'Investor' && (
//           <div className="form-group">
//             <label>Profit on Past Investments</label>
//             <input type="text" name="profit_on_past_investments" value={formData.profit_on_past_investments} onChange={handleChange} required />
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormFillUp;


import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../../assets/styles/FormFillUp.css';

const FormFillUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';

  const [formData, setFormData] = useState({
    email,
    name: '',
    phone: '',
    address: '',
    assets: '',
    field_of_interest: '',
    type: 'Entrepreneur',
    rating: 5,
    profit_on_past_investments: ''
  });

  const [fieldOfInterests, setFieldOfInterests] = useState(['Others']);
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  useEffect(() => {
    const fetchFieldOfInterests = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/users/fieldOfInterests');
            if (response.ok) {
                const interests = await response.json();
                // setFieldOfInterests(interests.map(interest => interest.value));
                setFieldOfInterests([...interests.map(interest => interest.value), 'Others']);
                console.log(interests);
            } else {
                console.error('Error fetching field of interests:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    fetchFieldOfInterests();
}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFieldOfInterestChange = (e) => {
    const { value } = e.target;
    if (value === 'Others') {
      setIsOtherSelected(true);
      setFormData({
        ...formData,
        field_of_interest: ''
      });
    } else {
      setIsOtherSelected(false);
      setFormData({
        ...formData,
        field_of_interest: value
      });
    }
  };

  const handleNewFieldOfInterestChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      field_of_interest: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add new field of interest if 'Others' was selected and a new value is provided
    if (isOtherSelected && formData.field_of_interest) {
        const normalizedField = formData.field_of_interest.trim().toLowerCase();
        if (!fieldOfInterests.some(interest => interest.trim().toLowerCase() === normalizedField)) {
            const updatedInterests = [...fieldOfInterests, formData.field_of_interest];
            setFieldOfInterests(updatedInterests);
            // Save to the database
            try {
                const response = await fetch('http://localhost:5000/api/users/fieldOfInterests/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ value: formData.field_of_interest })
                });
                
                if (!response.ok) {
                    console.error('Error adding field of interest:', response.statusText);
                }else{
                  setFieldOfInterests([...fieldOfInterests, formData.field_of_interest]);
                }
                
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        navigate('/');
        alert('Successful SignUp', data);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Fill Up Your Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} readOnly />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Assets</label>
          <input type="text" name="assets" value={formData.assets} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Field of Interest</label>
          {isOtherSelected ? (
            <input
              type="text"
              name="field_of_interest"
              value={formData.field_of_interest}
              onChange={handleNewFieldOfInterestChange}
              placeholder="Enter your field of interest"
              required
            />
          ) : (
            <select
              name="field_of_interest"
              value={formData.field_of_interest}
              onChange={handleFieldOfInterestChange}
              required
            >
              <option value="" disabled>Enter your choice .... </option>
              {fieldOfInterests.map((interest, index) => (
                <option key={index} value={interest}>{interest}</option>
              ))}
            </select>
          )}
        </div>
        <div className="form-group">
          <label>Type of User</label>
          <select name="type" value={formData.type} onChange={handleChange} required>
            <option value="Entrepreneur">Entrepreneur</option>
            <option value="Mentor">Mentor</option>
            <option value="Investor">Investor</option>
          </select>
        </div>
        {formData.type === 'Mentor' && (
          <div className="form-group">
            <label>Rating</label>
            <input type="number" name="rating" value={formData.rating} readOnly />
          </div>
        )}
        {formData.type === 'Investor' && (
          <div className="form-group">
            <label>Profit on Past Investments</label>
            <input type="text" name="profit_on_past_investments" value={formData.profit_on_past_investments} onChange={handleChange} required />
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormFillUp;



