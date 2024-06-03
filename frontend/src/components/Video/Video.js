// Video.js
import React, { useEffect, useRef, useState } from 'react';
// import io from 'socket.io-client';
// import SimplePeer from 'simple-peer';
import Header from '../Header/Header';

// const socket = io('http://localhost:3000');

const Video = () => {
//   const [stream, setStream] = useState(null);
//   const [peer, setPeer] = useState(null);
//   const userVideo = useRef();
//   const partnerVideo = useRef();

//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
//       setStream(stream);
//       if (userVideo.current) {
//         userVideo.current.srcObject = stream;
//       }
//     });

//     socket.on('signal', (data) => {
//       peer.signal(data);
//     });
//   }, [peer]);

//   const callUser = (id) => {
//     const peer = new SimplePeer({
//       initiator: true,
//       trickle: false,
//       stream: stream,
//     });

//     peer.on('signal', (data) => {
//       socket.emit('signal', data);
//     });

//     peer.on('stream', (stream) => {
//       if (partnerVideo.current) {
//         partnerVideo.current.srcObject = stream;
//       }
//     });

//     setPeer(peer);
//   };

  return (
    <div>
      <Header/>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1 style={{color:"black"}}>Under Development .....</h1>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default Video;
