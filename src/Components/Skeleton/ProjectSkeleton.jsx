import Skeleton from "react-loading-skeleton";

const ProjectSkeleton = ({ item }) => {
  return Array(item)
    .fill(0)
    .map((items) => (
      <div key={items?.id}>
        <div
          data-aos="flip-left"
          className="card w-full lg:w-[520px] h-[400px] border border-yellow-600 bg-black text-white shadow-xl"
        >
          <figure className="my-5">
            <Skeleton width={450} height={300}></Skeleton>
          </figure>
          <div className="card-body ">
            <Skeleton width={350} height={30}></Skeleton> 
            <Skeleton width={350} height={10}></Skeleton> 

            <div className="card-actions mt-5 justify-between">
            <Skeleton width={80} height={40}></Skeleton> 
            <Skeleton width={80} height={40}></Skeleton> 

            </div>
          </div>
        </div>
      </div>
    ));
};

export default ProjectSkeleton;
