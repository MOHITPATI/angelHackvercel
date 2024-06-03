// import React from 'react';
// import '../../assets/styles/List.css';

// const List = ({userData}) => {
//     const { userData: user, type } = userData;
//   return (
//     <div className="list-buttons">
//       <button disabled={type === 'Entrepreneur'}>Entrepreneur</button>
//       <button disabled={type === 'Mentor'}>Mentor</button>
//       <button disabled={type === 'Investor'}>Investor</button>
//     </div>
//   );
// };

// export default List;

// import React, { useState } from 'react';
// import '../../assets/styles/List.css';

// const List = ({ userData }) => {
//   const { userData: user, type } = userData;
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   const handleButtonClick = async (userType) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/users/getUsersByInterest', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ userType, field_of_interest: user.field_of_interest }),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setData(result);
//       } else {
//         setError('Error fetching data');
//         console.error('Error fetching data:', response.statusText);
//       }
//     } catch (error) {
//       setError('Error fetching data');
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="list-container">
//       <div className="list-buttons">
//         <button
//           disabled={type === 'Entrepreneur'}
//           onClick={() => handleButtonClick('Entrepreneur')}
//         >
//           Entrepreneur
//         </button>
//         <button
//           disabled={type === 'Mentor'}
//           onClick={() => handleButtonClick('Mentor')}
//         >
//           Mentor
//         </button>
//         <button
//           disabled={type === 'Investor'}
//           onClick={() => handleButtonClick('Investor')}
//         >
//           Investor
//         </button>
//       </div>
//       {error && <p className="error-message">{error}</p>}
//       {data.length > 0 && (
//         <table className="data-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Phone</th>
//               <th>Email</th>
//               <th>Address</th>
//               <th>Assets</th>
//               <th>Field of Interest</th>
//               {type === 'Investor' && <th>Profit on Past Investments</th>}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.name}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.email_id}</td>
//                 <td>{user.address}</td>
//                 <td>{user.assets}</td>
//                 <td>{user.field_of_interest}</td>
//                 {type === 'Investor' && <td>{user.profit_on_past_investments}</td>}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default List;

// import React, { useState } from 'react';
// import '../../assets/styles/List.css';

// const List = ({ userData }) => {
//   const { userData: user, type } = userData;
//   const [data, setData] = useState([]);
//   const [selectedType, setSelectedType] = useState(null);

//   const fetchData = async (type) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/users/getDataByTypeAndInterest', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ type, field_of_interest: user.field_of_interest }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setData(data);
//       } else {
//         console.error('Error fetching data:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleButtonClick = (type) => {
//     setSelectedType(type);
//     fetchData(type);
//   };

//   return (
//     <div className="list-container">
//       <div className="list-buttons">
//         <button disabled={type === 'Entrepreneur'} onClick={() => handleButtonClick('Entrepreneur')}>Entrepreneur</button>
//         <button disabled={type === 'Mentor'} onClick={() => handleButtonClick('Mentor')}>Mentor</button>
//         <button disabled={type === 'Investor'} onClick={() => handleButtonClick('Investor')}>Investor</button>
//       </div>
//       {data.length > 0 && (
//         <ol className="data-list">
//           {data.map((item) => (
//             <li key={item._id}>
//               <p><strong>Name:</strong> {item.name}</p>
//               <p><strong>Email:</strong> {item.email_id}</p>
//               <p><strong>Field of Interest:</strong> {item.field_of_interest}</p>
//               {selectedType === 'Mentor' && <p><strong>Rating:</strong> {item.rating}</p>}
//               {selectedType === 'Investor' && <p><strong>Profit on Past Investments:</strong> {item.profit_on_past_investments}</p>}
//             </li>
//           ))}
//         </ol>
//       )}
//     </div>
//   );
// };

// export default List;

// import React, { useState } from 'react';
// import '../../assets/styles/List.css';

