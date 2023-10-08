import Link from 'next/link';
import React from 'react';
import makkahIllustration from '@/assets/imgs/mecca-illustrator.jpg';
import OfertaUmre from '@/components/landing/OfertaUmre';
import idrizTravel from '@/assets/imgs/idriz-travel-umre.jpg';
import Image from 'next/image';
import { Globe, MapPin } from 'lucide-react';
import { contacts, googleMaps, socialNetworks } from '@/util/constants';
import MetaData from '@/components/Metadata';

interface IMyLinkTreeItem {
  icon: React.ReactNode;
  text: string;
  extra?: any;
  link: string;
  target?: '_blank' | '_self';
}

const MyLinkTreeItem = ({
  icon,
  text,
  extra,
  link,
  target = '_blank',
}: IMyLinkTreeItem) => {
  return (
    <div className='z-50 relative hover:scale-105 hover:cursor-pointer shadow-sm hover:shadow-md shadow-cyan-500/50 hover:shadow-cyan-500 bg-blue-500/70 text-wite flex items-center text-center w-full gap-3 sm:w-[600px] h-[48px]  rounded-3xl'>
      <Link
        href={link}
        target={target}
        className='w-full flex flex-row justify-between items-baseline group'
      >
        <div className='text-2xl absolute top-1/4 left-4 text-white group-hover:animate-pulse'>
          {icon}
        </div>
        <p className='w-full text-white text-md sm:text-lg font-bold'>{text}</p>
        <div className='block'>{extra ? <div>extra</div> : null}</div>
      </Link>
    </div>
  );
};

const LinksTree = () => {
  return (
    <>
      <MetaData
        title={'Links'}
        description={'Na kontaktoni ne links tona'}
        keywords={
          'contact umra,umra links,umra instagram,umra facebook,umra website,'
        }
      />
      <section
        className='h-screen w-full flex items-start justify-center overflow-scroll pageMekkaLive px-4 py-8'
        style={{
          backgroundImage: `url(${makkahIllustration.src})`,
        }}
      >
        <div className='flex flex-col justify-center items-center gap-8'>
          <Link href='https://idriztravelumra.com/'>
            <div className='ring rounded-full p-0.5 shadow-teal-300 shadow-md '>
              <Image
                src={idrizTravel}
                alt='Idriz Travel Umre'
                width={125}
                height={125}
                className='rounded-full'
                title='Idriz Travel Umre'
              />
            </div>
          </Link>

          <h1 className='text-white font-hand text-2xl md:text-3xl lg:text-4xl font-bold bg-white/10 px-3 py-2 underline underline-offset-4 rounded-md backdrop-blur'>
            Idriz Travel Umra
          </h1>

          <h2 className='text-black font-poppins text-lg md:text-xl max-w-sm text-center bg-white/30 px-2 py-2 rounded-md backdrop-blur'>
            Agjenci udhëtimesh e fokusuar në shërbimet me Arabinë Saudite: viza,
            umre, përkthime, kurbane.
          </h2>

          <div className='flex flex-col justify-center gap-y-5 w-full'>
            <MyLinkTreeItem
              link='https://idriztravelumra.com'
              text='www.IdrizTravelUmra.com'
              icon={<Globe className='h-6 w-6' />}
            />

            {socialNetworks.map((social) => (
              <MyLinkTreeItem
                key={social.key}
                icon={social.icon}
                link={social.href}
                target='_blank'
                text={social.displayName}
              />
            ))}
            {contacts.map((contact) => (
              <MyLinkTreeItem
                key={contact.key}
                icon={
                  <Image
                    src={contact.icon}
                    alt={contact.key}
                    width={24}
                    height={24}
                  />
                }
                link={contact.href}
                target='_blank'
                text={`${contact.key}: ${contact.displayName}`}
              />
            ))}

            <MyLinkTreeItem
              icon={<MapPin className='text-red-500' />}
              link={googleMaps.link}
              target='_blank'
              text={googleMaps.address1}
            />
          </div>

          <div className='overflow-hidden w-[300px] md:w-[600px] py-10 md:py-20'>
            <OfertaUmre isLinks />
          </div>
        </div>
      </section>
    </>
  );
};

export default LinksTree;
