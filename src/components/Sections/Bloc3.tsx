import Image from "next/image";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import { useRef, useState } from "react";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import dynamic from "next/dynamic";
import SamplePage from '@/mock/SamplePage.json';

dayjs.extend(isoWeek);

const getCalendarDates = (year: number, month: number) => {
  const startOfMonth = dayjs(`${year}-${month}-01`);
  const endOfMonth = startOfMonth.endOf("month");

  const firstDayOfWeek = startOfMonth.isoWeekday(); // Thứ 2 = 1, ..., CN = 7
  const lastDayOfWeek = endOfMonth.isoWeekday();
  const daysInMonth = startOfMonth.daysInMonth();

  const prevMonthDays = firstDayOfWeek - 1;
  const prevMonthDates = Array.from({ length: prevMonthDays }, (_, i) =>
    startOfMonth.subtract(prevMonthDays - i, "day")
  );

  const currentMonthDates = Array.from({ length: daysInMonth }, (_, i) =>
    startOfMonth.add(i, "day")
  );

  const nextMonthDays = lastDayOfWeek === 7 ? 0 : 7 - lastDayOfWeek;
  const nextMonthDates = Array.from({ length: nextMonthDays }, (_, i) =>
    endOfMonth.add(i + 1, "day")
  );

  return [...prevMonthDates, ...currentMonthDates, ...nextMonthDates];
};

const occupiedDates = [
  "2025-01-28",
  "2025-01-29",
  "2025-02-04",
];

type Props = {
  pageData: typeof SamplePage;
};
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });


export function Bloc3({ pageData }: Props) {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [month, setMonth] = useState(dayjs());
  const calendarDates = getCalendarDates(month.year(), month.month() + 1);
  const { t, i18n } = useTranslation(["common"]);
  return (
    <>
      <section className="container mx-auto px-4 pt-20">
        <div className="flex justify-center items-center gap-5">
          <hr className="flex-1 border-2 border-gray hidden md:flex" />
          <div className="title text-orange1 text-center">
            {pageData.bloc_2.title}
          </div>
          <hr className="flex-1 border-2 border-gray hidden md:flex" />
        </div>
        <div className="mt-10 w-full border border-brown/30 rounded-2xl shadow shadow-shadow/10 py-5 px-5">
          <div className="flex justify-center items-center gap-10">
            <button onClick={() => setMonth(month.subtract(1, "month"))}>
              <Image src="/images/left.svg" alt="" width={12} height={12} />
            </button>
            <div className="text-brown font-semibold app-text-16">
              {month.format("MMM YYYY")}
            </div>
            <button onClick={() => setMonth(month.add(1, "month"))}>
              <Image src="/images/right.svg" alt="" width={12} height={12} />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-3 mt-5">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day, index) => (
                <div
                  key={index}
                  className="text-center font-semibold text-brown app-text-14"
                >
                  {day}
                </div>
              )
            )}
            {calendarDates.map((date, index) => {
              const occupied =
                occupiedDates.indexOf(date.format("YYYY-MM-DD")) > -1;
              return (
                <div
                  key={index}
                  className={classNames(
                    "flex flex-col border border-brown/30 rounded-lg p-2 text-center gap-3 app-text-12",
                    {
                      "border-gray2 bg-gray3 text-gray4":
                        date.month() !== month.month(),
                      "border-orange1 bg-orange3 text-orange1 [&_.day]:text-brown":
                        !occupied && date.month() === month.month(),
                      "border-gray5 text-gray6 [&_.day]:text-gray7": occupied,
                    }
                  )}
                >
                  <div className="font-semibold day">{date.format("D")}</div>
                  <div className="hidden md:block">
                    {date.month() === month.month()
                      ? occupied
                        ? t("Busy")
                        : t("Free")
                      : ""}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full mt-5 grid grid-cols-12 items-center gap-5 text-base md:text-xl xl:text-2xl">
          <div className="col-span-2 text-brown">
            {pageData.bloc_2_2.btn_1[0]}:
          </div>
          <div className="col-span-10">
            <input
              placeholder={pageData.bloc_2_2.btn_1[1]}
              className="w-full border border-brown/30 p-3 rounded-full"
            />
          </div>
          <div className="col-span-2 text-brown">
            {pageData.bloc_2_2.btn_2[0]}:
          </div>
          <div className="col-span-10">
            <input
              placeholder={pageData.bloc_2_2.btn_2[1]}
              className="w-full border border-brown/30 p-3 rounded-full"
            />
          </div>
          <div className="col-span-2 text-brown">
            {pageData.bloc_2_2.btn_3}:
          </div>
          <div className="col-span-10">
            <JoditEditor
              ref={editor}
              value={content}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => setContent(newContent)}
              className="!border !border-brown/30"
              config={{language: i18n.language}}
            />
          </div>
          <div className="col-span-2 text-brown">
            {pageData.bloc_2_2.btn_4[0]}:
          </div>
          <div className="col-span-10">
            <div className="w-full p-3">
              <button className="flex items-center gap-2 whitespace-nowrap">
                <Image src="/images/attach.svg" alt="" width={12} height={12} />
                <span className="text-blue2 font-semibold">
                  {pageData.bloc_2_2.btn_4[1]}
                </span>
                <span className="text-gray7 flex">
                  &nbsp;(*{pageData.bloc_2_2.btn_4[2]})
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between md:justify-end gap-3 app-text-btn">
          <button className="text-brown border border-brown px-10 py-2 rounded-full flex-1 md:flex-none hover:bg-orange1/30 transition-all duration-300">
            {pageData.bloc_2_2.btn_5}
          </button>
          <button className="flex-1 md:flex-none text-white bg-orange2 hover:bg-orange1 border border-orange2 px-10 py-2 rounded-full flex items-center justify-center gap-2">
            {pageData.bloc_2_2.btn_6}
            <Image src="/images/send-2.svg" alt="" width={20} height={20} />
          </button>
        </div>
      </section>
    </>
  );
}
