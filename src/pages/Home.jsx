import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful", "smart"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative">
      <iframe
        src="https://my.spline.design/particlenebula-bffe667eeaa1282cacc81c89b9adb6a7/"
        frameborder="0"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundColor: "black"
        }}
      ></iframe>
      <div className="pt-10">
        <div className="container mx-auto">
          <div className="flex gap-8 lg:py-32 py-20 items-center justify-center flex-col">
            <div className="flex gap-4 flex-col items-center text-white">
              <div className="-my-130">
                <img src="src/assets/logo.png" alt="" />
              </div>
              <h1 className="text-5xl mt-40 md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                <span>Welcome to a</span>
                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-6 md:pt-6">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold text-yellow-300"
                      initial={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
            <div className="flex flex-row mt-20 text-xl shadow-xl hover:shadow-none transition-all duration-700 rounded-full">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Let's Get Started!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
