
const SectionTitle = ({subtitle1,subtitle2}) => {
    return (
        <div>
            <div className="text-center  ">
            <h2 className="text-3xl font-bold uppercase m-8">{subtitle1} <span className="text-yellow-600">{subtitle2}</span></h2>
            </div>
        </div>
    );
};

export default SectionTitle;