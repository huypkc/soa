import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "@/components/Header/Header";
import { Bloc1 } from "@/components/Sections/Bloc1";
import { Bloc2 } from "@/components/Sections/Bloc2";
import { Bloc3 } from "@/components/Sections/Bloc3";
import { Bloc4 } from "@/components/Sections/Bloc4";
import { Bloc5 } from "@/components/Sections/Bloc5";
import { Bloc6 } from "@/components/Sections/Bloc6";
import { Bloc7 } from "@/components/Sections/Bloc7";
import { Bloc8 } from "@/components/Sections/Bloc8";
import { Footer } from "@/components/Footer/Footer";
import _data from "@/mock/SamplePage.json";
import axios from "axios";

type Props = {
  pageData: typeof _data;
};

export default function Home({ pageData }: Props) {
  return (
    <>
      <Header pageData={pageData} />
      <main>
        <Bloc1 pageData={pageData} />
        <Bloc2 pageData={pageData} />
        <Bloc3 pageData={pageData} />
        <Bloc4 pageData={pageData} />
        <Bloc5 pageData={pageData} />
        <Bloc6 pageData={pageData} />
        <Bloc7 pageData={pageData} />
        <Bloc8 pageData={pageData} />
      </main>
      <Footer pageData={pageData} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale = "en",
}) => {
  const data = await axios.get(
    `https://api.test.soa-dev.net/api/v1/pages?lang=${locale}`
  );
  const pageData = {
    ...data.data[0],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    carte_point: data.data[0].carte_point.map((point: any) => ({
      ...point,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    })),
  };
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      pageData
    },
  };
};
