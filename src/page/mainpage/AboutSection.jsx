import AboutCard from "../../component/card/AboutCard";
import user from "../../img/user.png";
import user01 from "../../img/user01.png";

const AboutSection = () => {
  return (
    <div className="grid sm:grid-cols-2  place-items-center gap-6 my-12 p-12 border-t-2">
      <div>
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
      <div>
        <div className="px-5">
          <div></div>
          <div className="text-left">
            <h1 className="font-bold py-3">Get to Know Our Work</h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis, provident voluptatem cupiditate odio aspernatur eveniet
              corrupti non quaerat!
            </p>
          </div>
          <div className="bg-gradient-to-tr from-blue-900 to-blue-600 p-7 rounded-2xl my-5 text-white">
            <p className="text-xl">SATISFIED</p>
            <h1 className="font-semibold p-3">90%</h1>
            <p className="pr-12 pl-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem, numquam!
            </p>
            <div className=" p-4 flex justify-between items-center">
              <div className="flex gap-2">
                <img
                  src={user}
                  alt="user"
                  className=" rounded-full shadow-md"
                />
                <img
                  src={user01}
                  alt="user"
                  className=" rounded-full shadow-md"
                />
              </div>
              <div>
                <button className="text-blue-600">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
