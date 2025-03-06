import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import SamplePage from "@/mock/SamplePage.json";
import { useSetCookie } from "cookies-next";

type Props = {
  pageData: typeof SamplePage;
};

export default function Home({ pageData }: Props) {
  const router = useRouter();
  const setCookie = useSetCookie();
  const changeLocale = async (locale: string) => {
    await setCookie('locale', locale);
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
              <Link className="" href="/">LOGO SAMPLE</Link>
              <ul className="ml-16 gap-10 hidden lg:flex text-base font-medium leading-6">
                {pageData.head_menu.map((menu, index) => (
                  <li key={index}>
                    <Link href="/">{menu}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex gap-7 items-center">
              <Link href="/">
                <Image
                  src="/images/mountain.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="w-7 h-7"
                  sizes="100vw"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/fish.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="w-7 h-7"
                  sizes="100vw"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/crosshair.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="w-7 h-7"
                  sizes="100vw"
                />
              </Link>
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
            <div className="lg:hidden">
              <Image
                src="/images/menu.svg"
                alt=""
                width={0}
                height={0}
                className="w-6 h-6"
                sizes="100vw"
              />
            </div>
          </div>
        </nav>
        <div className="absolute bottom-0 w-full">
          <div className="container mx-auto px-4 relative">
            <div className="flex justify-between pb-10 text-white">
              <div className="flex flex-1 flex-col items-center gap-5 py-6">
                <Image
                  src="/images/Mountains.svg"
                  alt=""
                  width={40}
                  height={40}
                />
                <div className="text-center app-text-14">{pageData.banner_menu[0]}</div>
              </div>
              <div className="flex flex-1 flex-col items-center gap-5 py-6">
                <Image
                  src="/images/Fishing icon-32px.svg"
                  alt=""
                  width={40}
                  height={40}
                />
                <div className="text-center app-text-14">{pageData.banner_menu[1]}</div>
              </div>
              <div className="flex flex-1 flex-col items-center gap-5 py-6">
                <Image
                  src="/images/Crosshair-32px.svg"
                  alt=""
                  width={40}
                  height={40}
                />
                <div className="text-center app-text-14">{pageData.banner_menu[2]}</div>
              </div>
            </div>
            <button className="bg-orange1 p-2 rounded-full absolute top-2/3 lg:top-1/2 right-4">
              <Image src="/images/chat.svg" alt="" width={32} height={32} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
