import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">
                Politika cookies
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  <strong>Posledná aktualizácia:</strong>{" "}
                  {new Date().toLocaleDateString("sk-SK")}
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. Čo sú cookies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Cookies sú malé textové súbory, ktoré sa ukladajú vo vašom
                    prehliadači pri návšteve webovej stránky. Pomáhajú nám
                    zlepšovať funkčnosť stránky a poskytovať vám lepší
                    používateľský zážitok.
                  </p>
                  <p className="text-gray-700">
                    Cookies môžu byť dočasné (session cookies) alebo trvalé
                    (persistent cookies), v závislosti od doby ich uchovávania.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. Ako používame cookies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Naša webová stránka používa cookies na nasledujúce účely:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      <strong>Nevyhnutné cookies:</strong> Pre základnú
                      funkčnosť stránky
                    </li>
                    <li>
                      <strong>Funkčné cookies:</strong> Pre zapamätanie vašich
                      preferencií
                    </li>
                    <li>
                      <strong>Analytické cookies:</strong> Pre analýzu
                      návštevnosti a zlepšenie stránky
                    </li>
                    <li>
                      <strong>Marketingové cookies:</strong> Pre personalizované
                      reklamy (len s vaším súhlasom)
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. Typy cookies, ktoré používame
                  </h2>

                  <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Nevyhnutné cookies
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Tieto cookies sú nevyhnutné pre správne fungovanie
                        webovej stránky. Bez nich by stránka nemohla fungovať
                        správne.
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>
                          <strong>sidebar:state</strong> - zapamätáva stav
                          bočného panelu (7 dní)
                        </li>
                        <li>
                          <strong>session cookies</strong> - pre správu
                          prihlásenia a bezpečnosť
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Funkčné cookies
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Tieto cookies zapamätávajú vaše preferencie a
                        nastavenia.
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>
                          <strong>language</strong> - zapamätáva váš jazyk (1
                          rok)
                        </li>
                        <li>
                          <strong>theme</strong> - zapamätáva váš preferovaný
                          vzhľad (1 rok)
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Analytické cookies
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Pomáhajú nám pochopiť, ako používate našu stránku.
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>
                          <strong>Google Analytics</strong> - analýza
                          návštevnosti (2 roky)
                        </li>
                        <li>
                          <strong>Vercel Analytics</strong> - výkonnostné
                          metriky (1 rok)
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Marketingové cookies
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Používajú sa na personalizované reklamy a obsah.
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>
                          <strong>Facebook Pixel</strong> - sledovanie konverzií
                          (90 dní)
                        </li>
                        <li>
                          <strong>Instagram</strong> - pre Instagram feed (1
                          rok)
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Cookies tretích strán
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Naša webová stránka môže obsahovať cookies od tretích strán:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Google Analytics
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Používa sa na analýzu návštevnosti. Podrobnosti:
                          <a
                            href="https://policies.google.com/privacy"
                            className="text-orange-600 hover:text-orange-700 underline ml-1"
                          >
                            Google Privacy Policy
                          </a>
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Vercel Analytics
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Používa sa na sledovanie výkonu stránky. Podrobnosti:
                          <a
                            href="https://vercel.com/legal/privacy-policy"
                            className="text-orange-600 hover:text-orange-700 underline ml-1"
                          >
                            Vercel Privacy Policy
                          </a>
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Instagram
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Používa sa pre Instagram feed. Podrobnosti:
                          <a
                            href="https://help.instagram.com/519522125107875"
                            className="text-orange-600 hover:text-orange-700 underline ml-1"
                          >
                            Instagram Privacy Policy
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Správa cookies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Môžete spravovať cookies niekoľkými spôsobmi:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Nastavenia prehliadača
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Väčšina prehliadačov vám umožňuje:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Zobraziť, ktoré cookies sú uložené</li>
                        <li>Vymazať existujúce cookies</li>
                        <li>Blokovať budúce cookies</li>
                        <li>Nastaviť upozornenia pred uložením cookies</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Návody pre populárne prehliadače
                      </h3>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>
                          <strong>Chrome:</strong> Nastavenia → Pokročilé →
                          Súkromie a bezpečnosť → Cookies
                        </li>
                        <li>
                          <strong>Firefox:</strong> Možnosti → Súkromie a
                          bezpečnosť → Cookies
                        </li>
                        <li>
                          <strong>Safari:</strong> Preferencie → Súkromie →
                          Cookies
                        </li>
                        <li>
                          <strong>Edge:</strong> Nastavenia → Cookies a
                          povolenia stránok
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Dôsledky vypnutia cookies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Ak vypnete cookies, môže to ovplyvniť funkčnosť našej
                    webovej stránky:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Niektoré funkcie nemusí fungovať správne</li>
                    <li>Vaše preferencie sa nebudú zapamätávať</li>
                    <li>
                      Nemusíme byť schopní poskytovať personalizovaný obsah
                    </li>
                    <li>Analýza návštevnosti bude obmedzená</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. Váš súhlas s cookies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Pri prvej návšteve našej webovej stránky sa zobrazí banner s
                    informáciami o cookies a možnosťou udeliť súhlas.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Môžete kedykoľvek zmeniť svoje nastavenia cookies:
                  </p>
                  <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                    <button
                      onClick={() => {
                        // This would trigger the cookie consent modal
                        localStorage.removeItem("cookie-consent");
                        window.location.reload();
                      }}
                      className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors"
                    >
                      Zmeniť nastavenia cookies
                    </button>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    8. Aktualizácie tejto politiky
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Túto politiku cookies môžeme aktualizovať v súvislosti so
                    zmenami v našich službách alebo právnych požiadavkách.
                  </p>
                  <p className="text-gray-700">
                    O významných zmenách vás budeme informovať prostredníctvom
                    oznamu na webovej stránke alebo emailom.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    9. Kontakt
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Ak máte otázky týkajúce sa cookies alebo tejto politiky,
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
                    10. Ďalšie informácie
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Pre viac informácií o cookies a ochrane súkromia navštívte:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      <a
                        href="https://www.uoou.sk"
                        className="text-orange-600 hover:text-orange-700 underline"
                      >
                        Úrad na ochranu osobných údajov SR
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ec.europa.eu/info/law/law-topic/data-protection_sk"
                        className="text-orange-600 hover:text-orange-700 underline"
                      >
                        Európska komisia - Ochrana údajov
                      </a>
                    </li>
                    <li>
                      <a
                        href="/privacy-policy"
                        className="text-orange-600 hover:text-orange-700 underline"
                      >
                        Naša politika ochrany osobných údajov
                      </a>
                    </li>
                  </ul>
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

export default Cookies;