// const List = ({ userData }) => {
//   const { userData: user, type } = userData;
//   const [data, setData] = useState([]);
//   const [selectedType, setSelectedType] = useState(null);

//   const fetchData = async (type) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/users/getDataByTypeAndInterest', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ type, field_of_interest: user.field_of_interest }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setData(data);
//         console.log(data);
//       } else {
//         console.error('Error fetching data:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleButtonClick = (type) => {
//     setSelectedType(type);
//     fetchData(type);
//   };

//   return (
//     <div className="list-container">
//       <div className="list-buttons">
//         <button disabled={type === 'Entrepreneur'} onClick={() => handleButtonClick('Entrepreneur')}>Entrepreneur</button>
//         <button disabled={type === 'Mentor'} onClick={() => handleButtonClick('Mentor')}>Mentor</button>
//         <button disabled={type === 'Investor'} onClick={() => handleButtonClick('Investor')}>Investor</button>
//       </div>
//       {data.length > 0 && (
//         <ol className="data-list">
//           {data.map((item) => (
//             <li key={item._id}>
//               <p><strong>Name:</strong> {item.name}</p>
//               <p><strong>Email:</strong> {item.email_id}</p>
//               <p><strong>Field of Interest:</strong> {item.field_of_interest}</p>
//               {selectedType === 'Mentor' && <p><strong>Rating:</strong> {item.rating}</p>}
//               {selectedType === 'Investor' && <p><strong>Profit on Past Investments:</strong> {item.profit_on_past_investments}</p>}
//             </li>
//           ))}
//         </ol>
//       )}
//     </div>
//   );
// };

// export default List;

// import React, { useState } from 'react';
// import '../../assets/styles/List.css';
// import ListItem from '../ListItem/ListItem.js';

// const List = ({ userData }) => {
//   const { userData: user, type } = userData;
//   const [data, setData] = useState([]);
//   const [selectedType, setSelectedType] = useState(null);

//   const fetchData = async (type) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/users/getDataByTypeAndInterest', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ type, field_of_interest: user.field_of_interest }),
//       });

//       if (response.ok) {
//        let data = await response.json();
//        data = sortData(type, data);
//         setData(data);
//         console.log(data);
//       } else {
//         console.error('Error fetching data:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   const sortData = (type, data) => {
//     if (type === 'Investor') {
//       return data.sort((a, b) => {
//         const assetsA = parseInt(a.assets.replace(/,/g, ''), 10);
//         const assetsB = parseInt(b.assets.replace(/,/g, ''), 10);
//         const profitA = parseInt(a.profit_on_past_investments.replace(/,/g, ''), 10);
//         const profitB = parseInt(b.profit_on_past_investments.replace(/,/g, ''), 10);

//         if (assetsB === assetsA) {
//           return profitB - profitA;
//         }
//         return assetsB - assetsA;
//       });
//     } else if (type === 'Mentor') {
//       return data.sort((a, b) => {
//         const ratingA = parseFloat(a.rating);
//         const ratingB = parseFloat(b.rating);
//         const assetsA = parseInt(a.assets.replace(/,/g, ''), 10);
//         const assetsB = parseInt(b.assets.replace(/,/g, ''), 10);

//         if (ratingB === ratingA) {
//           return assetsB - assetsA;
//         }
//         return ratingB - ratingA;
//       });
//     } else if (type === 'Entrepreneur') {
//       return data.sort((a, b) => {
//         const assetsA = parseInt(a.assets.replace(/,/g, ''), 10);
//         const assetsB = parseInt(b.assets.replace(/,/g, ''), 10);

//         return assetsB - assetsA;
//       });
//     }
//     return data;
//   }; 

//   const handleButtonClick = (type) => {
//     setSelectedType(type);
//     fetchData(type);
//   };

