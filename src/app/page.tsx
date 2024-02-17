import '/src/app/globals.css';

export default function Home() {
  const name = Array(20).fill("JIANNA MASMILA");
  const data2 = Array(20).fill("DESIGN - DEVELOPMENT - ART");
  return (
    <main className='bg-white'>
    <div className="text-custom-size items-center justify-center" style={{ fontFamily: 'PanchangBold', color: '#131313' }}>
      {/* First section */}
         <div className="whitespace-nowrap h-full min-h-screen flex items-center">
          <div className="animate-infinite-slider flex w-[calc(250px*10)] items-center">
            {name.map((text, index) => (
              <div
                className="font-bold"
                key={index + name.length}
              >
                {text}{'\u00A0\u00A0'}
              </div>
            ))}
          </div>
        </div>

      {/* Second section */}
      {/* First section */}
      <div className="whitespace-nowrap h-full min-h-screen flex items-center">
          <div className="animate-infinite-slider flex w-[calc(250px*10)] items-center">
            {data2.map((text, index) => (
              <div
                className="font-bold"
                key={index + data2.length}
              >
                {text}{'\u00A0-\u00A0'}
              </div>
            ))}
          </div>
        </div>
    </div>
  </main>
  );
}
