import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaGithub, FaLocationArrow } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [proDetails, setProDetails] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const findData = data?.find(
      (product) => String(product?.id) === String(id)
    );
    setProDetails(findData);
    if (findData?.image?.length) {
      setMainImage(findData.image[0]);
    }
  }, [id, data]);

  if (!proDetails) return <div className="text-center mt-10 text-white">Loading...</div>;

  const { name, description2, image, frontEnd, backEnd, liveLink } = proDetails;

  return (
    <div className="min-h-screen bg-black text-white p-5">
      <div className="max-w-6xl mx-auto bg-[#1a1a1a] rounded-2xl shadow-lg p-5 border border-yellow-600">
        {/* Project Title */}
        <h1 className="text-4xl font-extrabold mb-6 text-center text-yellow-400 tracking-wide">
          {name}
        </h1>

        {/* Main Image */}
        <div className="w-full mb-8 overflow-hidden rounded-xl border border-yellow-700 shadow-lg aspect-[16/9] bg-black">
          {mainImage ? (
            <img
              src={mainImage}
              alt="Main"
              className="w-full h-full object-contain mx-auto transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
              No preview available
            </div>
          )}
        </div>

        {/* Thumbnail Gallery */}
        <div className="flex gap-4 overflow-x-auto pb-2 mb-10">
          {image?.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setMainImage(img)}
              className={`h-20 w-28 object-cover rounded-md cursor-pointer border-2 transition-all duration-300 ${
                img === mainImage
                  ? "border-yellow-500 scale-105 shadow-md"
                  : "border-transparent hover:border-yellow-300 hover:scale-105"
              }`}
              alt={`thumb-${index}`}
              loading="lazy"
            />
          ))}
        </div>

        {/* Description */}
        <div className="mb-10 px-2">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
            Project Overview
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">{description2}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          {frontEnd && (
            <a
              href={frontEnd}
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full flex items-center gap-2 transition duration-300 shadow-md"
            >
              Front-end <FaGithub className="text-xl" />
            </a>
          )}
          {backEnd && (
            <a
              href={backEnd}
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full flex items-center gap-2 transition duration-300 shadow-md"
            >
              Back-end <FaGithub className="text-xl" />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full flex items-center gap-2 transition duration-300 shadow-md"
            >
              Live Site <FaLocationArrow className="text-xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
