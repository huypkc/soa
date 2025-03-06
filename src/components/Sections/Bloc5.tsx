import Image from "next/image";
import SamplePage from '@/mock/SamplePage.json';

type Props = {
  pageData: typeof SamplePage;
};

export function Bloc5({ pageData }: Props) {
  return (
    <>
      <section className="container mx-auto mt-10 p-4">
        <div className="flex gap-2 relative">
          <div className="flex-1 z-10 px-4 py-10 md:flex-1 md:p-0 lg:flex-[3]">
            <div className="px-4 py-10 bg-white/60 backdrop-blur-md rounded-2xl shadow-shadow/10 md:p-0">
              <div className="title inline uppercase">
                <div className="text-orange1">
                  {pageData.bloc_4.title}&nbsp;
                  <br className="hidden md:block" />
                  <span className="text-orange1/50">
                    {pageData.bloc_4.subtitle}
                  </span>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-10 gap-3 text-brown">
                <div className="hidden col-span-2 md:flex items-center lg:col-span-1">
                  <hr className="border-t-2 border-t-gray flex flex-1" />
                </div>
                <div className="col-span-10 app-text-16 font-semibold md:col-span-8 border-l-2 border-l-gray pl-3 md:border-none md:pl-0 lg:col-span-9">
                  {pageData.bloc_4.text_title}
                </div>
                <div className="hidden lg:flex lg:col-span-1"></div>
                <div className="col-span-10 md:col-span-10 lg:col-span-9">
                  <div className="text-sm md:text-base xl:text-lg">{pageData.bloc_4.text}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 z-0 md:relative md:flex-1 lg:flex-[2] lg:min-h-96">
            <Image
              src="/images/icream.png"
              alt=""
              width={0}
              height={0}
              className="w-full h-full object-cover md:rounded-xl"
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
