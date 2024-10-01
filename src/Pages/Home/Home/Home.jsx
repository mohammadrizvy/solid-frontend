import React from "react";
import Colltections from "../Colltections/Colltections";
import Header from "../Header/Header";
import TopCategories from "../TopCategories/TopCategories";
import BestColltections from "../BestColltections/BestColltections";
import SalesChannels from "../SalesChannels/SalesChannels";
import ForYouProducts from "../ForYouProducts/ForYouProducts";
import WholeSaleCustomers from "../WholeSaleCustomers/WholeSaleCustomers";

const Home = () => {
  return (
    <div>
    <Header></Header>
    {/* <TopCategories></TopCategories> */}
    <BestColltections></BestColltections>
    <ForYouProducts></ForYouProducts>
    <WholeSaleCustomers></WholeSaleCustomers>
    <SalesChannels></SalesChannels>
    </div>
    
  );
};

export default Home;