//   return (
//     <div className="list-container">
//       <div className="list-buttons">
//       <button
//           disabled={type === 'Entrepreneur'}
//           onClick={() => handleButtonClick('Entrepreneur')}
//           className={selectedType === 'Entrepreneur' ? 'selected' : ''}
//         >
//           Entrepreneur
//         </button>
//         <button
//           disabled={type === 'Mentor'}
//           onClick={() => handleButtonClick('Mentor')}
//           className={selectedType === 'Mentor' ? 'selected' : ''}
//         >
//           Mentor
//         </button>
//         <button
//           disabled={type === 'Investor'}
//           onClick={() => handleButtonClick('Investor')}
//           className={selectedType === 'Investor' ? 'selected' : ''}
//         >
//           Investor
//         </button>
//       </div>
//       {data.length > 0 && (
//         <ol className="data-list">
//           {data.map((item) => (
//             <ListItem key={item._id} item={item} />
//           ))}
//         </ol>
//       )}
//     </div>
//   );
// };

// export default List;


// import React, { useState } from 'react';
// import '../../assets/styles/List.css';
// import ListItem from '../ListItem/ListItem.js';

// const List = ({ userData }) => {
//   const { userData: user, type } = userData;
//   const [data, setData] = useState([]);
//   const [selectedType, setSelectedType] = useState(null);

//   const fetchData = async (type) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/users/getDataByTypeAndInterest', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ type, field_of_interest: user.field_of_interest }),
//       });

//       if (response.ok) {
//         let data = await response.json();
//         data = sortData(type, data);
//         setData(data);
//         console.log(data);
//       } else {
//         console.error('Error fetching data:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const sortData = (type, data) => {
//     if (type === 'Investor') {
//       return data.sort((a, b) => {
//         const assetsA = parseInt(a.assets.replace(/,/g, ''), 10);
//         const assetsB = parseInt(b.assets.replace(/,/g, ''), 10);
//         const profitA = parseInt(a.profit_on_past_investments.replace(/,/g, ''), 10);
//         const profitB = parseInt(b.profit_on_past_investments.replace(/,/g, ''), 10);

//         if (assetsB === assetsA) {
//           return profitB - profitA;
//         }
//         return assetsB - assetsA;
//       });
//     } else if (type === 'Mentor') {
//       return data.sort((a, b) => {
//         const ratingA = parseFloat(a.rating);
//         const ratingB = parseFloat(b.rating);
//         const assetsA = parseInt(a.assets.replace(/,/g, ''), 10);
//         const assetsB = parseInt(b.assets.replace(/,/g, ''), 10);

//         if (ratingB === ratingA) {
//           return assetsB - assetsA;
//         }
//         return ratingB - ratingA;
//       });
//     } else if (type === 'Entrepreneur') {
//       return data.sort((a, b) => {
//         const assetsA = parseInt(a.assets.replace(/,/g, ''), 10);
//         const assetsB = parseInt(b.assets.replace(/,/g, ''), 10);

//         return assetsB - assetsA;
//       });
//     }
//     return data;
//   };

//   const handleButtonClick = (type) => {
//     setSelectedType(type);
//     fetchData(type);
//   };

//   const handleRatingSubmit = async (mentorId, rating) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/users/rateMentor', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ mentorId, rating }),
//       });

//       if (response.ok) {
//         const updatedData = data.map((item) =>
//           item._id === mentorId ? { ...item, rating } : item
//         );
//         setData(updatedData);
//         console.log('Rating submitted:', rating);
//       } else {
//         console.error('Error submitting rating:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="list-container">
//       <div className="list-buttons">
//         <button
//           disabled={type === 'Entrepreneur'}
//           onClick={() => handleButtonClick('Entrepreneur')}
//           className={selectedType === 'Entrepreneur' ? 'selected' : ''}
//         >
//           Entrepreneur
//         </button>
//         <button
//           disabled={type === 'Mentor'}
//           onClick={() => handleButtonClick('Mentor')}
//           className={selectedType === 'Mentor' ? 'selected' : ''}
//         >
//           Mentor
//         </button>
//         <button
//           disabled={type === 'Investor'}
//           onClick={() => handleButtonClick('Investor')}
//           className={selectedType === 'Investor' ? 'selected' : ''}
//         >
//           Investor
//         </button>
//       </div>
//       {data.length > 0 && (
//         <ol className="data-list">
//           {data.map((item) => (
//             <ListItem key={item._id} item={item} handleRatingSubmit={handleRatingSubmit} />
//           ))}
//         </ol>
//       )}
//     </div>
//   );
// };

