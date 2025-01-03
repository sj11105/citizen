import React from "react";
import Image from "next/image";
import Link from "next/link";
function Hero() {
  return (
    <div className="bg-black">
      <div className="">
        <h1 className="text-white mt-12 bg-black h-32 text-5xl justify-center  text-center abeezee-regular">
          Connect. Know. Achieve
        </h1>
        <div className="flex justify-between">
          <p className="text-white bg-black text-lg w-96 ml-12 mb-8 ">
            The website serves as a comprehensive platform that empowers users
            by providing a curated list of government schemes tailored to their
            eligibility. By leveraging advanced algorithms and automated
            document verification, the platform ensures quick and accurate
            validation of user credentials, eliminating manual paperwork.
            Additionally, it offers personalized guidance to help users
            understand the benefits, application process, and requirements of
            each scheme, enabling them to make informed decisions and access the
            support they need with ease and confidence.
          </p>
          <div>
            <Image
              src="/register.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl mr-44 -ml-7"
              alt="thumbnail"
            />
            <Link href="./login">
              {" "}
              <button className="bg-white rounded-xl p-3 w-96 mt-10">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
