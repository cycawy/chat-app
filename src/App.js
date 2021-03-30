import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';


function App() {
  return (
    <ChatEngine 
      height='100vh'
      projectID='fd5e278c-432f-4289-b43f-b90f3bfd1fc3'
      userName="ice-cream"
      userSecret = "123123"
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>} 
    />
  );
}

export default App;
