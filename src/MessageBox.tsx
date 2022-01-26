import React, { useState, useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';

function  MessageBox() {
  const [message, setMessage] = useState<string>('');
  const [boxMessage, setBoxMessage] = useState<string[]>([]);

  const handleInputMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
	  setMessage(e.target.value);
  } 

  const handleClick = () => {
	setBoxMessage((prev:string[]) => [...prev, message]);
	setMessage('');
  }

  useEffect(() => {
	const scrollFocus = document.querySelector('#scrollFocus');
	scrollFocus?.scrollIntoView(true);
  },[boxMessage]);

  return (
    <div className="main">
	  <div 
		className="message-layout-box" 
		data-testid="message-layout-box"
	  >
		<div className="list-box">
		  {boxMessage.map((list, index) => {
		    return (
			  <div key={index} className="detail-message-box">
			    <Box component="span" className="message">
		          {list}
			    </Box>
			  </div>
			)
		  })}
		  <div id="scrollFocus" style={{display:'hidden'}}></div>
		</div>
		<div 
		  className="input-layout-box"
		  data-testid="input-wrapper-box"
		>
          <OutlinedInput
			className="input-message-box"
			placeholder='Type a message.'
			onChange={handleInputMessage}
			value={message}
          />
		  <Button 
			className="send-button" 
			variant="contained" 
			endIcon={<SendIcon />}
			onClick={handleClick}
		  >
            SEND
          </Button>
		</div>
      </div>
	</div>
  );
};

export default MessageBox;