import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card";
import { cardsData } from "../data/cardsData";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-20 bg-backgroundColor h-fit items-center py-[80px] px-[84px]">
      <Head>
        <title>Medias</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="w-[730px] text-center">
        <h1 className="text-[56px] font-bold tracking-[-0.01em] text-DarkBlue leading-[55px]">
          We make creative media that{" "}
          <b className="text-Blue font-bold ">adds value</b>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-y-10 gap-x-[30px]">
        {cardsData.length &&
          cardsData.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              list={card.list}
              description={card.description}
              images={card.images}
            />
          ))}
      </div>
      <button className="h-[60px] w-[315px] bg-DarkBlue text-white rounded-xl font-bold text-[17px] leading-[60px] tracking-[0.2em] pt-[2px]">
        GET STARTED
      </button>
    </div>
  );
};

export default Home;
