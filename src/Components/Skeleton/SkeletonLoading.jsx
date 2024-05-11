import Skeleton from "react-loading-skeleton";

const SkeletonLoading = ({cards}) => {
  return (
    Array(cards).fill(0).map(item =><div key={item.id}>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="card w-80 lg:w-96 h-96 bg-black  border   shadow-xl"
        >
          <figure className="px-10 pt-10">
            <Skeleton width={350} height={180}></Skeleton>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <Skeleton width={180}></Skeleton>
            </h2>
            <p>
              <Skeleton width={280} count={2} ></Skeleton>
            </p>
          </div>
        </div>
      </div> )
    
  );
};

export default SkeletonLoading;
