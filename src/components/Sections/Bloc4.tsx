import Link from "next/link";
import SamplePage from "@/mock/SamplePage.json";

type Props = {
  pageData: typeof SamplePage;
};

export function Bloc4({ pageData }: Props) {
  return (
    <>
      <section className="container mx-auto px-4 pt-20">
        <div className="flex items-center container mx-auto text-center justify-center md:text-left md:justify-between">
          <h1 className="title text-orange1">
            {pageData.bloc_3.title}
          </h1>
          <Link
            href="/"
            className="text-gray-600 text-base md:text-base lg:text-xl underline hidden md:inline-block whitespace-nowrap"
          >
            {pageData.bloc_3.more_info}
          </Link>
        </div>
        <div className="mt-10 flex gap-3 flex-nowrap overflow-hidden">
          {pageData.bloc_3.cases.map((item, index) => (
            <Link href="/" key={index} className="flex-1 min-w-[300px] hover-scale-[1.05]">
              <div
                className="w-[2/3] aspect-[0.8] bg-cover bg-center bg-no-repeat rounded-lg"
                style={{
                  backgroundImage: `url(/images/bloc4${index % 4}.png)`,
                }}
              ></div>
              <div className="mt-3 text-red-500 text-xs md:text-base lg:text-lg xl:text-xl">{item.category}</div>
              <div className="mt-3 font-semibold text-brown text-base md:text-xl lg:text-2xl xl:text-3xl">
                {item.tagline}
              </div>
              <div className="mt-3 text-sm md:text-base lg:text-lg text-brown border-l border-l-gray pl-3 line-clamp-3 lg:line-clamp-2">
                {item.description}
              </div>
            </Link>
          ))}
        </div>
        <div className="container mx-auto md:hidden">
          <Link
            href="/"
            className="text-white bg-red-500 py-3 px-5 rounded-full block text-center mt-10 app-text-btn"
          >
            {pageData.bloc_3.more_info}
          </Link>
        </div>
      </section>
    </>
  );
}
