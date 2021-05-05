import React, { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('get users', data => {
      // setUsers([...users, data]);
      setUsers(data);
    });
    socket.on('get messages', data => {
      setChat(data);
    });
  }, [users, chat]);

  const handleUserSubmit = e => {
    e.preventDefault();
    socket.emit('new user', username, data => {
      if (data) {
        setIsLoggedIn(true);
        console.log('New user connected', data);
      }
    });
    setUsername('');
  };

  const handleMessageSubmit = e => {
    e.preventDefault();
    socket.emit('send message', message);
    setMessage('');

    socket.on('get messages', data => {
      setChat(data);
    });
  };

  const ChatRoom = (
    <div className='container'>
      <h3>Online Users</h3>
      <ul id='users' className='list-group'>
        {users && users.map((user, index) => <li key={index}>{user}</li>)}
      </ul>
      <div>
        <div className='chat' id='chat'>
          {chat &&
            chat.map((msg, index) => (
              <div key={index}>
                <strong>{msg.user}: </strong>
                {msg.text}
              </div>
            ))}
          <form onSubmit={handleMessageSubmit} id='messageForm'>
            <div className='form-group'>
              <textarea
                className='form-control'
                id='message'
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder='enter message'
              />
              <br />
              <input type='submit' className='btn' value='Send Message' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const UserForm = (
    <div className='container'>
      <div id='userFormArea'>
        <form onSubmit={handleUserSubmit} id='userForm'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder='enter username'
            />
            <br />
            <input type='submit' className='btn' value='Login' />
          </div>
        </form>
      </div>
    </div>
  );
  return <div className='container'>{isLoggedIn ? ChatRoom : UserForm}</div>;
}

export default App;
