import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">
                Ochrana osobných údajov
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  <strong>Posledná aktualizácia:</strong>{" "}
                  {new Date().toLocaleDateString("sk-SK")}
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. Úvodné ustanovenia
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Spoločnosť <strong>{siteConfig.name}</strong> (ďalej len
                    "my", "nás", "naša spoločnosť") rešpektuje vaše súkromie a
                    zaväzuje sa chrániť vaše osobné údaje v súlade s nariadením
                    Európskeho parlamentu a Rady (EÚ) 2016/679 o ochrane
                    fyzických osôb pri spracúvaní osobných údajov (GDPR) a
                    zákonom č. 18/2018 Z.z. o ochrane osobných údajov.
                  </p>
                  <p className="text-gray-700">
                    Táto politika ochrany osobných údajov vysvetľuje, ako
                    zhromažďujeme, používame a chránime vaše osobné údaje pri
                    používaní našej webovej stránky.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. Správca osobných údajov
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>Názov:</strong> {siteConfig.name}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Adresa:</strong>{" "}
                      {siteConfig.contact.address.street},{" "}
                      {siteConfig.contact.address.city}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Email:</strong> {siteConfig.contact.email}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Telefón:</strong> {siteConfig.contact.phone}
                    </p>
                    <p className="text-gray-700">
                      <strong>IČO:</strong>{" "}
                      {siteConfig.business?.ico || "Bude doplnené"}
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. Aké osobné údaje zhromažďujeme
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Môžeme zhromažďovať nasledujúce typy osobných údajov:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      <strong>Kontaktné údaje:</strong> meno, email, telefónne
                      číslo
                    </li>
                    <li>
                      <strong>Technické údaje:</strong> IP adresa, typ
                      prehliadača, operačný systém
                    </li>
                    <li>
                      <strong>Údaje o používaní:</strong> stránky, ktoré
                      navštívite, čas strávený na stránke
                    </li>
                    <li>
                      <strong>Cookies:</strong> údaje uložené vo vašom
                      prehliadači
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Účel spracúvania osobných údajov
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Vaše osobné údaje spracúvame na nasledujúce účely:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Poskytovanie a zlepšovanie našich služieb</li>
                    <li>Komunikácia s vami a odpovedanie na vaše otázky</li>
                    <li>
                      Analýza používania webovej stránky na zlepšenie
                      používateľského zážitku
                    </li>
                    <li>Dodržiavanie právnych povinností</li>
                    <li>Marketingové účely (len s vaším súhlasom)</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Právny základ spracúvania
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Vaše osobné údaje spracúvame na základe:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      <strong>Váš súhlas</strong> - pre marketingové účely a
                      cookies
                    </li>
                    <li>
                      <strong>Oprávnený záujem</strong> - pre zlepšovanie našich
                      služieb
                    </li>
                    <li>
                      <strong>Právna povinnosť</strong> - pre dodržiavanie
                      zákonných požiadaviek
                    </li>
                    <li>
                      <strong>Plnenie zmluvy</strong> - pre poskytovanie našich
                      služieb
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Doba uchovávania údajov
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Vaše osobné údaje uchovávame len po dobu nevyhnutnú na
                    splnenie účelov, na ktoré boli zhromaždené:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      <strong>Kontaktné údaje:</strong> 3 roky od posledného
                      kontaktu
                    </li>
                    <li>
                      <strong>Technické údaje:</strong> 2 roky
                    </li>
                    <li>
                      <strong>Cookies:</strong> podľa typu cookie (1 mesiac až 2
                      roky)
                    </li>
                    <li>
                      <strong>Účtovné údaje:</strong> 10 rokov (podľa zákona)
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. Zdieľanie údajov s tretími stranami
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Vaše osobné údaje môžeme zdieľať s:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      <strong>Poskytovateľmi služieb:</strong> hosting, analýza
                      webových stránok
                    </li>
                    <li>
                      <strong>Právnymi orgánmi:</strong> ak to vyžaduje zákon
                    </li>
                    <li>
                      <strong>Obchodnými partnermi:</strong> len s vaším
                      výslovným súhlasom
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Všetci naši partneri sú povinní chrániť vaše údaje v súlade
                    s GDPR.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    8. Vaše práva
                  </h2>
                  <p className="text-gray-700 mb-4">Máte právo na:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      <strong>Prístup k údajom</strong> - získať informácie o
                      spracúvaní vašich údajov
                    </li>
                    <li>
                      <strong>Opravu</strong> - opraviť nesprávne alebo neúplné
                      údaje
                    </li>
                    <li>
                      <strong>Vymazanie</strong> - požiadať o vymazanie vašich
                      údajov
                    </li>
                    <li>
                      <strong>Obmedzenie spracúvania</strong> - obmedziť spôsob
                      spracúvania
                    </li>
                    <li>
                      <strong>Prenosnosť</strong> - získať vaše údaje v
                      štruktúrovanom formáte
                    </li>
                    <li>
                      <strong>Námietku</strong> - namietať proti spracúvaniu
                    </li>
                    <li>
                      <strong>Odvolanie súhlasu</strong> - kedykoľvek odvolať
                      súhlas
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    9. Bezpečnosť údajov
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Implementovali sme primerané technické a organizačné
                    opatrenia na ochranu vašich osobných údajov pred
                    neoprávneným prístupom, zmenou, zverejnením alebo zničením.
                  </p>
                  <p className="text-gray-700">
                    Tieto opatrenia zahŕňajú šifrovanie, pravidelné zálohovanie
                    a prístupové kontroly.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    10. Cookies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Naša webová stránka používa cookies na zlepšenie
                    používateľského zážitku. Podrobné informácie o cookies
                    nájdete v našej{" "}
                    <a
                      href="/cookies"
                      className="text-orange-600 hover:text-orange-700 underline"
                    >
                      Politike cookies
                    </a>
                    .
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    11. Kontakt
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Ak máte otázky týkajúce sa ochrany osobných údajov,
                    kontaktujte nás:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>Email:</strong> {siteConfig.contact.email}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Telefón:</strong> {siteConfig.contact.phone}
                    </p>
                    <p className="text-gray-700">
                      <strong>Adresa:</strong>{" "}
                      {siteConfig.contact.address.street},{" "}
                      {siteConfig.contact.address.city}
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    12. Zmeny tejto politiky
                  </h2>
                  <p className="text-gray-700">
                    Vyhradzujeme si právo aktualizovať túto politiku ochrany
                    osobných údajov. O významných zmenách vás budeme informovať
                    prostredníctvom našej webovej stránky alebo emailom.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
