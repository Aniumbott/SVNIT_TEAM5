// main page

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import dataproduct from "../database/dummyproducts";
import ProductCard from "../components/ProductCard";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sasta Amazon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header">
        <h1>Sasta Amazon</h1>
      </div>
      <main className={styles.main}>
        <div className="conainer">
          {dataproduct.map((obj: any) => {
            return (
              <Link
                href="/product/[obj.productid]"
                as={`/product/${obj.productid}`}
              >
                <div className="card">
                  <ProductCard data={obj} />
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <style>
        {`
  .conainer{
    padding-top: 10vh;
    width:100w;
    display:flex;
    flex-align:row;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
  }
  .card{
    margin:1rem;
    height:30rem;
    width: 40rem;
  }
  .header{
    width:100vw;
    height:10vh;
    background-color:black;
    position:fixed;
    top:0;
    left:0;
    z-index:100;
  }
  .header h1{
    margin-left: 2rem ;
    color:white;
  }
  
`}
      </style>
    </div>
  );
};

export default Home;
