import React from 'react';
import mapPointer from '../assets/location/markerGodrejGreen.png';
import Button from '../components/button/buttonMain';

const connectivityData = [
  // {
  //   category: "IT & Business Hubs",
  //   items: [
  //     "Electronic City – 8 km",
  //     "Sarjapur Road – 5 km",
  //     "Bellandur – 5 km",
  //     "HSR Layout – 6 km",
  //     "ORR (Outer Ring Road) – 6 km",
  //     "Whitefield – 20 km",
  //     "Marathahalli – 15 km"
  //   ]
  // },
  // {
  //   category: "Transport & Accessibility",
  //   items: [
  //     "Kudlu Gate Bus Stop – 2 km",
  //     "Bommanahalli Metro Station – 4 km",
  //     "Silk Board Junction – 7 km",
  //     "Majestic Railway Station – 18 km",
  //     "Kempegowda International Airport – 55 km"
  //   ]
  // },
  // {
  //   category: "Educational Institutions",
  //   items: [
  //     "Orchids International School – 5 km",
  //     "Vibgyor High School – 6 km",
  //     "National Public School (NPS), HSR – 7 km",
  //     "Delhi Public School (DPS), Electronic City – 9 km",
  //     "Christ Academy – 12 km"
  //   ]
  // },
  // {
  //   category: "Healthcare Facilities",
  //   items: [
  //     "Narayana Multispeciality Hospital – 8 km",
  //     "Cloudnine Hospital, Bellandur – 6 km",
  //     "Manipal Hospital, Bellandur - 5 km"
  //   ]
  // },
  // {
  //   category: "Shopping & Entertainment",
  //   items: [
  //     "Market Square Mall – 8 km",
  //     "Forum Mall, Koramangala – 10 km",
  //     "Central Mall, Bellandur – 7 km"
  //   ]
  // },
  // {
  //   category: "Recreational & Green Spaces",
  //   items: [
  //     "Harlur Lake – 5 km",
  //     "Agara Lake Park – 8 km",
  //     "Kaikondrahalli Lake – 10 km"
  //   ]
  // }
];

const ConnectivityGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16 lg:px-24 py-10 w-full">
    {connectivityData.map((section, idx) => (
      <div key={idx} className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
        <h3 className="text-lg font-semibold text-greengit-700 mb-3 border-b pb-1">
          {section.category}
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export const Location = () => {
  return (
    <section id="Location" className="max-w-full flex flex-col items-center bg-white">
      <div className="w-full flex flex-col md:flex-row items-center py-7 md:py-14 gap-6 md:gap-14">
        {/* Text and Map pointer */}
        <div className="flex flex-col items-center md:items-start w-full px-6 md:pl-[7.5rem] md:justify-between gap-6 text-center md:text-left lg:max-w-lg">
          <div className="flex md:flex-col items-center md:items-start w-full md:px-2 gap-2 md:gap-6 ">
            <div className='flex flex-col items-center md:items-start w-full lg:px-2 gap-3 md:gap-6 '>
              <h1 className="text-3xl md:text-5xl font-subheading font-normal text-black uppercase">Location</h1>
              <div className="flex items-center justify-center md:justify-start">
                <img src={mapPointer} alt="Map Pointer" className="w-3 h-3 md:w-5 md:h-5 mr-2" />
                <p className="text-xs md:text-xl font-body font-medium">On Kanakapura Road, Bengaluru</p>
              </div>
            </div>

            <ol className='text-left font-body text-xs md:text-base list-disc font-medium pl-1 md:pl-5 hidden sm:block space-y-3'>
              <li>Behind Mantri Mall</li>
              <li>Opposite to Mantri Serenity Apartments</li>
              <li>Forum South Bengaluru - 3 mins</li>
              <li>ISKCON - 7 mins</li>
               <li>Doddakallasandra Metro Station - 1 min</li>

            </ol>
          </div>

          <div className="text-center md:text-left w-fit">
            <Button 
              text="Open in Google Maps"
              className="whitespace-nowrap"
              onClick={() => window.open("https://maps.app.goo.gl/4X12rF9rymKgeLbD9", "_blank")}
            />
          </div>
        </div>

        {/* Google Maps Iframe */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl aspect-w-16 aspect-h-9 min-h-[60vh]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62229.16065044307!2d77.47646564863281!3d12.88696970000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f0029a1b103%3A0x887aecaacd328170!2sAssetz%20Codename%20Altitude!5e0!3m2!1sen!2sin!4v1747376559662!5m2!1sen!2sin" 
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* 🟩 Connectivity Section */}
      <div className="w-full max-w-screen-2xl">
        <ConnectivityGrid />
      </div>
    </section>
  );
};
