import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="">
          <Image
            src={"https://avatars.githubusercontent.com/u/47099735"}
            alt={"NamKe Portrait"}
            width={192}
            height={192}
            quality={95}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
