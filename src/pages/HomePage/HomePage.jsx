import React from "react";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import TransactionsList from "../../components/TransactionsList/TransactionsList";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <TransactionsList />
    </div>
  );
};

export default HomePage;
