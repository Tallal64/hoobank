import Btn from "../components/Btn";
import { send, shield, star } from "../assets";

const Business = () => {
  return (
    <section
      id="features"
      className="flex flex-col md:flex-row py-6 sm:py-16 font-poppins"
    >
      <div className="flex justify-center items-start flex-1 flex-col">
        <h2 className="text-center sm:text-start text-4xl sm:text-5xl font-semibold w-full leading-tight md:leading-tight">
          You do the business,
          <br className="hidden sm:block" /> we&apos;ll handle the money.
        </h2>

        <p className="text-center sm:text-start my-8 text-dimWhite max-w-md text-base md:text-lg">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.with the right
        </p>

        <div className="text-center sm:text-start w-full">
          <Btn />
        </div>
      </div>

      <div className="mt-14">
        {/* FEATURE_1 */}
        <div className="flex justify-start mt-3 feature-card rounded-lg py-3 px-4">
          <div className="bg-dimBlue w-16 h-16 rounded-full flex justify-center items-center">
            <img
              src={star}
              alt="star"
              className="w-1/2 h-1/2 object-contain "
            />
          </div>

          <div className="flex flex-1 flex-col justify-start ml-3">
            <h4 className="font-semibold text-lg">Rewards</h4>
            <p className="max-w-md text-dimWhite text-base">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>

        {/* FEATURE_2 */}
        <div className="flex justify-start mt-3 feature-card rounded-lg py-3 px-4">
          <div className="bg-dimBlue w-16 h-16 rounded-full flex justify-center items-center">
            <img
              src={shield}
              alt="star"
              className="w-1/2 h-1/2 object-contain "
            />
          </div>

          <div className="flex flex-1 flex-col justify-start ml-3">
            <h4 className="font-semibold text-lg">100% Secured</h4>
            <p className="max-w-md text-dimWhite text-base">
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>

        {/* FEATURE_3 */}
        <div className="flex justify-start mt-3 feature-card rounded-lg py-3 px-4">
          <div className="bg-dimBlue w-16 h-16 rounded-full flex justify-center items-center">
            <img
              src={send}
              alt="star"
              className="w-1/2 h-1/2 object-contain "
            />
          </div>

          <div className="flex flex-1 flex-col justify-start ml-3">
            <h4 className="font-semibold text-lg">Balance Transfer</h4>
            <p className="max-w-md text-dimWhite text-base">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
