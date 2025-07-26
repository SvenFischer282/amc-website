import { useState, useEffect } from "react";
import { X, Settings, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    setPreferences(necessaryOnly);
    localStorage.setItem("cookie-consent", JSON.stringify(necessaryOnly));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setShowSettings(false);
    setShowBanner(false);
  };

  const handlePreferenceChange = (
    key: keyof CookiePreferences,
    value: boolean
  ) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  if (!showBanner && !showSettings) {
    return null;
  }

  return (
    <>
      {/* Cookie Consent Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  <h3 className="font-semibold text-gray-900">
                    Používanie cookies
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Používame cookies na zlepšenie vášho zážitku na našej webovej
                  stránke. Nevyhnutné cookies sú vždy povolené, ostatné môžete
                  spravovať podľa vašich preferencií.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    Prijať všetky
                  </Button>
                  <Button
                    onClick={handleAcceptNecessary}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Len nevyhnutné
                  </Button>
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Nastavenia
                  </Button>
                </div>
              </div>
              <Button
                onClick={handleAcceptNecessary}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Nastavenia cookies
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <p className="text-sm text-gray-600">
              Môžete si vybrať, ktoré typy cookies chcete povoliť. Nevyhnutné
              cookies sú vždy povolené, pretože sú potrebné pre základnú
              funkčnosť webovej stránky.
            </p>

            {/* Nevyhnutné cookies */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Nevyhnutné cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Potrebné pre základnú funkčnosť webovej stránky
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">
                    Vždy povolené
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Tieto cookies sú nevyhnutné pre správne fungovanie webovej
                stránky a nemôžu byť vypnuté.
              </p>
            </div>

            {/* Funkčné cookies */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Funkčné cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Zapamätávajú vaše preferencie a nastavenia
                  </p>
                </div>
                <Switch
                  checked={preferences.functional}
                  onCheckedChange={(checked) =>
                    handlePreferenceChange("functional", checked)
                  }
                />
              </div>
              <p className="text-xs text-gray-500">
                Pomáhajú zapamätať si vaše preferencie, ako je jazyk alebo
                vzhľad stránky.
              </p>
            </div>

            {/* Analytické cookies */}
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Analytické cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Pomáhajú nám pochopiť, ako používate našu stránku
                  </p>
                </div>
                <Switch
                  checked={preferences.analytics}
                  onCheckedChange={(checked) =>
                    handlePreferenceChange("analytics", checked)
                  }
                />
              </div>
              <p className="text-xs text-gray-500">
                Zbierajú anonymné údaje o návštevnosti a pomáhajú nám zlepšovať
                stránku.
              </p>
            </div>

            {/* Marketingové cookies */}
            <div className="border-l-4 border-red-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Marketingové cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Používajú sa na personalizované reklamy a obsah
                  </p>
                </div>
                <Switch
                  checked={preferences.marketing}
                  onCheckedChange={(checked) =>
                    handlePreferenceChange("marketing", checked)
                  }
                />
              </div>
              <p className="text-xs text-gray-500">
                Môžu byť použité tretími stranami na zobrazovanie relevantných
                reklám.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
              <Button
                onClick={handleSavePreferences}
                className="bg-orange-600 hover:bg-orange-700 text-white flex-1"
              >
                Uložiť nastavenia
              </Button>
              <Button
                onClick={() => setShowSettings(false)}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1"
              >
                Zrušiť
              </Button>
            </div>

            {/* Additional info */}
            <div className="text-xs text-gray-500 pt-4 border-t border-gray-200">
              <p>
                Podrobné informácie o cookies nájdete v našej{" "}
                <a
                  href="/cookies"
                  className="text-orange-600 hover:text-orange-700 underline"
                >
                  Politike cookies
                </a>
                .
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
