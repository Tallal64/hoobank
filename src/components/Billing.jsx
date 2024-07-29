import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section
      id="product"
      className="flex flex-col-reverse md:flex-row md:gap-x-20 gap-x-0 sm:mt-20 mt-14 gap-y-10"
    >
      {/* IMAGE-SECTION */}
      <div className="flex flex-1 justify-center items-center md:mr-10 mr-0 md:mt-10 mt-0 relative">
        <img src={bill} alt="bill" className="w-full h-full relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient"></div>
        <div className="absolute z-0 w-1/2 h-1/2 -left-1/2 bottom-0 rounded-full pink__gradient"></div>
      </div>

      {/* TEXT-SECTION */}
      <div className="flex flex-col flex-1 justify-center items-start">
        <h2 className="text-center sm:text-start text-4xl sm:text-5xl font-semibold font-poppins leading-tight md:leading-tight">
          Easily control your <br className="hidden sm:block" /> billing &
          invoicing.
        </h2>

        <p className="text-center sm:text-start text-dimWhite max-w-md my-8 text-base md:text-lg font-poppins">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex gap-x-5 flex-row flex-wrap">
          <img
            src={google}
            alt="google"
            className="object-contain w-36 h-11 cursor-pointer"
          />
          <img
            src={apple}
            alt="apple"
            className="object-contain w-36 h-11 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
