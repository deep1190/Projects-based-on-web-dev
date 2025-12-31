import React, { Component } from 'react';

class ChatMessage extends Component {
  render() {
    const { position = 'left', message, user = 'User' } = this.props;
    const isRight = position.toLowerCase() === 'right';
    const align = isRight ? 'text-right' : 'text-left';
    const justify = isRight ? 'justify-content-end' : 'justify-content-start';

    const messageBoxStyles = {
      maxWidth: '70%',
      flexGrow: 0
    };

    const messageStyles = {
      fontWeight: 500,
      lineHeight: 1.4,
      whiteSpace: 'pre-wrap'
    };

    const userNameStyles = {
      fontWeight: 'bold',
      fontSize: '0.85rem',
      color: user === 'Bot 🤖' ? 'green' : '#333'
    };

    return (
      <div className={`w-100 my-1 d-flex ${justify}`}>
        <div className="bg-light rounded border border-gray p-2" style={messageBoxStyles}>
          <span style={userNameStyles}>{user}</span>
          <span className={`d-block text-secondary ${align}`} style={messageStyles}>
            {message}
          </span>
        </div>
      </div>
    );
  }
}

export default ChatMessage;
