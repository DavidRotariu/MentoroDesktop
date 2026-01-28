import Link from "next/link";
import Image from "next/image";
import { CheckCircle, XCircle } from "lucide-react";

export default function Planuri() {
  return (
    <>
      <main className="w-full min-h-screen relative">
        {/* Pricing Section with Background */}
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

            {/* Pricing Content */}
            <div className="relative z-10 min-h-screen flex px-30 py-10">
              <div className="max-w-6xl w-full mx-auto">
                <h1 className="text-5xl text-left text-primary patrick-hand-regular mb-16">
                  Planurile pe care le oferim
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Free Plan */}
                  <div className="bg-white/85 backdrop-blur-sm border-2 border-accent rounded-2xl p-8 shadow-sm">
                    <h3 className="text-accent text-2xl patrick-hand-regular mb-4">
                      Varianta gratuită
                    </h3>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-5xl text-accent montserrat-regular font-bold">
                        0 ron
                      </span>
                      <span className="text-accent montserrat-regular text-lg">
                        /lună
                      </span>
                    </div>
                    <button className="w-full px-4 py-3 bg-accent text-white rounded-xl text-lg montserrat-regular hover:opacity-90 transition-opacity mb-8">
                      Înscrie-te
                    </button>
                    <ul className="space-y-3 text-accent text-lg montserrat-regular">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        10 elevi
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-gray-400" />
                        Email-uri automate
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-gray-400" />
                        Calendar
                      </li>
                    </ul>
                  </div>

                  {/* Pro Plan */}
                  <div className="bg-white/85 backdrop-blur-sm border-2 border-accent rounded-2xl p-8 shadow-sm">
                    <h3 className="text-accent text-2xl patrick-hand-regular mb-4">
                      Varianta PRO
                    </h3>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-5xl text-accent montserrat-regular font-bold">
                        15 ron
                      </span>
                      <span className="text-accent montserrat-regular text-lg">
                        /lună
                      </span>
                    </div>
                    <button className="w-full px-4 py-3 bg-accent text-white rounded-xl text-lg montserrat-regular hover:opacity-90 transition-opacity mb-8">
                      Abonare
                    </button>
                    <ul className="space-y-3 text-accent text-lg montserrat-regular">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        Număr de elevi{" "}
                        <span className="font-bold">nelimitati</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        Email-uri automate{" "}
                        <span className="font-bold">nelimitate</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        Calendar
                      </li>
                    </ul>
                  </div>
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
