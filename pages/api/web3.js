import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  //   window.ethereum.request({ method: "eth_requestAccounts" }); // checks accounts - prompts user to sign in
  window.ethereum.enable();
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    process.env.NEXT_PUBLIC_INFURA_ADDRESS
  );
  web3 = new Web3(provider);
}

export default web3;

//Side note - there's a cool lib that provides hooks for web3 and react here: https://www.npmjs.com/package/@web3-react/core
// This would be good to use. Example writeup: https://consensys.net/blog/developers/how-to-fetch-and-update-data-from-ethereum-with-react-and-swr/
