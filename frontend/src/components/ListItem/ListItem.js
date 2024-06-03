// import React from 'react';
// import '../../assets/styles/ListItem.css';
// import callIcon from '../../img/call.png';
// import chatIcon from '../../img/chat.png';
// import videoIcon from '../../img/video.png';

// const ListItem = ({ item }) => {
//   return (
//     <div className="list-item">
//       <div className="item-details">
//         <p><strong>Name:</strong> {item.name}</p>
//         <p><strong>Address:</strong> {item.address}</p>
//         <p><strong>Assets:</strong> {item.assets}</p>
//         <p><strong>Field of Interest:</strong> {item.field_of_interest}</p>
//         <p><strong>Type of User:</strong> {item.type}</p>
//       </div>
//       <div className="item-actions">
//         <div className="action-button" title={`Call: ${item.phone}\nEmail: ${item.email_id}`}>
//           <img src={callIcon} alt="Call" />
//         </div>
//         <div className="action-button">
//           <img src={chatIcon} alt="Chat" />
//         </div>
//         <div className="action-button">
//           <img src={videoIcon} alt="Video Conference" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListItem;


// import {React,useState} from 'react';
// import '../../assets/styles/ListItem.css';
// import callIcon from '../../img/call.png';
// import chatIcon from '../../img/chat.png';
// import videoIcon from '../../img/video.png';
// import Chat from '../Chat/Chat.js';
// import { Navigate, useNavigate } from 'react-router-dom';
// const ListItem = ({ item }) => {
//   const [showChat, setShowChat] = useState(false);
//   const [showvideo, setShowVideo] = useState(false);
//   const navigate = useNavigate();
//   return (
//     <div className="list-item">
//       <div className="item-details">
//         <p><strong className='add'>Name:</strong> {item.name}</p>
//         <p><strong className='add'>Address:</strong> {item.address}</p>
//         <p><strong className='add'>Assets:</strong> {item.assets}</p>
//         <p><strong className='add'>Field of Interest:</strong> {item.field_of_interest}</p>
//         <p><strong className='add'>Type of User:</strong> {item.type}</p>
//       </div>
//       <div className="item-actions">
//         <div className="action-button" title={`Call: ${item.phone}\nEmail: ${item.email_id}`}>
//           <img src={callIcon} alt="Call" />
//         </div>
//         <div className="action-button" onClick={() => {
//           setShowChat(!showChat);
//           if(showChat){
//             navigate('/chat');
//           }
//         }}>
//           <img src={chatIcon} alt="Chat" />
//         </div>
//         <div className="action-button" onClick={() => {
//           // setShowVideo(!showvideo);
//           // if(showvideo){
//             navigate('/video');
//           // }
//         }}>
//           <img src={videoIcon} alt="Video Conference" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListItem;

// import React, { useState } from 'react';
// import '../../assets/styles/ListItem.css';
// import callIcon from '../../img/call.png';
// import chatIcon from '../../img/chat.png';
// import videoIcon from '../../img/video.png';
// import { useNavigate } from 'react-router-dom';

// const ListItem = ({ item, handleRatingSubmit }) => {
//   const [rating, setRating] = useState('');
//   const navigate = useNavigate();

//   const handleChatClick = () => {
//     navigate('/chat');
//   };

//   const handleVideoClick = () => {
//     navigate('/video');
//   };

//   const submitRating = () => {
//     handleRatingSubmit(item._id, parseFloat(rating));
//   };

//   return (
//     <div className="list-item">
//       <div className="item-details">
//         <p><strong className="add">Name:</strong> {item.name}</p>
//         <p><strong className="add">Address:</strong> {item.address}</p>
//         <p><strong className="add">Assets:</strong> {item.assets}</p>
//         <p><strong className="add">Field of Interest:</strong> {item.field_of_interest}</p>
//         <p><strong className="add">Type of User:</strong> {item.type}</p>
//         {item.type === 'Mentor' && (
//           <>
//             <p><strong className="add">Rating:</strong> {item.rating}</p>
//             <div className="rating-section">
//               <label htmlFor="rating">Rate this Mentor:</label>
//               <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
//                 <option value="">Select</option>
//                 {[0, 1, 2, 3, 4, 5].map((value) => (
//                   <option key={value} value={value}>{value}</option>
//                 ))}
//               </select>
//               <button onClick={submitRating}>Submit Rating</button>
//             </div>
//           </>
//         )}
//       </div>
//       <div className="item-actions">
//         <div className="action-button" title={`Call: ${item.phone}\nEmail: ${item.email_id}`}>
//           <img src={callIcon} alt="Call" />
//         </div>
//         <div className="action-button" onClick={handleChatClick}>
//           <img src={chatIcon} alt="Chat" />
//         </div>
//         <div className="action-button" onClick={handleVideoClick}>
//           <img src={videoIcon} alt="Video Conference" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListItem;

import React, { useState } from 'react';
import '../../assets/styles/ListItem.css';
import callIcon from '../../img/call.png';
import chatIcon from '../../img/chat.png';
import videoIcon from '../../img/video.png';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ item, handleRatingSubmit }) => {
  const [rating, setRating] = useState('');
  const navigate = useNavigate();

  const handleChatClick = () => {
      navigate('/chat');
  };

  const handleVideoClick = () => {
      navigate('/video');
  };

  const submitRating = () => {
      handleRatingSubmit(item._id, parseFloat(rating));
  };

  return (
      <div className="list-item">
          <div className="item-details">
              <p><strong className="add">Name:</strong> {item.name}</p>
              <p><strong className="add">Address:</strong> {item.address}</p>
              <p><strong className="add">Assets:</strong> {item.assets}</p>
              <p><strong className="add">Field of Interest:</strong> {item.field_of_interest}</p>
              <p><strong className="add">Type of User:</strong> {item.type}</p>
              {item.type === 'Mentor' && (
                  <>
                      <p><strong className="add">Rating:</strong> {item.averageRating.toFixed(2)}</p>
                      <div className="rating-section">
                          <label htmlFor="rating">Rate this Mentor:</label>
                          <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                              <option value="">Select</option>
                              {[0, 1, 2, 3, 4, 5].map((value) => (
                                  <option key={value} value={value}>{value}</option>
                              ))}
                          </select>
                          <button onClick={submitRating}>Submit Rating</button>
                      </div>
                  </>
              )}
          </div>
          <div className="item-actions">
              <div className="action-button" title={`Call: ${item.phone}\nEmail: ${item.email_id}`}>
                  <img src={callIcon} alt="Call" />
              </div>
              <div className="action-button" onClick={handleChatClick}>
                  <img src={chatIcon} alt="Chat" />
              </div>
              <div className="action-button" onClick={handleVideoClick}>
                  <img src={videoIcon} alt="Video Conference" />
              </div>
          </div>
      </div>
  );
};

export default ListItem;


