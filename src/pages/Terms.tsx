import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">
                Podmienky používania
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  <strong>Posledná aktualizácia:</strong>{" "}
                  {new Date().toLocaleDateString("sk-SK")}
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. Všeobecné ustanovenia
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Tieto podmienky používania (ďalej len "Podmienky") upravujú
                    používanie webovej stránky{" "}
                    <strong>{siteConfig.name}</strong> (ďalej len "webová
                    stránka") prevádzkovanej spoločnosťou {siteConfig.name}.
                  </p>
                  <p className="text-gray-700">
                    Používaním tejto webovej stránky súhlasíte s týmito
                    podmienkami. Ak s nimi nesúhlasíte, neodporúčame používať
                    našu webovú stránku.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. Informácie o prevádzkovateľovi
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
                    <p className="text-gray-700 mb-2">
                      <strong>IČO:</strong>{" "}
                      {siteConfig.business?.ico || "Bude doplnené"}
                    </p>
                    <p className="text-gray-700">
                      <strong>DIČ:</strong>{" "}
                      {siteConfig.business?.dic || "Bude doplnené"}
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. Účel webovej stránky
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Naša webová stránka slúži na:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Prezentáciu našich služieb a produktov</li>
                    <li>Poskytovanie informácií o našej raňajkárni</li>
                    <li>Komunikáciu s našimi zákazníkmi</li>
                    <li>Zobrazenie menu a cien</li>
                    <li>
                      Zobrazenie otváracích hodín a kontaktných informácií
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Používanie webovej stránky
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Pri používaní našej webovej stránky sa zaväzujete:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Nepoužívať webovú stránku na nezákonné účely</li>
                    <li>
                      Nepoškodzovať alebo narúšať funkčnosť webovej stránky
                    </li>
                    <li>Nepokúšať sa o neoprávnený prístup k našim systémom</li>
                    <li>Rešpektovať autorské práva a duševné vlastníctvo</li>
                    <li>
                      Nepoužívať automatizované nástroje na zber údajov bez
                      nášho súhlasu
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Intelektuálne vlastníctvo
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Všetok obsah na tejto webovej stránke, vrátane textov,
                    obrázkov, loga, dizajnu a softvéru, je chránený autorskými
                    právami a inými právami duševného vlastníctva.
                  </p>
                  <p className="text-gray-700">
                    Bez nášho písomného súhlasu nie je dovolené kopírovať,
                    reprodukovať, distribuovať alebo inak využívať tento obsah.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Obmedzenie zodpovednosti
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Naša spoločnosť sa snaží zabezpečiť presnosť a aktuálnosť
                    informácií na webovej stránke, ale nezaručuje ich úplnosť
                    alebo presnosť.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Webová stránka je poskytovaná "tak ako je" bez akýchkoľvek
                    záruk. Naša spoločnosť nezodpovedá za:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Prípadné chyby alebo nepresnosti v informáciách</li>
                    <li>Prerušenie služby webovej stránky</li>
                    <li>Škody vzniknuté používaním webovej stránky</li>
                    <li>Virusy alebo škodlivý kód</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. Externé odkazy
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Naša webová stránka môže obsahovať odkazy na externé webové
                    stránky. Tieto odkazy sú poskytované pre vaše pohodlie, ale
                    naša spoločnosť:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Nekontroluje obsah externých stránok</li>
                    <li>Nezodpovedá za obsah externých stránok</li>
                    <li>Neschvaľuje nevyhnutne obsah externých stránok</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    8. Ochrana osobných údajov
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Spracúvanie vašich osobných údajov sa riadi našou
                    <a
                      href="/privacy-policy"
                      className="text-orange-600 hover:text-orange-700 underline"
                    >
                      {" "}
                      Politikou ochrany osobných údajov
                    </a>
                    .
                  </p>
                  <p className="text-gray-700">
                    Používaním našej webovej stránky súhlasíte so spracúvaním
                    vašich osobných údajov v súlade s touto politikou.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    9. Cookies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Naša webová stránka používa cookies na zlepšenie
                    používateľského zážitku. Podrobné informácie o používaní
                    cookies nájdete v našej
                    <a
                      href="/cookies"
                      className="text-orange-600 hover:text-orange-700 underline"
                    >
                      {" "}
                      Politike cookies
                    </a>
                    .
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    10. Rezervácie a objednávky
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Ak naša webová stránka umožňuje online rezervácie alebo
                    objednávky:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      Všetky rezervácie sú potvrdzované emailom alebo telefónom
                    </li>
                    <li>
                      Vyhradzujeme si právo odmietnuť rezerváciu z dôvodu
                      kapacity
                    </li>
                    <li>Ceny sú uvedené bez DPH, ak nie je uvedené inak</li>
                    <li>Platba sa uskutočňuje priamo v prevádzke</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    11. Stravovacie služby
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Naša raňajkáreň poskytuje stravovacie služby v súlade s
                    platnými predpismi Slovenskej republiky:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Dodržiavame hygienické normy a predpisy</li>
                    <li>Používame kvalitné suroviny</li>
                    <li>Informujeme o alergénoch na požiadanie</li>
                    <li>
                      Dodržiavame otváracie hodiny uvedené na webovej stránke
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    12. Riešenie sporov
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Všetky spory vzniknuté v súvislosti s používaním tejto
                    webovej stránky sa riešia:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Primárne mimosúdne cestou</li>
                    <li>
                      Prípadne súdom príslušným podľa sídla našej spoločnosti
                    </li>
                    <li>V súlade s právnym poriadkom Slovenskej republiky</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    13. Zmeny podmienok
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Vyhradzujeme si právo kedykoľvek zmeniť tieto podmienky. O
                    zmenách vás budeme informovať:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Prostredníctvom oznamu na webovej stránke</li>
                    <li>Emailom, ak máme vašu emailovú adresu</li>
                    <li>Zmeny nadobúdajú účinnosť ich zverejnením</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    14. Kontakt
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Ak máte otázky týkajúce sa týchto podmienok, kontaktujte
                    nás:
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
                    15. Záverečné ustanovenia
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Tieto podmienky sú platné a účinné od dátuma ich
                    zverejnenia. Ak je niektoré ustanovenie týchto podmienok
                    neplatné alebo neúčinné, ostatné ustanovenia zostávajú v
                    platnosti.
                  </p>
                  <p className="text-gray-700">
                    Tieto podmienky sú zostavené v súlade s právnym poriadkom
                    Slovenskej republiky a príslušnými európskymi predpismi.
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

export default Terms;
