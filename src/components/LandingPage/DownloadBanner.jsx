import boxshot from "../../assets/Images/boxshot.png";
import downloadIconGif from "./../../assets/Images/download-icon.gif";
const DownloadBanner = ({ className }) => {
  return (
    <div
      className={`${className} flex items-center justify-around px-3 py-2 bg-black border-[1.92px] border-[#808080] max-w-[180px] lg:max-w-[220px] xl:max-w-[295px] w-full rounded-xl`}
    >
      <img
        src={boxshot}
        alt="box"
        className="md:w-[34px] md:h-[48px] w-[17px] h-[24px]"
      />
      <section>
        <h1 className="text-white text-[10px] md:text-[14px] font-medium">
          Stranger Things
        </h1>
        <p className="text-[#0071eb] text-[12px] font-normal">Downloading...</p>
      </section>
      <img
        src={downloadIconGif}
        alt=""
        className="h-[24px] md:h-[48px] w-[24px] md:w-[48px]"
      />
    </div>
  );
};
export default DownloadBanner;
