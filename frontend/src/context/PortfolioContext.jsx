import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

import { getPortfolio } from "../services/api";

export const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {

  const [portfolio, setPortfolio] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const refreshPortfolio = useCallback(async () => {

    try {

      setLoading(true);

      setError(null);

      const data = await getPortfolio();

      setPortfolio(data);

    }

    catch (err) {

      console.error("Portfolio API Error:", err);

      setError(err.message || "Failed to load portfolio.");

    }

    finally {

      setLoading(false);

    }

  }, []);

  useEffect(() => {

    refreshPortfolio();

  }, [refreshPortfolio]);

  return (

    <PortfolioContext.Provider

      value={{

        portfolio,

        loading,

        error,

        refreshPortfolio,

      }}

    >

      {children}

    </PortfolioContext.Provider>

  );

};

export const usePortfolio = () => {

  const context = useContext(PortfolioContext);

  if (!context) {

    throw new Error(
      "usePortfolio must be used inside PortfolioProvider."
    );

  }

  return context;

};