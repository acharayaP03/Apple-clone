import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Model3DView from "./Model3DView";
import { useState } from "react";
import { yellowImg } from "../../utils";

const initialState = {
  title: "iPhone 16 pro in Natural Titanium",
  color: ["#8f8a81", "#FFE7B9", "#6F6C64"],
  img: yellowImg,
};

export default function Model3D() {
  const [size, setSize] = useState(0);
  const [model, setModel] = useState(initialState);

  useGSAP(() => {
    gsap.to(
      "#heading",
      {
        y: 0,
        duration: 1,
        delay: 1.5,
        opacity: 1,
      },
      []
    );
  });
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <Model3DView />
          </div>
        </div>
      </div>
    </section>
  );
}
