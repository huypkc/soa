import Image from "next/image";
import SamplePage from "@/mock/SamplePage.json";

type Props = {
  pageData: typeof SamplePage;
};

export function Bloc6({ pageData }: Props) {
  return (
    <>
      <section className="container mx-auto mt-10">
        <div className="flex flex-row justify-center gap-5 flex-wrap">
          {pageData.bloc_4.pictos.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-1 text-brown w-[calc(50%-0.625rem)] sm:w-[calc(33%-0.675rem)] lg:w-[calc(20%-1rem)]"
            >
              <Image
                src={`/images/auth (${index + 1}).svg`}
                alt=""
                width={40}
                height={40}
                className="bg-blue rounded-full p-2"
              />
              <div className="font-medium mt-2 text-base md:text-lg lg:text-xl xl:text-2xl">{item.title}</div>
              <div className="text-center text-sm lg:text-base xl:text-lg">{item.description}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
