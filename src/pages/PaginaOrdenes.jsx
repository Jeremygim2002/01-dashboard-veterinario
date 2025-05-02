import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCardsGroup from "../components/common/StatCardsGroup";
import TablaOrdenes from "../components/ordenes/TablaOrdenes";

function PaginaOrdenes() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Ordenes" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
      <StatCardsGroup />
      <TablaOrdenes/>
        {/* Graficos*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* <CuadroVentasGenerales />
          <CuadroCategorias/>
          <CuadroCanalesVenta /> */}
        </div>
      </main>
    </div>
  )
}

export default PaginaOrdenes
