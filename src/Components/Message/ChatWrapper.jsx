import { useState } from "react";
import UserChat from "./Message";

const ChatWrapper = ({ userName, userEmail, onClose }) => {
  const [isChatOpen, setIsChatOpen] = useState(true);

  const handleClose = () => {
    setIsChatOpen(false);
    onClose(); // Call parent to reset chat view
  };

  return (
    <>
      {isChatOpen && (
        <UserChat
          userName={userName}
          userEmail={userEmail}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default ChatWrapper;
