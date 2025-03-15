import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import React from "react";
import UnifiedHome from "./components/UnifiedHome";
import ResidenceServices from "./pages/services/residence";
import StoresServices from "./pages/services/stores";
import RestaurantsServices from "./pages/services/restaurants";
import MaintenanceServices from "./pages/services/maintenance";
import TravelServices from "./pages/services/travel";
import DeliveryServices from "./pages/services/delivery";
import InvestmentServices from "./pages/services/investment";
import NotificationsPage from "./pages/profile/notifications";
import routes from "tempo-routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSettings } from "./contexts/SettingsContext";
import StoreTypePage from "./pages/services/stores/[storeType]";

function App() {
  const { language, isRTL } = useSettings();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Header />
      <div className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<UnifiedHome />} />
          <Route path="/ar" element={<UnifiedHome />} />
          <Route path="/en" element={<UnifiedHome />} />

          {/* Service Routes */}
          <Route path="/services/residence/*" element={<ResidenceServices />} />
          <Route path="/services/stores" element={<StoresServices />} />
          <Route
            path="/services/stores/:storeType"
            element={<StoreTypePage />}
          />
          <Route
            path="/services/stores/details/:storeId"
            element={React.createElement(
              React.lazy(() => import("./pages/services/stores/[storeId]")),
            )}
          />
          <Route
            path="/services/restaurants/*"
            element={<RestaurantsServices />}
          />
          <Route
            path="/services/maintenance/*"
            element={<MaintenanceServices />}
          />
          <Route path="/services/travel/*" element={<TravelServices />} />
          <Route path="/services/delivery/*" element={<DeliveryServices />} />
          <Route
            path="/services/investment/*"
            element={<InvestmentServices />}
          />

          {/* Profile Routes */}
          <Route
            path="/profile"
            element={React.createElement(
              React.lazy(() => import("./pages/profile")),
              { isRTL },
            )}
          />
          <Route
            path="/profile/notifications"
            element={<NotificationsPage isRTL={isRTL} />}
          />
          <Route
            path="/profile/favorites"
            element={React.createElement(
              React.lazy(() => import("./pages/profile/favorites")),
              { isRTL },
            )}
          />
          <Route
            path="/profile/orders"
            element={React.createElement(
              React.lazy(() => import("./pages/profile/orders")),
              { isRTL },
            )}
          />
          <Route
            path="/profile/settings"
            element={React.createElement(
              React.lazy(() => import("./pages/profile/settings")),
              { isRTL },
            )}
          />
          <Route
            path="/profile/account"
            element={React.createElement(
              React.lazy(() => import("./pages/profile/account")),
              { isRTL },
            )}
          />
          <Route
            path="/profile/security"
            element={React.createElement(
              React.lazy(() => import("./pages/profile/security")),
              { isRTL },
            )}
          />
          <Route
            path="/profile/privacy"
            element={React.createElement(
              React.lazy(() => import("./pages/profile/privacy")),
              { isRTL },
            )}
          />
          <Route
            path="/profile/provider-settings"
            element={React.createElement(
              React.lazy(() => import("./pages/profile/provider-settings")),
              { isRTL },
            )}
          />
          <Route
            path="/help"
            element={React.createElement(
              React.lazy(() => import("./pages/profile/help")),
              { isRTL },
            )}
          />

          {/* For Tempo routes */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
      </div>
      <Footer rtl={isRTL} />
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
    </Suspense>
  );
}

export default App;
