import React, { useState, useEffect } from "react";

// API
import { getCoin } from "../services/api";

// Components
import Loader from "./Loader";
import Coin from "./Coin";
import NotFound from "./NotFound";

// Styles
import styles from "./Landing.module.css";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
    };
    fetchAPI();
  }, [isNotFound]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
    if (!searchedCoins.length) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  };

  const searchedCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLocaleLowerCase());
  });

  console.log(searchedCoins);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={searchHandler}
        className={styles.input}
      />
      {coins.length ? (
        <div className={styles.coinContainer}>
          {searchedCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                marketCap={coin.market_cap}
                priceChange={coin.price_change_percentage_24h}
              />
            );
          })}
        </div>
      ) : (
        <Loader />
      )}

      {isNotFound && <NotFound />}
    </>
  );
};

export default Landing;
