import { useSelector } from "react-redux";
// import banner from "../img/banner.jpg";
import banner1 from "../img/banner1.jpg";
import banner2 from "../img/banner2.jpg";

import { useEffect, useState } from "react";

const Dashboard = () => {
  const { imagecount } = useSelector((state) => state.user);
  console.log("imagecount", imagecount);
  const [riseEffect, setRiseEffect] = useState(false);

  // Trigger the rise effect whenever imagecount changes
  useEffect(() => {
    setRiseEffect(true);
    const timeout = setTimeout(() => setRiseEffect(false), 2000); // Reset after 1s
    return () => clearTimeout(timeout);
  }, [imagecount]);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imagecount ? banner1 : banner2})`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents tiling
          height: "100vh", // Makes the div fill the viewport height
          width: "100vw", // Makes the div stretch across the screen
        }}
        className={`transition-all duration-1000 flex ${
          imagecount ? "justify-start" : "justify-end"
        }`}
      >
        <div
          className={`h-screen w-1/2 bg-white/25 backdrop-blur-md transition-transform duration-1000 ${
            imagecount ? "animate-slide-start" : "animate-slide-end"
          }`}
        >
          <div className="flex items-center h-screen text-white">
            <div
              className={`${imagecount ? "text-end pr-8" : "text-start pl-8"}`}
            >
              <div>
                <h1
                  className={`text-[100px] font-bold uppercase font-sans drop-shadow-md transition-transform duration-1000 ${
                    riseEffect
                      ? "translate-y-[-20px] opacity-80"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  Design demo
                </h1>
                <h1
                  className={`text-[100px] font-thin font-mono -mt-2 uppercase transition-transform duration-500 ${
                    riseEffect
                      ? "translate-y-[-20px] opacity-50"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  {imagecount ? "City Light" : "Nature"}
                </h1>
                <p
                  className={`mx-20 transition-opacity duration-500 ${
                    riseEffect ? "opacity-100" : "opacity-80"
                  }`}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
                  deserunt iure sunt nisi labore at incidunt sint non porro
                  explicabo!
                </p>
                <button className="rounded-full my-4 bg-transparent ring-2 ring-white px-5 py-1">
                  Learn more
                </button>
              </div>

              <div>
                <div
                  className={`flex w-full ${
                    imagecount ? "justify-start " : "justify-end "
                  } ${riseEffect ? "opacity-50 " : ""}`}
                >
                  {/* Wrapper for left and right aligned images */}
                  <div className=" items-center space-x-6">
                    {imagecount ? (
                      // Left-aligned images
                      <>
                        <img
                          src={banner1}
                          alt="Left Image 1"
                          className="w-96 h-5 object-none"
                        />
                        <img
                          src={banner1}
                          alt="Left Image 2"
                          className="w-72 h-5 object-none mt-6"
                        />
                      </>
                    ) : (
                      // Right-aligned images
                      <>
                        <img
                          src={banner2}
                          alt="Right Image 1"
                          className="w-96 h-5 object-none object-bottom"
                        />
                        <img
                          src={banner2}
                          alt="Right Image 2"
                          className="w-72 h-5 object-none mt-6  object-bottom"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
