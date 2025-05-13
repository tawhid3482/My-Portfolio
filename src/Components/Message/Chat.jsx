import { useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import AdminChat from "./AdminChat";
import ChatWrapper from "./ChatWrapper";

const Chat = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatView, setChatView] = useState(null); // 'user' or 'admin'

  const adminEmail = "tawhidulislam3482@gmail.com".toLowerCase();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedEmail = formData.email.trim().toLowerCase();
    if (submittedEmail === adminEmail) {
      setChatView("admin");
    } else {
      setChatView("user");
      setIsModalOpen(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Messenger Icon */}
      {!chatView && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-yellow-600 text-white p-4 rounded-full shadow-lg hover:bg-yellow-900 transition"
        >
          <FaFacebookMessenger size={24} />
        </button>
      )}
      {/* Chat Form */}
      {/* Chat Form */}
      {!chatView && isModalOpen && (
        <div className="bg-white p-4 rounded-lg shadow-lg w-60 md:w-80 relative">
          {/* X Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl font-bold"
            aria-label="Close"
          >
            ×
          </button>

          <form onSubmit={handleSubmit}>
            <h2 className="text-lg font-semibold mb-2">Start Chat</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full mb-2 px-3 py-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full mb-2 px-3 py-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-yellow-600 text-white w-full py-2 rounded hover:bg-yellow-800 transition"
            >
              Start Chat
            </button>
          </form>
        </div>
      )}
      {/* Chat UI */}
      {/* Render Chat View */}
      {chatView === "user" && (
        <ChatWrapper
          userName={formData.name}
          userEmail={formData.email}
          onClose={() => setChatView(null)}
        />
      )}
      {chatView === "admin" && <AdminChat />}
    </div>
  );
};

export default Chat;
