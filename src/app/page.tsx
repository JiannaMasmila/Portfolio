import Image from 'next/image'
import '/src/app/globals.css'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 bg-white">
      <div className="max-w-5xl w-full flex flex-col items-center justify-center">
        <p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto">
          <code className="animate-marquee infinite text-custom-size font-bold whitespace-nowrap mr-40" style={{ fontFamily: 'PanchangBold', color: '#131313' }}>
            JIANNA MASMILA
          </code>
          <code className="animate-marquee infinite text-custom-size font-bold whitespace-nowrap mr-40" style={{ fontFamily: 'PanchangBold', color: '#131313' }}>
            JIANNA MASMILA
          </code>
          <code className="animate-marquee infinite text-custom-size font-bold whitespace-nowrap mr-40" style={{ fontFamily: 'PanchangBold', color: '#131313' }}>
            JIANNA MASMILA
          </code>
          <code className="animate-marquee infinite text-custom-size font-bold whitespace-nowrap mr-40" style={{ fontFamily: 'PanchangBold', color: '#131313' }}>
            JIANNA MASMILA
          </code>
        </p>
      </div>
    </main>
  )
}
