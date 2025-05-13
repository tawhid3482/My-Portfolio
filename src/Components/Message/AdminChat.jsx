import { useEffect, useState } from "react";
import axios from "axios";
import { IoMdClose } from "react-icons/io";

const API_BASE = "http://localhost:5000/api/chat";

const AdminChat = () => {
  const [showChat, setShowChat] = useState(true);
  const [users, setUsers] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${API_BASE}`);
        const enrichedUsers = await Promise.all(
          res.data.map(async (email) => {
            const res2 = await axios.get(`${API_BASE}/${email}`);
            const lastMessage = res2.data.length
              ? res2.data[res2.data.length - 1].content
              : "No messages yet";
            return { email, lastMessage };
          })
        );
        setUsers(enrichedUsers);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (selectedEmail) {
      setLoading(true);
      axios
        .get(`${API_BASE}/${selectedEmail}`)
        .then((res) => setMessages(res.data))
        .finally(() => setLoading(false));
    }
  }, [selectedEmail]);

  const handleSend = async () => {
    if (!reply.trim()) return;
    const newMsg = {
      name: "Admin",
      email: selectedEmail,
      sender: "admin",
      content: reply,
    };
    try {
      await axios.post(`${API_BASE}/send`, newMsg);
      setMessages([...messages, { ...newMsg, createdAt: new Date() }]);
      setReply("");
    } catch (err) {
      console.error("Failed to send message", err);
    }
  };

  // If chat is closed, show a button to reopen
  if (!showChat) {
    return (
      <div className="flex justify-center items-center h-64">
        <button
          onClick={() => setShowChat(true)}
          className="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-700 transition"
        >
          Open Admin Chat
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row rounded-lg md:h-80 lg:h-[450px] w-full md:max-w-6xl mx-auto bg-gradient-to-r from-gray-100 to-yellow-50 font-sans md:rounded-lg p-2 md:p-4 shadow-md overflow-hidden relative">
      {/* Close full chat */}
      <button
        onClick={() => setShowChat(false)}
        className="absolute top-3 right-3 text-red-600 text-2xl hover:text-red-800"
        title="Close Admin Chat"
      >
        <IoMdClose />
      </button>

      {/* Sidebar */}
      <div className="md:w-1/3 w-full mb-4 md:mb-0 md:mr-4 border-b md:border-r md:border-b-0 border-gray-300 bg-white shadow-inner overflow-y-auto rounded-md p-3 max-h-[40vh] md:max-h-full">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Users</h2>
        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-x-hidden">
          {users.map((user) => (
            <div
              key={user.email}
              onClick={() => setSelectedEmail(user.email)}
              className={`cursor-pointer md:p-3 rounded-xl border transition-all duration-200 flex items-center gap-1 md:gap-3 md:min-w-0 ${
                selectedEmail === user.email
                  ? "bg-yellow-600 text-white"
                  : "hover:bg-yellow-100 text-gray-800 bg-white"
              }`}
            >
              {/* Mobile view: only circular initial */}
              <div className="md:hidden w-10 h-10 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold uppercase">
                {user.email.charAt(0)}
              </div>

              {/* Desktop view: full email and last message */}
              <div className="hidden md:block">
                <div className="font-medium truncate">{user.email}</div>
                <div className="text-sm opacity-80 truncate">
                  {user.lastMessage}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col bg-white rounded-md shadow-inner p-3 overflow-hidden max-h-[60vh] md:max-h-full">
        {selectedEmail ? (
          <>
            <div className="border-b pb-3 mb-3 flex items-center justify-between">
              <h2 className="text-lg md:text-2xl font-semibold text-gray-700">
                Chat with{" "}
                <span className="text-yellow-600 break-all">
                  {selectedEmail}
                </span>
              </h2>
              <button
                onClick={() => setSelectedEmail(null)}
                className="text-red-600 text-3xl font-bold hover:text-red-800"
                title="Close Chat"
              >
                <IoMdClose />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin mb-2">
              {loading ? (
                <p className="text-gray-500">Loading messages...</p>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      msg.sender === "admin" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg max-w-[80%] text-sm shadow ${
                        msg.sender === "admin"
                          ? "bg-yellow-600 text-white rounded-tr-none"
                          : "bg-gray-200 text-gray-800 rounded-tl-none"
                      }`}
                    >
                      <div className="font-semibold mb-1 text-xs opacity-80">
                        {msg.sender === "admin" ? "Admin" : msg.name}
                      </div>
                      <div>{msg.content}</div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Message Input */}
            <div className="mt-2 flex gap-2 flex-col sm:flex-row items-stretch">
              <input
                type="text"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-3 rounded-lg border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                onClick={handleSend}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-yellow-600 text-white hover:bg-yellow-700 transition duration-200"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center flex-1 text-center">
            <h2 className="text-xl text-gray-500">
              Select a user to start chatting
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminChat;
