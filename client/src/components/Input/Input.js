import React from 'react';
import Button from 'react-bootstrap/Button';


import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button variant="dark" size="xl" className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;