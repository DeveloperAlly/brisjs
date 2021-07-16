# Price-feed App

![image (3)](https://user-images.githubusercontent.com/12529822/125950175-543ccd79-9a2f-4459-9eca-91f34e8c4235.png)

## Details
This app builds and deploys a solidity contract based on Chainlink Price Feeds then displays this data on a NextJS react frontend.


## **Framework**

**Contracts**: [Truffle](https://www.trufflesuite.com/truffle), Solidity, Infura, [Metamask](https://docs.metamask.io/guide/), [Chainlink](https://docs.chain.link/docs) for Price Feeds

**Front-end**: React, [Next](https://nextjs.org/) (routing, SSR), [Web3](https://web3js.readthedocs.io/en/v1.3.4/).

**Other npm libs**: @truffle/hdwallet-provider, dotenv

## **Requirements/Dependencies**
[Node js](https://nodejs.org/en/). 

[Infura Account](https://infura.io/register) => [Set up guide](https://blog.infura.io/getting-started-with-infura-28e41844cc89/). 

[Metamask Wallet](https://metamask.io/) => NB: USE A FRESH WALLET WITH NO REAL VALUABLE ASSETS ON IT (test only) AND KEEP YOUR SEED PHRASE HANDY (we need this to deploy the solidity contracts). 

[Truffle](https://www.trufflesuite.com/truffle) => install using npm command. 

> npm install -g truffle

## **Running the App**

1. Clone the repo `git clone `
2. Create a .env file `> touch .env`
3. Fill in the .env file with the Infura address and the Metamask seed phrase (as per the .example.env file)
4. Install dependencies `npm install`
5. Deploy the contracts `truffle migrate --network rinkeby`
6. Add the deployed contracts address to the .env file
7. Run the front-end `npm run dev`
8. Navigate to [http://localhost:3000](http://localhost:3000/) to see the price feed app in action






## See the Next-js docs below

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
