const Skill = ({ skill }) => {
  const { name, percentage } = skill;
  return (
    <div>
      <div className=" flex justify-center items-center w-32 h-32  border border-yellow-600 rounded-full ">
        <p className="text-5xl text-yellow-600 font-bold text-center ">
          {percentage}%
        </p>
      </div>
      <h1 className="uppercase font-semibold text-slate-300 ml-10 mt-2 ">{name}</h1>
    </div>
  );
};

export default Skill;
