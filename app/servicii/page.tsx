import Link from "next/link";
import Image from "next/image";

export default function Servicii() {
  const services = [
    {
      image: "/image00013.png",
      alt: "Programul saptamanii",
      description:
        "Poti vedea rogramul saptamanii tale dintr-o singura privire",
    },
    {
      image: "/image00011.png",
      alt: "Elevii tai",
      description: "Ai toti elevii tai intr-un singur loc",
    },
    {
      image: "/image00009.png",
      alt: "Informatii elevi",
      description:
        "Pentru fiecare elev ai fiecare informatie de care ai nevoie: - lectii efectuate sau viitoare - prezenta - plati - note pentru a-ti nota lectie - detalii despre respectiva lectie",
    },
    {
      image: "/image00008.png",
      alt: "Numarul de lectii",
      description: "Poti introduce numarul de lectii plante de elev",
    },
    {
      image: "/image00006.png",
      alt: "Varianta PRO",
      description:
        "Varianta PRO iti ofera posibilitatea de a avea si un calendar view si posibilitatea de a trimite email-uri pentru eficienta in organizarea programului",
    },
  ];

  return (
    <>
      <main className="w-full relative">
        {/* Services Section with Background */}
        <section className="relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/desktop1.svg"
              alt="Background"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="relative z-10">
            {/* Navigation */}
            <header className="relative z-50 px-30 py-10">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative h-14 w-48">
                  <Image
                    src="/logowithname.svg"
                    alt="Mentoro"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </Link>

                {/* Navigation Links */}
                <nav className="flex items-center gap-16">
                  <Link
                    href="/"
                    className="text-xl text-primary patrick-hand-regular hover:text-accent transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/servicii"
                    className="text-xl text-primary patrick-hand-regular hover:text-accent transition-colors"
                  >
                    Servicii
                  </Link>
                  <Link
                    href="/planuri"
                    className="text-xl text-primary patrick-hand-regular hover:text-accent transition-colors"
                  >
                    Planuri
                  </Link>
                  <Link
                    href="/contact"
                    className="text-xl text-primary patrick-hand-regular hover:text-accent transition-colors"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </header>

            {/* Services Content */}
            <div className="relative z-10 py-10 px-30">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl text-primary patrick-hand-regular mb-16">
                  Serviciile pe care le oferim
                </h1>

                <div className="flex justify-center gap-10 pb-8">
                  {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center">
                      {/* Screenshot */}
                      <div className="relative w-40 h-80 mb-4 border-2 border-accent rounded-4xl overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.alt}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Description */}
                      <p className="text-accent text-xs montserrat-regular w-40">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="relative z-20 w-full bg-[#2C99B3] text-white px-20 py-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="space-y-3">
            <p className="text-lg patrick-hand-regular">Contactează-ne</p>
            <div className="space-y-2 text-sm montserrat-regular">
              <div className="flex items-center gap-2">
                <span>Instagram: meditoro.ro</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Email: echipa.meditoro@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Phone: +40745610851</span>
              </div>
            </div>
          </div>

          <div className="relative h-16 w-48">
            <Image
              src="/logowithname.svg"
              alt="Mentoro"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </footer>
    </>
  );
}
