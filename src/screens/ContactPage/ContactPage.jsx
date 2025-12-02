import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "lucide-react";
import emailjs from "@emailjs/browser";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "offerte",
    package: "pakket1",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    try {
      // EmailJS configuratie
      const serviceId = "service_b251igg"; // Vervang met je EmailJS Service ID
      const templateId = "template_r2avbsi"; // Vervang met je EmailJS Template ID
      const publicKey = "yGM9S8p7l7IY45Di-"; // Vervang met je EmailJS Public Key

      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        package: formData.subject === "offerte" ? formData.package : "N/A",
        message: formData.message,
        to_email: "info@ecoruim.be", // Jouw email adres
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({ submitting: false, success: true, error: false });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "offerte",
        package: "pakket1",
        message: "",
      });

      // Reset success message na 5 seconden
      setTimeout(() => {
        setStatus({ submitting: false, success: false, error: false });
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({ submitting: false, success: false, error: true });
      
      // Reset error message na 5 seconden
      setTimeout(() => {
        setStatus({ submitting: false, success: false, error: false });
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-[#0c3065] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Contact
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Heeft u vragen of wilt u een vrijblijvende offerte aanvragen? Neem gerust contact
              met ons op. We helpen u graag verder!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-[#0c3065] text-2xl md:text-3xl font-bold mb-6">
                  Stuur ons een Bericht
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2678d1] focus:border-transparent transition-all"
                      placeholder="Uw naam"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2678d1] focus:border-transparent transition-all"
                        placeholder="uw@email.be"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefoon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2678d1] focus:border-transparent transition-all"
                        placeholder="0488 88 88 50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Onderwerp *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2678d1] focus:border-transparent transition-all"
                    >
                      <option value="offerte">Offerte aanvragen</option>
                      <option value="vraag">Algemene vraag</option>
                      <option value="afspraak">Afspraak maken</option>
                      <option value="klacht">Klacht</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>

                  {formData.subject === "offerte" && (
                    <div className="animate-in fade-in duration-300">
                      <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                        Kies uw pakket *
                      </label>
                      <select
                        id="package"
                        name="package"
                        required
                        value={formData.package}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2678d1] focus:border-transparent transition-all"
                      >
                        <option value="pakket1">Pakket 1: Basis Ontruiming</option>
                        <option value="pakket2">Pakket 2: Ontruiming + Poetsen</option>
                        <option value="pakket3">Pakket 3: All-in Service</option>
                        <option value="custom">Gepersonaliseerde Service</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Bericht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2678d1] focus:border-transparent transition-all resize-none"
                      placeholder="Vertel ons meer over uw situatie..."
                    />
                  </div>

                  {status.success && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 text-sm font-medium">
                        ✓ Uw bericht is succesvol verzonden! We nemen zo spoedig mogelijk contact met u op.
                      </p>
                    </div>
                  )}

                  {status.error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 text-sm font-medium">
                        ✗ Er is een fout opgetreden bij het verzenden. Probeer het opnieuw of neem telefonisch contact op.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full px-8 py-4 rounded-lg shadow-md bg-[#2678d1] hover:bg-[#1e5fa3] hover:shadow-lg active:scale-95 transition-all duration-200 text-white font-semibold text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status.submitting ? "Bezig met verzenden..." : "Verstuur Bericht"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#e8f2ff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-6 h-6 text-[#2678d1]" />
                    </div>
                    <div>
                      <h3 className="text-[#0c3065] text-lg font-bold mb-2">Telefoon</h3>
                      <a
                        href="tel:+32486973250"
                        className="text-gray-700 hover:text-[#2678d1] transition-colors"
                      >
                        0486 97 32 50
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Ma-Vr: 8:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#e8f2ff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MailIcon className="w-6 h-6 text-[#2678d1]" />
                    </div>
                    <div>
                      <h3 className="text-[#0c3065] text-lg font-bold mb-2">E-mail</h3>
                      <a
                        href="mailto:info@ecoruim.be"
                        className="text-gray-700 hover:text-[#2678d1] transition-colors break-all"
                      >
                        info@ecoruim.be
                      </a>
                      <p className="text-sm text-gray-600 mt-1">We reageren binnen 24 uur</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#e8f2ff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-6 h-6 text-[#2678d1]" />
                    </div>
                    <div>
                      <h3 className="text-[#0c3065] text-lg font-bold mb-2">Werkgebied</h3>
                      <p className="text-gray-700">Heel Vlaanderen</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Antwerpen, Gent, Brugge, Leuven en omliggende gemeenten
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#e8f2ff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="w-6 h-6 text-[#2678d1]" />
                    </div>
                    <div>
                      <h3 className="text-[#0c3065] text-lg font-bold mb-2">Openingstijden</h3>
                      <div className="space-y-1 text-sm text-gray-700">
                        <p>Maandag - Vrijdag: 8:00 - 18:00</p>
                        <p>Zaterdag: 9:00 - 17:00</p>
                        <p>Zondag: Op afspraak</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-[#e8f2ff] border-0 rounded-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-[#0c3065] text-2xl md:text-3xl font-bold mb-4">
                Liever Direct Contact?
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                Bel ons voor een snel antwoord op al uw vragen of om direct een afspraak in te plannen.
              </p>
              <a href="tel:+32486973250">
                <Button className="px-8 py-4 rounded-lg shadow-md bg-[#2678d1] hover:bg-[#1e5fa3] hover:shadow-lg active:scale-95 transition-all duration-200 text-white font-semibold text-base focus:ring-2 focus:ring-[#2678d1] focus:ring-offset-2">
                  Bel Nu: 0486 97 32 50
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};
