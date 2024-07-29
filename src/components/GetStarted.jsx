import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} bg-blue-gradient h-[140px] w-[140px] rounded-full p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} bg-primary flex-col h-full w-full rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row `}>
          <p className="font-poppins font-medium text-lg leading-[23px] mr-2">
            <span className=" text-gradient">Get</span>
          </p>

          <img src={arrowUp} alt="" className="w-6 h-6 object-contain" />
        </div>

        <p className="font-poppins font-medium text-lg leading-[23px]">
          <span className=" text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
