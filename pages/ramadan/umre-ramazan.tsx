import PageLayout from "@/components/Layouts/PageLayout";

import { fetchUmraRamadan } from "@/lib/fetching";
import { GetStaticProps } from "next";
import Image from "next/image";
import React from "react";

import imgUmraThumb from "@/assets/imgs/travel-umra-desc-thumb.webp";
import Link from "next/link";

type Props = {
  umra: any;
};

const UmreRamadan = ({ umra }: Props) => {
  const metaImage = umra?.image?.data === null ? imgUmraThumb : umra?.image?.data?.attributes?.formats?.thumbnail?.url;

  const description = `Umre ne muajin e bekuar te ramazanit viti 2024, Idriz Travel umra vjen me oferta per umre nga shqiperia per ne muajin ramazan`;

  return (
    <PageLayout
      title={umra?.title}
      keywords="umra nga shqiperia, umra ramadan, umre ne ramazan, umre nga kosova, umra nga maqedonia"
      imageUrl={metaImage}
      description={description}
    >
      <div className="my-4 px-4 md:px-6  flex flex-col mx-auto max-w-6xl">
        {umra.map((item: any) => {
          return (
            <div key={item.id} className="mb-4 ">
              <h1 className="text-center text-xl md:text-3xl">{item.slogan}</h1>

              <div className="my-6 ramadan-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>

              <div>
                <h1 className="text-center mb-4 text-lg md:text-xl">
                  <strong>Idriz Travel Umra</strong> vjen me oferta per muajin e bekuar te{" "}
                  <strong>Ramazanit 2025</strong>
                </h1>

                <h2>Umre nga Shqiperia - Umre ne Ramazan 2025</h2>
                <div className="max-w-6xl flex flex-col justify-center items-center gap-8 p-6 relative h-full">
                  {/* TODO add the trips of the ramadan here */}
                  {item.umrah_trips.data.map((trip: any) => (
                    <Link key={trip.id} href={`/umra/${trip.attributes.slug}`}>
                      <Image
                        src={trip.attributes.image.data.attributes.url}
                        alt="umra ne ramazan"
                        width={500}
                        height={trip.attributes.image.data.attributes.height}
                        className="object-contain rounded-lg ring-green-400 ring-2 shadow-md hover:scale-105 "
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (props) => {
  const umra = await fetchUmraRamadan();

  if (umra?.data) {
    return {
      props: {
        umra: umra.data.attributes.umreRamadan,
      },
    };
  }

  return {
    notFound: true,
  };
};

export default UmreRamadan;
