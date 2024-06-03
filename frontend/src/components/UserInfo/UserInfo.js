// import React from 'react';
// import '../../assets/styles/UserInfo.css';

// const UserInfo = () => {
//   return (
//     <div className="user-info">
//       <div className="user-details">
//         <p><strong>Name:</strong> John Doe</p>
//         <p><strong>Phone:</strong> (123) 456-7890</p>
//         <p><strong>Email:</strong> john.doe@example.com</p>
//         <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
//         <p><strong>Assets:</strong> $1,000,000</p>
//         <p><strong>Type of User:</strong> Entrepreneur</p>
//         <p><strong>Field Type Interest:</strong> Technology</p>
//       </div>
//       <div className="user-photo">
//         <img src="path/to/placeholder-image.png" alt="User" />
//       </div>
//     </div>
//   );
// };

// export default UserInfo;

// import React from 'react';
// import '../../assets/styles/UserInfo.css';

// const UserInfo = ({ userData }) => {
//   const { userData: user, type } = userData;

//   return (
//     <div className="user-info">
//       <div className="user-details">
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Phone:</strong> {user.phone}</p>
//         <p><strong>Email:</strong> {user.email_id}</p>
//         <p><strong>Address:</strong> {user.address}</p>
//         <p><strong>Assets:</strong> {user.assets}</p>
//         <p><strong>Type of User:</strong> {type}</p>
//         <p><strong>Field of Interest:</strong> {user.field_of_interest}</p>
//         {type === 'Investor' && (
//           <p><strong>Profit on Past Investments:</strong> {user.profit_on_past_investments}</p>
//         )}
//       </div>
//       <div className="user-photo">
//         <img src="path/to/placeholder-image.png" alt="User" />
//       </div>
//     </div>
//   );
// };

// export default UserInfo;

import React from 'react';
import '../../assets/styles/UserInfo.css';

const UserInfo = ({ userData }) => {
  const { userData: user, type } = userData;

  return (
    <div className="user-info">
      <div className="user-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Email:</strong> {user.email_id}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Assets:</strong> {user.assets}</p>
        <p><strong>Type of User:</strong> {type}</p>
        <p><strong>Field of Interest:</strong> {user.field_of_interest}</p>
        {type === 'Investor' && (
          <p><strong>Profit on Past Investments:</strong> {user.profit_on_past_investments}</p>
        )}
      </div>
      <div className="user-photo">
        <img src="path/to/placeholder-image.png" alt="User" />
      </div>
      
    </div>
  );
};

export default UserInfo;


