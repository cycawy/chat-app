import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  
  return (
    <ChatEngine 
      height='100vh'
      projectID='fd5e278c-432f-4289-b43f-b90f3bfd1fc3'
      userName={localStorage.getItem('username')}
      userSecret = {localStorage.getItem('password')}
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>} 
    />
  );
}

export default App;
