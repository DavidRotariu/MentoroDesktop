import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Contact() {
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
                <h1 className="text-5xl text-primary patrick-hand-regular mb-20">
                  Informatii de contact
                </h1>

                <div className="flex items-center justify-center gap-28 pt-10">
                  {/* Instagram */}
                  <div className="flex flex-col items-center gap-2">
                    <Instagram className="w-20 h-20 text-accent" />
                    <p className="text-accent text-2xl montserrat-regular text-center">
                      meditoro.ro
                    </p>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col items-center gap-2">
                    <Mail className="w-20 h-20 text-accent" />
                    <p className="text-accent text-2xl montserrat-regular text-center">
                      echipa.meditoro@gmail.com
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col items-center gap-2">
                    <Phone className="w-20 h-20 text-accent" />
                    <p className="text-accent text-2xl montserrat-regular text-center">
                      +40745610851
                    </p>
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
