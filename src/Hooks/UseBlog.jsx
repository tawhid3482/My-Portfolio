import { useEffect, useState } from "react";

const UseBlog = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return [blogs];
};

export default UseBlog;
