import Header from "../components/common/Header";
import StatCardsGroup from "../components/common/StatCardsGroup";
import GraficoCircular from "../components/analisis/GraficoCircular";
import GraficoServicios from "../components/analisis/GraficoServicios";
import GraficoBarrasApilado from "../components/analisis/GraficoBarrasApilado";
import GraficoAreas from "../components/analisis/GraficoAreas";

const PaginaAnalisis = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Análisis" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8">
        {/* Tarjetas de estadísticas generales */}
        <StatCardsGroup />

        {/* Gráficos principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GraficoAreas />
          <GraficoServicios />
          <GraficoBarrasApilado />
          <GraficoCircular />
        </div>
      </main>
    </div>
  );
};

export default PaginaAnalisis;
