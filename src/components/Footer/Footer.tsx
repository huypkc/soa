import Image from "next/image";
import Link from "next/link";
import SamplePage from "@/mock/SamplePage.json";
import classNames from "classnames";
import useWindowDimensions, { Breakpoint } from "@/hooks/hooks";
const SOCIAL_MEDIAS = [
  {
    name: "Facebook",
    icon: "/images/facebook.svg",
  },
  {
    name: "Instagram",
    icon: "/images/instagram.svg",
  },
  {
    name: "Youtube",
    icon: "/images/youtube.svg",
  },
];
export const Footer = ({ pageData }: { pageData: typeof SamplePage }) => {
  const { breakpoint } = useWindowDimensions();
  let style = {};
  if (breakpoint === Breakpoint.md) {
    style = {
      gridTemplateRows: `repeat(${Math.ceil(
        pageData.footer.links.length / 2
      )}, minmax(0, 1fr))`,
    };
  } else if (breakpoint === Breakpoint.lg) {
    style = {
      gridTemplateRows: `repeat(${Math.ceil(
        pageData.footer.links.length / 3
      )}, minmax(0, 1fr))`,
    };
  } else {
    style = {
      gridTemplateRows: `repeat(${Math.ceil(
        pageData.footer.links.length / 3
      )}, minmax(0, 1fr))`,
    };
  }
  return (
    <footer className="bg-brown text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-4 text-center md:text-left text-base font-normal lg:text-lg">
              <div>{pageData.footer.address.name}</div>

              <div>{pageData.footer.address.phone}</div>

              <div>{pageData.footer.address.location}</div>
            </div>
            <div
              className={classNames(
                "col-span-12 text-center grid grid-cols-1 gap-5",
                "md:grid-flow-col md:grid-cols-none",
                "md:col-span-8 md:text-left",
                "lg:max-xl:grid-cols-[1fr_2fr_1fr]"
              )}
              style={style}
            >
              {pageData.footer.links.map((item, index) => (
                <div
                  key={index}
                >
                  <Link href="/" className="text-base font-normal lg:text-lg opacity-60 hover:opacity-100 hover-glow">{item.name}</Link>
                </div>
              ))}
              <div className="flex justify-center gap-5 sm:hidden">
                {SOCIAL_MEDIAS.map((item, index) => (
                  <Link key={index} href="/" className="hover-scale-[1.2]">
                    <Image
                      src={item.icon}
                      alt=""
                      width={30}
                      height={30}
                      className="bg-orange1 rounded-full p-1"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="flex justify-center sm:justify-between items-center mt-5">
          <div className="app-text-16">© BASIC 2024</div>
          <div className="hidden sm:flex sm:gap-3">
            {SOCIAL_MEDIAS.map((item, index) => (
              <Link key={index} href="/" className="hover-scale-[1.2]">
                <Image
                  src={item.icon}
                  alt=""
                  width={30}
                  height={30}
                  className="bg-orange1 rounded-full p-1"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
