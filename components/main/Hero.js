import Image from "next/image";
import Link from "next/link";
import portrait from "/public/mario-portrait-fall-225.jpg";

const imageStyle = {
  borderRadius: "9999px",
  border: "1px solid #980F0F",
  filter: "drop-Shadow(0 5px 12px rgba(62, 17, 17, 0.4)",
};

export default function Hero({ as }) {
  const Component = as || "div";
  return (
    // SECTION BACKGROUND + CONTENT ROW: full-width, h-centered children
    <Component className="flex justify-center w-full gap-16 site-padding-x pt-16 pb-24 sm:gap-48 md:pb-32 md:pt-8 lg:pt-0 lgtall:pt-20 lgtall:pb-40 2k:pb-48 2k:pt-16 bg-red text-white border-b-8 border-red-shade">
      {/* TEXT COLUMN */}
      <div className="flex flex-col justify-center gap-24 md:w-[380px] lg:w-[440px] lg:gap-48">
        <h1 className="relative w-fit order-2">
          <Link className="target main-about" href="/about">
            <span aria-hidden>{"\u2192"} </span>
            <span className="main-about-text">about Mario Vellandi</span>
          </Link>
        </h1>
        <h2 className="text-xl -tracking-3 font-light drop-shadow order-1 pmd:text-2xl md:text-3xl md:leading-[1.22] lgtall:text-[4.2rem]">
          I research and produce digital media
        </h2>
      </div>
      {/* PHOTO */}
      <div className="min-w-[112px] pmd:min-w-[140px] md:w-[200px] lgtall:w-[225px] xl:w-[180px] 2k:w-[225px]">
        <Image src={portrait} style={imageStyle} alt="photo: mario vellandi" />
      </div>
    </Component>
  );
}
