import Image from "next/image";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import { Crosshair, Fishing, Mountain } from "@/components/Icons/Icons";
import { useRef, useState } from "react";
import SamplePage from "@/mock/SamplePage.json";

type Props = {
  pageData: typeof SamplePage;
};

export function Bloc2({ pageData }: Props) {
  const points = pageData.carte_point;
  const { t } = useTranslation(["common"]);
  const [position, setPosition] = useState({ x: "0%", y: "0%" });
  const ref = useRef<HTMLImageElement>(null);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    const { left, top, width, height } =
      ref.current?.getBoundingClientRect() as DOMRect;
    const clickX = ((e.clientX - left) / width) * 100;
    const clickY = ((e.clientY - top) / height) * 100;

    setPosition({
      x: `${50 - clickX}%`,
      y: `${50 - clickY}%`,
    });
  };
  const [selected, setSelected] = useState<
    (typeof SamplePage.carte_point)[0] | null
  >(null);
  const handleChangeCategory = (category: string) => () => {
    console.log(category);
    setSelected(null);
  };
  return (
    <>
      <section className="container mx-auto px-4 pt-20">
        <div className="flex justify-center items-center gap-5">
          <hr className="flex-1 border-2 border-gray" />
          <div className="title text-orange1 text-center">
            {t("TITRE BLOC 2")}
          </div>
          <hr className="flex-1 border-2 border-gray" />
        </div>
        <div className="mt-10 w-full text-center text-xl text-brown flex gap-3 flex-wrap justify-center">
          <button
            className={classNames(
              "[&_svg]:stroke-brown [&_svg]:w-8 flex justify-center items-center gap-2 border border-orange1/50 px-5 rounded-full",
              "app-text-14"
            )}
            onClick={handleChangeCategory("Mountain")}
          >
            <Mountain />
            <span>{t("Activity 1")}</span>
          </button>
          <button
            className={classNames(
              "[&_svg]:stroke-brown [&_svg]:w-8 flex justify-center items-center gap-2 border border-orange1/50 px-5 rounded-full",
              "app-text-14"
            )}
            onClick={handleChangeCategory("Fishing")}
          >
            <Fishing />
            <span>{t("Activity 2")}</span>
          </button>
          <button
            className={classNames(
              "[&_svg]:stroke-brown [&_svg]:w-8 flex justify-center items-center gap-2 border border-orange1/50 px-5 rounded-full",
              "app-text-14"
            )}
            onClick={handleChangeCategory("Crosshair")}
          >
            <Crosshair />
            <span>{t("Activity 3")}</span>
          </button>
        </div>
        <div className="mt-10 w-full aspect-video overflow-hidden">
          <div
            className={classNames(
              "w-full relative transition-transform duration-300",
            )}
            style={{
              transform: `scale(${selected ? 2 : 1}) translate(${
                selected ? position.x : 0
              }, ${selected ? position.y : 0})`,
            }}
            onClick={() => setSelected(null)}
          >
            <Image
              src="/images/map.png"
              alt=""
              width={0}
              height={0}
              className="w-full object-cover"
              sizes="100vw"
              ref={ref}
            />
            {points.map((point, index) => (
              <div
                key={index}
                className={classNames({
                  absolute: true,
                  "border border-orange1 rounded-3xl":
                    point.name === selected?.name,
                })}
                style={{ top: point.top, left: point.left }}
              >
                <div className="relative">
                  <Image
                    src="/images/map_pin.svg"
                    alt=""
                    width={40}
                    height={40}
                    className="cursor-pointer"
                    onClick={(e) => {
                      handleClick(e);
                      setSelected(point);
                    }}
                  />
                  <div
                    className={classNames(
                      "absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full flex items-center justify-center min-w-32 z-10",
                      {
                        hidden: point.name !== selected?.name,
                      }
                    )}
                  >
                    <div className="bg-white p-2 rounded-lg relative">
                      <div className="text-brown font-bold">{point.name}</div>
                      <div className="text-brown">
                        {point.activities.join(", ")}
                      </div>
                      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[5px] border-l-transparent border-t-[6px] border-t-white border-r-[5px] border-r-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
