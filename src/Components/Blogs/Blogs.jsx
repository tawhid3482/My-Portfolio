import UseBlog from "../../Hooks/UseBlog";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Blog from "./Blog";

const Blogs = () => {
  const [blog] = UseBlog();
  return (
    <div>
      <div className="">
        <SectionTitle subtitle1={"my"} subtitle2={"blog"}></SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            blog?.map((blogs) => <Blog key={blogs.id} blogs={blogs}></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;
