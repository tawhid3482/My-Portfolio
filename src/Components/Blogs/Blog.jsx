const Blog = ({ blogs }) => {
  const {name,image,description} = blogs;
  return (
    <div>
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card w-80 lg:w-96 h-96 bg-black text-white border border-yellow-600  shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="image"
            className="rounded-xl h-40 w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