// export default List;

import React, { useState } from 'react';
import '../../assets/styles/List.css';
import ListItem from '../ListItem/ListItem.js';

const List = ({ userData }) => {
  const { userData: user, type } = userData;
  const [data, setData] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  const fetchData = async (type) => {
    try {
      const response = await fetch('http://localhost:5000/api/users/getDataByTypeAndInterest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, field_of_interest: user.field_of_interest }),
      });

      if (response.ok) {
        let data = await response.json();
        data = sortData(type, data);
        setData(data);
        console.log(data);
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const sortData = (type, data) => {
    if (type === 'Investor') {
      return data.sort((a, b) => {
        const assetsA = parseInt(a.assets.replace(/,/g, ''), 10);
        const assetsB = parseInt(b.assets.replace(/,/g, ''), 10);
        const profitA = parseInt(a.profit_on_past_investments.replace(/,/g, ''), 10);
        const profitB = parseInt(b.profit_on_past_investments.replace(/,/g, ''), 10);

        if (assetsB === assetsA) {
          return profitB - profitA;
        }
        return assetsB - assetsA;
      });
    } 
    else if (type === 'Mentor') {
      return data.sort((a, b) => {
        const ratingA = parseFloat(a.averageRating);
        const ratingB = parseFloat(b.averageRating);
        const assetsA = parseInt(a.assets.replace(/,/g, ''), 10);
        const assetsB = parseInt(b.assets.replace(/,/g, ''), 10);

        if (ratingB === ratingA) {
          return assetsB - assetsA;
        }
        return ratingB - ratingA;
      });
    }
    else if (type === 'Entrepreneur') {
      return data.sort((a, b) => {
        const assetsA = parseInt(a.assets.replace(/,/g, ''), 10);
        const assetsB = parseInt(b.assets.replace(/,/g, ''), 10);

        return assetsB - assetsA;
      });
    }
    return data;
  };

  const handleButtonClick = (type) => {
    setSelectedType(type);
    fetchData(type);
  };

  const handleRatingSubmit = async (mentorId, rating) => {
    try {
        const response = await fetch('http://localhost:5000/api/users/rateMentor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mentorId, rating }),
        });

        if (response.ok) {
            const { averageRating } = await response.json();
            const updatedData = data.map((item) =>
                item._id === mentorId ? { ...item, averageRating } : item
            );
            setData(updatedData);
            console.log('Rating submitted:', rating);
        } else {
            console.error('Error submitting rating:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};


  return (
    <div className="list-container">
      <div className="list-buttons">
        <button
          disabled={type === 'Entrepreneur'}
          onClick={() => handleButtonClick('Entrepreneur')}
          className={selectedType === 'Entrepreneur' ? 'selected' : ''}
        >
          Entrepreneur
        </button>
        <button
          disabled={type === 'Mentor'}
          onClick={() => handleButtonClick('Mentor')}
          className={selectedType === 'Mentor' ? 'selected' : ''}
        >
          Mentor
        </button>
        <button
          disabled={type === 'Investor'}
          onClick={() => handleButtonClick('Investor')}
          className={selectedType === 'Investor' ? 'selected' : ''}
        >
          Investor
        </button>
      </div>
      {data.length > 0 && (
        <ol className="data-list">
          {data.map((item) => (
            <ListItem key={item._id} item={item} handleRatingSubmit={handleRatingSubmit} />
          ))}
        </ol>
      )}
    </div>
  );
};

export default List;





