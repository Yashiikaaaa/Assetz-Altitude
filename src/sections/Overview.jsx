import React from 'react';
import image from '../assets/gallery/micro.jpg';
import Button from '../components/button/buttonMain';

export const Overview = ({ contactmodal, setContactModal }) => {
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-between gap-[20 px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-6 md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <div className="max-w-2xl md:text-base text-sm text-black font-body font-light">
            <p className="font-bold text-lg md:text-xl">
              Assetz Codename Altitude – Luxury 3 BHK Apartments on Kanakapura Road.
            </p>
            <p className="mt-2">
              An 5-acre township with 87 % open space
            </p>

            <ul className="mt-4 text-left list-disc list-inside space-y-1">
              <li><strong>Spacious 3 BHK Apartments</strong> (1,897 - 2,111 sq. ft.)</li>
              <li><strong>468 homes</strong> with 30+ amenities</li>
              <li><strong>Sky terrace design with glass roofing</strong></li>
              <li><strong>Double Heighted Ceilings</strong></li>
              <li><strong>Large Living Balconies upto 125 sq. ft.</strong> </li>
              <li><strong>7 mins from ISKCON</strong> </li>  

              </ul>
          </div>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
            text="Enquire Now!"
            className="mt-4"
            onClick={() => setContactModal(!contactmodal)}
          />
        </div>

        {/* Image Section */}
        <div className="hidden md:flex flex-col items-center">
          <img
            src={image}
            alt="Assetz Altitude"
            className="w-[420px] h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>
    </div>
  );
};
