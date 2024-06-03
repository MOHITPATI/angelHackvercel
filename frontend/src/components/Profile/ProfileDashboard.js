// import React from 'react';
// import Header from '../Header/Header.js'; // Import the Header component
// import '../../assets/styles/ProfileDashboard.css'; // Import the CSS for ProfileDashboard
// import UserInfo from '../UserInfo/UserInfo.js';
// import Footer from '../Footer/Footer.js';

// const ProfileDashboard = () => {
//   return (
//     <div className="profile-dashboard">
//       <Header />
      
//       <UserInfo /> {/* Add the UserInfo component here */}
//       <Footer/>
//     </div>
//   );
// };

// export default ProfileDashboard;

// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Header from '../Header/Header.js';
// import '../../assets/styles/ProfileDashboard.css';
// import UserInfo from '../UserInfo/UserInfo.js';
// import Footer from '../Footer/Footer.js';

// const ProfileDashboard = () => {
//   const location = useLocation();
//   const email = location.state?.email || '';
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/users/getUserData', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setUserData(data);
//         } else {
//           console.error('Error fetching user data:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     if (email) {
//       fetchUserData();
//     }
//   }, [email]);

//   return (
//     <div className="profile-dashboard">
//       <Header />
//       {userData ? <UserInfo userData={userData} /> : <p>Loading...</p>}
//       <Footer />
//     </div>
//   );
// };

// export default ProfileDashboard;


// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Header from '../Header/Header.js';
// import '../../assets/styles/ProfileDashboard.css';
// import UserInfo from '../UserInfo/UserInfo.js';
// import Footer from '../Footer/Footer.js';
// import List from '../List/List.js';
// const ProfileDashboard = () => {
//   const location = useLocation();
//   const email = location.state?.email || '';
//   const [userData, setUserData] = useState(null);
  
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/users/getUserData', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setUserData(data);
          
//         } else {
//           console.error('Error fetching user data:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     if (email) {
//       fetchUserData();
//     }
//   }, [email]);
//   const { userData: user, type } = userData;
//   return (
//     <div className="profile-dashboard">
//       <Header />
//       {userData ? <><UserInfo userData={userData} /> <List type={type} field_of_interest={user.field_of_interest} /> </>: <p>Loading...</p>}

      
//       <Footer />
//     </div>
//   );
// };

// export default ProfileDashboard;


// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Header from '../Header/Header.js';
// import '../../assets/styles/ProfileDashboard.css';
// import UserInfo from '../UserInfo/UserInfo.js';
// import Footer from '../Footer/Footer.js';
// import List from '../List/List.js';

// const ProfileDashboard = () => {
//   const location = useLocation();
//   const email = location.state?.email || '';
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/users/getUserData', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setUserData(data);
//         } else {
//           console.error('Error fetching user data:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     if (email) {
//       fetchUserData();
//     }
//   }, [email]);

//   return (
//     <div className="profile-dashboard">
//       <Header />
//       {userData ? (
//         <>
//           <UserInfo userData={userData} />
//           <List userData={userData} />
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default ProfileDashboard;

// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Header from '../Header/Header.js';
// import '../../assets/styles/ProfileDashboard.css';
// import UserInfo from '../UserInfo/UserInfo.js';
// import Footer from '../Footer/Footer.js';
// import List from '../List/List.js';

// const ProfileDashboard = () => {
//   const location = useLocation();
//   const email = location.state?.email || '';
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/users/getUserData', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setUserData(data);
//         } else {
//           console.error('Error fetching user data:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     if (email) {
//       fetchUserData();
//     }
//   }, [email]);

//   return (
//     <div className="profile-dashboard">
//       <Header />
//       {userData ? (
//         <>
//           <UserInfo userData={userData} />
//           <List userData={userData} />
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default ProfileDashboard;

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header.js';
import '../../assets/styles/ProfileDashboard.css';
import UserInfo from '../UserInfo/UserInfo.js';
import Footer from '../Footer/Footer.js';
import List from '../List/List.js';

const ProfileDashboard = () => {
  const location = useLocation();
  const email = location.state?.email || '';
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users/getUserData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Error fetching user data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (email) {
      fetchUserData();
    }
  }, [email]);

  return (
    <div className="profile-dashboard">
      <Header />
      {userData ? (
        <>
          <UserInfo userData={userData} />
          <List userData={userData} />
        </>
      ) : (
        <p>Loading...</p>
      )}
      {/* <Footer /> */}
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
};

export default ProfileDashboard;



