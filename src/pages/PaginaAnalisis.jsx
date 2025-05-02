import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCardsGroup from "../components/common/StatCardsGroup";

const PaginaAnalisis = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Analisis" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
      <StatCardsGroup />

        {/* Graficos*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* <CuadroVentasGenerales />
          <CuadroCategorias/>
          <CuadroCanalesVenta /> */}
        </div>
      </main>
    </div>
  );
};

export default PaginaAnalisis;
