import Image from "next/image";
import Link from "next/link";
import SamplePage from "@/mock/SamplePage.json";
import classNames from "classnames";

type Props = {
  pageData: typeof SamplePage;
};
const wrapHashtags = (text: string) => {
  return text.split(/(\s+#\w+)/g).map((part, index) => {
    if (part.startsWith(" #")) {
      return (
        <span key={index} className="font-semibold">
          {part}
        </span>
      );
    }
    return part;
  });
};

export function Bloc7({ pageData }: Props) {
  return (
    <>
      <section className="mt-10 bg-gradient-to-b from-[#EAFCFF] to-white px-4 py-10">
        <div className="container mx-auto px-4 flex flex-col">
          <div className="flex gap-2 flex-col-reverse sm:flex-row">
            <div className="flex-1 text-brown text-sm md:text-base xl:text-lg">
              {wrapHashtags(pageData.bloc_5.text)}
            </div>
            <div className="flex-1 text-2xl md:text-4xl font-semibold text-brown uppercase">
              {pageData.bloc_5.title}
            </div>
          </div>
          <div className="relative mt-5">
            <Image
              src="/images/famille.webp"
              alt=""
              width={0}
              height={0}
              className="h-full w-full object-cover absolute top-0 left-0 z-0 rounded-2xl"
              fill
              sizes="100vw"
            />
            <div className="absolute top-0 left-0 w-full h-full border-[3rem] border-[#0E959433] rounded-2xl"></div>
            <div className="z-[10] border-[2rem] border-[transparent] relative rounded-xl">
              <div className="w-full aspect-video border-[1rem] border-white rounded-t-xl"></div>
              <div className="bg-white p-4 rounded-b-xl">
                <div className="flex justify-between items-center">
                  <div className="text-base md:text-xl xl:text-2xl font-semibold">
                    La famille
                  </div>
                  <div className="font-semibold text-sm md:text-base lg:text-xl">
                    24 Sep 2024
                  </div>
                </div>
                <div className="text-sm md:text-base lg:text-base xl:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-5 justify-center">
            {pageData.bloc_5.reviews.map((item, index) => (
              <Link
                key={index}
                href="/"
                className="relative w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)] hover-scale-[1.05]"
              >
                <Image
                  src={`/images/bloc7${index % 4}.png`}
                  alt=""
                  width={0}
                  height={0}
                  className="w-full aspect-auto rounded-xl"
                  sizes="100vw"
                />
                <div
                  className={classNames(
                    "absolute bottom-0 text-center w-full py-3 bg-[#562C2C99] flex justify-between items-center px-3",
                    "rounded-b-2xl sm:rounded-b-3xl lg:rounded-b-[1.25rem] xl:rounded-b-3xl"
                  )}
                >
                  <div className="flex items-center gap-3 text-white text-xs md:text-base lg:text-base xl:text-lg">
                    <Image
                      src="/images/mdi_instagram.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    {item.author}
                  </div>
                  <Image
                    src="/images/ArrowUpRight.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-5 text-center text-sm lg:text-base xl:text-2xl">
            {pageData.bloc_5.footer}
          </div>
        </div>
      </section>
    </>
  );
}
