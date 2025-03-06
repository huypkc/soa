import Image from "next/image";
import Link from "next/link";
import SamplePage from '@/mock/SamplePage.json';

type Props = {
  pageData: typeof SamplePage;
};

export function Bloc8({ pageData }: Props) {
  return (
    <>
      <section className="mt-10 relative">
        <Image
          src="/images/image_9.png"
          alt=""
          width={0}
          height={0}
          className="w-full aspect-auto"
          sizes="100vw"
        />
        <div className="absolute top-[10%] md:top-1/4 w-full h-[90%] md:h-3/4 flex flex-col items-center text-center px-10">
          <div className="title text-brown text-center">
            {pageData.bloc_6.title}
          </div>
          <div className="title text-brown/60 text-center">
            {pageData.bloc_6.subtitle}
          </div>
          <div className="text-brown text-sm md:text-base lg:text-xl xl:text-2xl">{pageData.bloc_6.text}</div>
          <Link
            href="/"
            className="mt-3 py-2 px-10 bg-orange1 text-white rounded-full text-base lg:text-lg font-medium"
          >
            {pageData.bloc_6.button}
          </Link>
        </div>
      </section>
    </>
  );
}
