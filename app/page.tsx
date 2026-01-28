import Link from "next/link";
import Image from "next/image";
import {
  Download,
  Clock,
  CreditCard,
  ClipboardCheck,
  Calendar,
  CheckCircle,
  XCircle,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen relative">
        {/* Hero Section with Background */}
        <section className="relative overflow-hidden">
          {/* Background image for hero */}
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
                    href="#home"
                    className="text-xl text-primary patrick-hand-regular hover:text-accent transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="#servicii"
                    className="text-xl text-primary patrick-hand-regular hover:text-accent transition-colors"
                  >
                    Servicii
                  </Link>
                  <Link
                    href="#planuri"
                    className="text-xl text-primary patrick-hand-regular hover:text-accent transition-colors"
                  >
                    Planuri
                  </Link>
                  <Link
                    href="#contact"
                    className="text-xl text-primary patrick-hand-regular hover:text-accent transition-colors"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </header>

            {/* Hero Content */}
            <div className="relative z-10 min-h-1/2 items-center flex px-30 py-15">
              <div className="max-w-7xl w-full grid grid-cols-2 items-center gap-16">
                {/* Left side - Hero text and CTA */}
                <div className="space-y-8">
                  {/* Hero text image */}
                  <div className="relative w-full h-48">
                    <Image
                      src="/herotext.png"
                      alt="Noi facem predarea mai ușoară pentru +ține"
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>

                  {/* Subtitle text */}
                  <div className="space-y-2">
                    <p className="text-accent text-lg montserrat-regular">
                      Organizează-ți programul și ține evidența elevilor tăi,
                    </p>
                    <p className="text-accent text-lg montserrat-regular">
                      totul dintr-o singură aplicație
                    </p>
                    <p className="text-accent text-lg montserrat-regular">
                      Cu Meditoro poți deveni profesorul viselor tale
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button className="px-6 py-3 bg-accent text-white rounded-xl montserrat-regular text-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Descarcă aplicația
                  </button>
                </div>

                {/* Right side - Phone image */}
                <div className="flex justify-center">
                  <div className="relative w-full" style={{ height: "500px" }}>
                    <Image
                      src="/phone.png"
                      alt="Meditoro App"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Background */}
        <section className="relative overflow-hidden">
          {/* Background image for features */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/desktop2.svg"
              alt="Background"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="relative z-10 py-20 px-30">
            <div className="max-w-7xl mx-auto p-10">
              {/* Section Title */}
              <h2 className="text-4xl text-center text-primary mb-16 patrick-hand-regular">
                Ce îți oferă{" "}
                <span className="text-accent montserrat-regular tracking-widest">
                  Meditoro
                </span>
              </h2>

              {/* Feature Cards */}
              <div className="grid grid-cols-4 gap-8">
                {/* Card 1 - Time Management */}
                <div className="bg-white/80 backdrop-blur-sm border-2 border-accent rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-accent text-lg montserrat-regular">
                    Eficiență în gestionarea timpului
                  </p>
                </div>

                {/* Card 2 - Payment Management */}
                <div className="bg-white/80 backdrop-blur-sm border-2 border-accent rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-accent text-lg montserrat-regula">
                    Gestionare simplificată a plăților
                  </p>
                </div>

                {/* Card 3 - Student Tracking */}
                <div className="bg-white/80 backdrop-blur-sm border-2 border-accent rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                    <ClipboardCheck className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-accent text-lg montserrat-regula">
                    Evidența tuturor elevilor
                  </p>
                </div>

                {/* Card 4 - Schedule Overview */}
                <div className="bg-white/80 backdrop-blur-sm border-2 border-accent rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-accent text-lg montserrat-regula">
                    Privire de asamblu asupra programului
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshot Section */}
        <section className="relative z-10 w-full bg-white">
          <div className="w-full">
            <div className="relative w-full h-screen">
              <Image
                src="/screenshotsection.png"
                alt="Meditoro screenshot section"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Pricing Section with Background */}
        <section className="relative overflow-hidden">
          {/* Background image for pricing */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/desktop4.svg"
              alt="Background"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="relative z-10 py-20 px-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl text-center text-primary patrick-hand-regular mb-12">
                Planurile pe care le oferim
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-20">
                {/* Free Plan */}
                <div className="bg-white/85 backdrop-blur-sm border-2 border-accent rounded-2xl p-8 shadow-sm">
                  <h3 className="text-accent text-lg patrick-hand-regular mb-4">
                    Varianta gratuită
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl text-accent montserrat-regular">
                      0 ron
                    </span>
                    <span className="text-accent montserrat-regular">
                      /lună
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-accent text-white rounded-xl text-sm montserrat-regular hover:opacity-90 transition-opacity mb-6">
                    Înscrie-te
                  </button>
                  <ul className="space-y-2 text-accent text-sm montserrat-regular">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />5 elevi
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      Email-uri automate
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      Calendar
                    </li>
                  </ul>
                </div>

                {/* Pro Plan */}
                <div className="bg-white/85 backdrop-blur-sm border-2 border-accent rounded-2xl p-8 shadow-sm">
                  <h3 className="text-accent text-lg patrick-hand-regular mb-4">
                    Varianta PRO
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl text-accent montserrat-regular">
                      15 ron
                    </span>
                    <span className="text-accent montserrat-regular">
                      /lună
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-accent text-white rounded-xl text-sm montserrat-regular hover:opacity-90 transition-opacity mb-6">
                    Abonare
                  </button>
                  <ul className="space-y-2 text-accent text-sm montserrat-regular">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Număr de elevi{" "}
                      <span className="font-bold">nelimitati</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Email-uri automate{" "}
                      <span className="font-bold">nelimitate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Calendar
                    </li>
                  </ul>
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
                <Instagram className="w-4 h-4" />
                <span>meditoro.ro</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>echipa.meditoro@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+40745610851</span>
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
