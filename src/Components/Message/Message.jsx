import { useState, useEffect, useRef } from "react";

const Message = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [chatMessages, setChatMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const messageEndRef = useRef(null);

  useEffect(() => {
    if (isChatStarted && formData.email) {
      fetch(`http://localhost:5000/api/chat/${formData.email}`)
        .then((res) => res.json())
        .then((data) => setChatMessages(data))
        .catch((err) => console.error("Error fetching messages:", err));
    }
  }, [isChatStarted, formData.email]);

  // Scroll to bottom after new message
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);


  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    const newMessage = {
      name: formData.name,
      email: formData.email,
      sender: "user",
      content: currentMessage,
    };

    try {
      const res = await fetch("http://localhost:5000/api/chat/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessage),
      });

      const savedMessage = await res.json();
      setChatMessages((prev) => [...prev, savedMessage]);
      setCurrentMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setIsChatStarted(false);
    setFormData({ name: "", email: "" });
    setChatMessages([]);
    setCurrentMessage("");
  };

  return (
    <div className="w-11/12 mx-auto relative">
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-96 relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>

            <div>
              <h2 className="text-md font-semibold mb-2 text-center">
                Chat with Admin
              </h2>
              <div className="border h-60 overflow-y-auto p-2 rounded bg-gray-100 mb-2">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-1 ${
                      msg.sender === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <p
                      className={`inline-block px-3 py-1 rounded ${
                        msg.sender === "user" ? "bg-green-200" : "bg-blue-200"
                      }`}
                    >
                      {msg.content}
                    </p>
                  </div>
                ))}
                <div ref={messageEndRef}></div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  className="flex-1 border px-3 py-2 rounded"
                />
                <button
                  onClick={sendMessage}
                  className="bg-yellow-600 text-white px-3 py-2 rounded hover:bg-[#30b894]"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
