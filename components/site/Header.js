import cn from "classnames";
import Link from "next/link";
import Target from "/components/elements/Target";

export default function Header({ as, layout, type }) {
  const Component = as || "div";
  let rootStyle =
    "site-padding-x flex justify-center items-center w-full bg-red fixed z-10 h-56 sm:h-[72px] sm:items-end sm:pb-12";
  let headStyle =
    "relative flex justify-between items-center w-full sm:items-end";
  switch (type) {
    case "main":
      rootStyle = cn(rootStyle, "lgtall:h-96 2k:h-[90px] 2k3:h-[120px]");
      headStyle = cn(headStyle, "max-w-screen-xl");
      break;
    case "project" || "article":
      rootStyle = cn(rootStyle, "md:h-[110px] 2k3:h-[120px]");
      headStyle = cn(headStyle, "max-w-[870px] xl:max-w-screen-xl");
    default:
      break;
  }
  let listItemStyle = "relative";
  // Calculate the click target's vertical offset negative margin: Divide visual rendered element height by 2
  let navItemStyle =
    "target text-[2rem] leading-[1] before:-mt-[1.2rem] select-none md:text-[2.4rem] md:before:-mt-[1.3rem]";

  return (
    // HEADER BACKGROUND ROW: full width, h-centered child
    <Component className={rootStyle}>
      {/* HEADER CONTENT ROW: full width until large screen, h-centered children (logo and nav), space-between  */}
      <div className={headStyle}>
        {/* LOGO */}
        <Target>
          <Link
            href="/"
            className="target text-[3.6rem] leading-[1] before:-mt-[0.6rem] font-brand text-white drop-shadow select-none md:text-[4.8rem]"
          >
            Vellandi
          </Link>
        </Target>
        {/* NAV GROUP */}
        <nav className="text-white relative">
          {/* MOBILE NAV BTN */}
          <button className="target btn btn-sm btn-primary-bright sm:hidden">
            menu
          </button>
          {/* NAV LINKS  */}
          <ul className="hidden sm:flex sm:gap-36 md:gap-52 lg:gap-64 xl:gap-[7.6rem]">
            {type === "main" && (
              <li className={listItemStyle}>
                <Link href="/contact" className={navItemStyle}>
                  Contact
                </Link>
              </li>
            )}
            {type !== "main" && (
              <>
                {type !== "project" && (
                  <li className={listItemStyle}>
                    <Link href="/" className={navItemStyle}>
                      Projects
                    </Link>
                  </li>
                )}
                {type !== "article" && (
                  <li className={listItemStyle}>
                    <Link href="/articles" className={navItemStyle}>
                      Writing
                    </Link>
                  </li>
                )}
                <li className={listItemStyle}>
                  <Link
                    href="/play"
                    className={cn(navItemStyle, "before:-ml-4 md:before:ml-0")}
                  >
                    Play
                  </Link>
                </li>
                <li className={listItemStyle}>
                  <Link href="/about" className={navItemStyle}>
                    About
                  </Link>
                </li>
                <li className={listItemStyle}>
                  <Link href="/contact" className={navItemStyle}>
                    Contact
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </Component>
  );
}
