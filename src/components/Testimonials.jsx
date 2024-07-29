import Feedback from "./Feedback";

const Testimonials = () => {
  return (
    <section className="font-poppins mt-28 relative z-10">
      <div>
        <div className="flex justify-between  sm:items-start items-center flex-col md:flex-row">
          <h2 className="text-center sm:text-start text-4xl md:text-5xl font-semibold">
            What People are <br className="xs:block hidden" /> saying about us
          </h2>

          <p className="text-dimWhite max-w-md md:my-0 my-6 text-center sm:text-start">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>

        <div className="absolute -z-[10] w-[60%] h-[80%] -right-[50%] rounded-full blue__gradient bottom-40"></div>

        {/* FEEDBACK */}
        <div className="mt-20">
          <Feedback />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
