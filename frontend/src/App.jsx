import { useState, useEffect } from "react";

import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout";
import LoadingScreen from "./components/loading/LoadingScreen";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const checkBackend = async () => {

      try {

        // Count this visitor
        await fetch(
          "https://kolla-sagar-ai-portfolio.onrender.com/analytics/count/"
        );

        // Check whether the backend is awake
        const response = await fetch(
          "https://kolla-sagar-ai-portfolio.onrender.com/api/portfolio/"
        );

        if (response.ok) {

          setTimeout(() => {

            setLoading(false);

          }, 800);

        } else {

          setTimeout(checkBackend, 3000);

        }

      } catch (error) {

        console.log("Backend sleeping...");

        setTimeout(checkBackend, 3000);

      }

    };

    checkBackend();

  }, []);

  if (loading) {

    return <LoadingScreen />;

  }

  return (

    <MainLayout>

      <Home />

    </MainLayout>

  );

}

export default App;