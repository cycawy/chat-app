const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return(
        <div className='message-row'>
            {/* if it is the first message of the user */}
            {isFirstMessageByUser && (
                <div
                    className='message-avatar'
                    sytle = {{backgroundImage : `url(${message?.sender?.avatar})`}}
                />
            )
            }
            {/* the rest of the case similar to myMessage  */}
            {(message?.attachments?.length >0 )
                ? (
                    <img
                        src = {message.attachments[0].file} 
                        alt='message-attachment'
                        className="message-image"
                        style={{marginLeft: isFirstMessageByUser?'4px':'48px'}}
                    />
                ) : (
                    <div className="message" tyle={{float: 'right',  backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser?'4px':'48px'}}>
                        {message.text}
                    </div>
                )
            }   
        </div>
    )
}

export default TheirMessage;