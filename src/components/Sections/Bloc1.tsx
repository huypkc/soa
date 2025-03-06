import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons/Icons";
import SamplePage from "@/mock/SamplePage.json";
import classNames from "classnames";
type Props = {
  pageData: typeof SamplePage;
};
export function Bloc1({ pageData }: Props) {
  return (
    <>
      <section className="container mx-auto px-4 pt-20">
        <div className="flex justify-center items-center gap-5">
          <hr className="flex-1 border-2 border-gray hidden lg:flex" />
          <div className="title text-orange1 text-center lg:w-3/4">
            {pageData.bloc_1.title}
          </div>
          <hr className="flex-1 border-2 border-gray hidden lg:flex" />
        </div>
        <div className="mt-5 w-full subtitle text-center text-brown">
          {pageData.bloc_1.subtitle}
        </div>
        <div className="mt-5 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pageData.bloc_1.cases.map((item, index) => (
              <div
                className={classNames("flex flex-col", {
                  "md:mt-10": index !== 1,
                })}
                key={index}
              >
                <div
                  className="w-full aspect-video md:aspect-[0.8] bg-cover bg-center bg-no-repeat rounded-xl"
                  style={{
                    backgroundImage: `url(/images/bloc_1_${index + 1}.png)`,
                  }}
                ></div>
                <div className="text-orange1 app-text-12 mt-3 font-medium">
                  {item.category}
                </div>
                <div className="text-brown app-text-16 mt-3 font-medium">
                  {item.tagline}
                </div>
                <div className="text-brown app-text-14 mt-3 line-clamp-3 lg:line-clamp-2">
                  {item.description}
                </div>
                <div className="mt-3">
                  <Link
                    href="/"
                    className={classNames(
                      "text-brown border border-brown rounded-full py-2 px-5 inline-flex items-center font-medium",
                      "app-text-14"
                    )}
                  >
                    {item.cta}
                    <div className="[&_svg]:stroke-blue text-blue">
                      <ArrowUpRight />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
