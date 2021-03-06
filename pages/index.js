import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import web3 from "./api/web3";
import ChainlinkPriceFeed from "./api/contracts/ChainlinkPriceFeed";
import { addressMappings } from "./api/mappings";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import useInterval from "./api/useInterval";

const Home = ({ data }) => {
  // console.log("web3", web3.eth);
  // console.log(addressMappings.rinkeby);

  //ALTERNATIVE TO Using Next getInitialProps function
  const [priceData, setPriceData] = useState();

  // console.log("Contract", ChainlinkPriceFeed);
  console.log("Data", data);

  //Update data using Next if youre using getInitialProps ->
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  // const REFRESH_INTERVAL = 5000;
  // useInterval(async () => {
  //   getPrices();
  // }, REFRESH_INTERVAL);

  // ALTERNATIVE TO Using Next getInitialProps function
  // useEffect(() => {
  //   getAllPrices();
  // }, []);

  // //Update data
  // const getAllPrices = async () => {
  //   const dataPromises = addressMappings.rinkeby.map(async (asset) => {
  //     try {
  //       let info = await ChainlinkPriceFeed.methods
  //         .getLatestPrice(asset.address)
  //         .call();
  //       let { decimals, price, description, roundID } = info;
  //       return {
  //         ...asset,
  //         decimals,
  //         price,
  //         roundID,
  //         description,
  //         error: false,
  //       };
  //     } catch {
  //       return { ...asset, price: "Unknown", error: true };
  //     }
  //   });

  //   const data = await Promise.allSettled(dataPromises).then(
  //     (resolvedPromises) => {
  //       return resolvedPromises.map((promise) => {
  //         return promise.value;
  //       });
  //     }
  //   );
  //   console.log("allprices", data);
  //   setPriceData(data);
  // };

  //TEST getting a price from the contract
  // const getAPrice = async (assetAddress) => {
  //   await ChainlinkPriceFeed.methods
  //     .getLatestPrice(assetAddress)
  //     .call()
  //     .then((res) => {
  //       console.log(res, "res on call");
  //       setNewPrice(res.price);
  //       return res.price;
  //     })
  //     .catch((err) => {
  //       console.log("sth went wrong");
  //       return -1;
  //     });
  //   // console.log("price", price);
  //   // setNewPrice(price.price);
  // };

  const renderCard = (details) => {
    return (
      <a
        href="https://github.com/DeveloperAlly"
        target="_blank"
        className={styles.card}
        key={details.address}
      >
        <h2>{details.description || details.name}</h2>
        {/* <p>{details.address}</p> */}
        <h3>{details.price / `1e${details.decimals}` || details.price}</h3>
        {details.error && (
          <p style={{ color: "red" }}>
            An error occurred retrieving this price
          </p>
        )}
      </a>
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Chainlink Price Feeds with Web3</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/chainlink-link-logo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Bris.js!</a>
        </h1>

        <p className={styles.description}>
          React for Blockchain with web3
          <code className={styles.code}>DeveloperAlly</code>
        </p>

        <div className={styles.grid}>
          {data
            ? data.map((details) => renderCard(details))
            : priceData
            ? priceData.map((details) => renderCard(details))
            : "Loading..."}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/PoweredByChainlinkBlue.svg"
              alt="Chainlink Logo"
              width={250}
              height={30}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

Home.getInitialProps = async () => {
  const dataPromises = addressMappings.rinkeby.map(async (asset) => {
    try {
      let info = await ChainlinkPriceFeed.methods
        .getLatestPrice(asset.address)
        .call();
      let { decimals, price, description, roundID } = info;
      return {
        ...asset,
        decimals,
        price,
        roundID,
        description,
        error: false,
      };
    } catch {
      return { ...asset, price: "Unknown", error: true };
    }
  });

  const data = await Promise.allSettled(dataPromises).then(
    (resolvedPromises) => {
      return resolvedPromises.map((promise) => {
        return promise.value;
      });
    }
  );
  //EXAMPLES
  // const audusd = await ChainlinkPriceFeed.methods
  //   .getLatestPrice("0x21c095d2aDa464A294956eA058077F14F66535af")
  //   .call();
  // const btcusd = await ChainlinkPriceFeed.methods
  //   .getLatestPrice("0xECe365B379E1dD183B20fc5f022230C044d51404")
  //   .call();
  // const linkusd = await ChainlinkPriceFeed.methods
  //   .getLatestPrice("0xd8bD0a1cB028a31AA859A21A3758685a95dE4623")
  //   .call();
  // const ethusd = await ChainlinkPriceFeed.methods
  //   .getLatestPrice("0x8A753747A1Fa494EC906cE90E9f37563A8AF630e")
  //   .call();
  // return {
  //   data: { ethusd, btcusd, audusd, linkusd },
  //   mappings: addressMappings.rinkeby,
  // };
  return { data };
};

export default Home;
