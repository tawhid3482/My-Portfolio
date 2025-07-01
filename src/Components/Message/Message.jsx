import { useEffect, useState } from "react";
import axios from "axios";
import { IoMdClose } from "react-icons/io";

const API_BASE = "https://my-protflio-server.vercel.app/api/chat";

const UserChat = ({ userName, userEmail, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${API_BASE}/${userEmail}`);
        setMessages(res.data);
      } catch (err) {
        console.error("Failed to fetch messages", err);
      }
    };
    fetchMessages();
  }, [userEmail]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const newMsg = {
      name: userName,
      email: userEmail,
      sender: "user",
      content: message,
    };

    try {
      await axios.post(`${API_BASE}/send`, newMsg);
      setMessages((prevMessages) => [
        ...prevMessages,
        { ...newMsg, createdAt: new Date() },
      ]);
      setMessage("");
    } catch (err) {
      console.error("Failed to send message", err);
    }
  };

  return (
    <div className="relative w-80 md:w-96 lg:w-4xl mx-auto h-[70vh] lg:h-[450px] p-4 bg-white shadow-lg rounded-lg flex flex-col">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
        aria-label="Close chat"
      >
        <IoMdClose size={22} />
      </button>

      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
        Chat with Admin
      </h2>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2 custom-scrollbar">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-[70%] text-sm shadow-lg ${
                msg.sender === "user"
                  ? "bg-yellow-500 text-white rounded-tr-none"
                  : "bg-gray-200 text-gray-800 rounded-tl-none"
              }`}
            >
              <div className="font-semibold mb-1 text-xs opacity-80">
                {msg.sender === "user" ? "You" : "Developer"}
              </div>
              <div>{msg.content}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="flex gap-2 mt-4 items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 rounded-lg border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          onClick={handleSend}
          className="px-6 py-3 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default UserChat;
