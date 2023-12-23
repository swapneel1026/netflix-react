import { RxCross1 } from "react-icons/rx";
const FaqAccordian = ({ classname, title, desc,show,setShow,id }) => {
  const isOpen=show===id
  const handleAccordianClick = () => {
    if (isOpen) {
      setShow(null);
    } else {
      setShow(id);
    }
  };
  return (
    <>
      <div
        onClick={() => handleAccordianClick()}
        className={`${classname} bg-[#2d2d2d] p-6 flex flex-wrap items-center justify-between`}
      >
        <h1 className="text-[16px] md:text-[24px]  text-white">{title}</h1>
        <RxCross1
          className={`text-white ${
            isOpen ? "rotate-0 " : "rotate-45"
          } transition-all ease-in-out duration-200`}
          fontSize={24}
        />
      </div>
      {
        <div
          className={`overflow-scroll lg:overflow-hidden scrollbar-hide transition-[max-height] ${
            isOpen ? "max-h-56" : "max-h-0"
          } duration-300 ease-in text-[16px] md:text-[24px] text-white  bg-[#2d2d2d] border-t-2 border-black`}
        >
          <p className="flex flex-wrap p-6">{desc}</p>
        </div>
      }
    </>
  );
};
export default FaqAccordian;
