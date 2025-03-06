import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import SamplePage from "@/mock/SamplePage.json";
import { useSetCookie } from "cookies-next";
import { useState } from "react";

type Props = {
  pageData: typeof SamplePage;
};
const ICON_LINKS = [
  {
    src: "/images/mountain.svg",
  },
  {
    src: "/images/fish.svg",
  },
  {
    src: "/images/crosshair.svg",
  },
];
export default function Home({ pageData }: Props) {
  const router = useRouter();
  const setCookie = useSetCookie();
  const changeLocale = async (locale: string) => {
    await setCookie("locale", locale);
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale }
    );
  };
  const { i18n } = useTranslation(["common"]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="w-full relative min-h-[812px] md:min-h-[834px] lg:min-h-[1080px]">
        <Image
          src="/images/Hero image.png"
          alt=""
          width={0}
          height={0}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <nav className="w-full bg-brown/70 absolute top-0">
          <div className="container mx-auto flex justify-between items-center py-3 px-4">
            <div className="flex text-white">
              <Link className="hover-glow" href="/">
                LOGO SAMPLE
              </Link>
              <ul className="ml-16 gap-10 hidden lg:flex text-base font-medium leading-6">
                {pageData.head_menu.map((menu, index) => (
                  <li key={index}>
                    <Link href="/" className="hover-glow">
                      {menu}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex gap-7 items-center">
              {ICON_LINKS.map((item, idx) => (
                <Link key={idx} href="/" className="hover-scale-[1.5]">
                  <Image
                    src={item.src}
                    alt=""
                    width={0}
                    height={0}
                    className="w-7 h-7"
                    sizes="100vw"
                  />
                </Link>
              ))}
              <Link
                href="/"
                className="flex items-center justify-end rounded-full bg-orange1 py-2 pl-6 pr-3"
              >
                <Image
                  src="/images/ArrowUpRight.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="w-6 h-6"
                  sizes="100vw"
                />
              </Link>
              <select
                className={classNames(
                  "w-[80px] rounded-lg border border-[rgba(255, 255, 255, 0.3)]",
                  "py-2 px-4 shadow-sm focus:border-white focus:bg-white focus:outline-none"
                )}
                onChange={(e) => {
                  changeLocale(e.target.value);
                }}
                defaultValue={i18n.language}
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </div>
            <button className="lg:hidden" onClick={() => setIsOpen(true)}>
              <Image
                src="/images/menu.svg"
                alt=""
                width={0}
                height={0}
                className="w-6 h-6"
                sizes="100vw"
              />
            </button>
          </div>
        </nav>
        <div className="absolute bottom-0 w-full">
          <div className="container mx-auto px-4 relative">
            <div className="flex justify-between pb-10 text-white">
              <div className="flex flex-1 justify-center py-6">
                <Link
                  href="/"
                  className="flex flex-col items-center gap-5 hover-scale-[1.2]"
                >
                  <Image
                    src="/images/Mountains.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div className="text-center app-text-14">
                    {pageData.banner_menu[0]}
                  </div>
                </Link>
              </div>
              <div className="flex flex-1 justify-center py-6">
                <Link
                  href="/"
                  className="flex flex-col items-center gap-5 hover-scale-[1.2]"
                >
                  <Image
                    src="/images/Fishing icon-32px.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div className="text-center app-text-14">
                    {pageData.banner_menu[1]}
                  </div>
                </Link>
              </div>
              <div className="flex flex-1 justify-center py-6">
                <Link
                  href="/"
                  className="flex flex-col items-center gap-5 hover-scale-[1.2]"
                >
                  <Image
                    src="/images/Crosshair-32px.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div className="text-center app-text-14">
                    {pageData.banner_menu[2]}
                  </div>
                </Link>
              </div>
            </div>
            <button className="bg-orange1 p-2 rounded-full absolute top-2/3 lg:top-1/2 right-4 hover-scale-[1.2]">
              <Image src="/images/chat.svg" alt="" width={32} height={32} />
            </button>
          </div>
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-brown/90 shadow-lg transform transition-transform duration-300 flex flex-col ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-between items-center border-b border-white">
            <h2 className="text-lg font-semibold"></h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-xl"
            >
              &times;
            </button>
          </div>

          <ul className="p-4">
            {pageData.head_menu.map((menu, index) => (
              <li key={index} className="py-2 text-white">
                <Link href="/" className="hover-glow">
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
          <hr className="border-white" />
          <ul className="p-4 flex flex-1 flex-col gap-5 justify-between">
            <div className="flex gap-5 items-center">
              {ICON_LINKS.map((item, idx) => (
                <Link key={idx} href="/" className="hover-scale-[1.5]">
                  <Image
                    src={item.src}
                    alt=""
                    width={0}
                    height={0}
                    className="w-7 h-7"
                    sizes="100vw"
                  />
                </Link>
              ))}
              <Link
                href="/"
                className="self-start rounded-full bg-orange1 py-2 pl-6 pr-3"
              >
                <Image
                  src="/images/ArrowUpRight.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="w-6 h-6"
                  sizes="100vw"
                />
              </Link>
            </div>
            <select
              className={classNames(
                "w-[80px] rounded-lg border border-[rgba(255, 255, 255, 0.3)]",
                "py-2 px-4 shadow-sm focus:border-white focus:bg-white focus:outline-none"
              )}
              onChange={(e) => {
                changeLocale(e.target.value);
              }}
              defaultValue={i18n.language}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>
          </ul>
        </div>
      </header>
    </>
  );
}
