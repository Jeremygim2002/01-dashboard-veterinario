// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Title from "../common/Titulo"

const channelData = [
  { name: "Búsqueda Orgánica", value: 4200 },
  { name: "Publicidad Pagada", value: 3000 },
  { name: "Acceso Directo", value: 2500 },
  { name: "Redes Sociales", value: 2000 },
  { name: "Referencias", value: 1500 },
  { name: "Email Marketing", value: 1200 },
];

const COLORS = [
  "#2563EB",  // Azul vibrante y moderno (base fuerte)
  "#3B82F6",  // Azul claro más accesible y legible
  "#60A5FA",  // Azul cielo con toque pastel
  "#818CF8",  // Azul-violeta elegante y llamativo
  "#A78BFA",  // Lavanda intenso con buena presencia
  "#C084FC",  // Púrpura sutil pero con energía
  "#E879F9",  // Rosa eléctrico para contraste único
];

const GraficoCircular = () => {
  return (
    <motion.div
      className="bg-slate-800 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-700 transition-all duration-500"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      <Title className="text-center tracking-wide mb-4" text="DATOS POR SEGMENTO" />
      <div className="w-full h-[320px] sm:h-[360px] md:h-[400px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={channelData}
              cx="45%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
              labelLine={false}
              label={({ name, percent }) => (
                <text
                  style={{
                    fill: "#CBD5E1",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  {`${name}: ${(percent * 100).toFixed(1)}%`}
                </text>
              )}
            >
              {channelData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                borderColor: "#475569",
                borderRadius: "0.5rem",
              }}
              itemStyle={{ color: "#F8FAFC", fontWeight: "bold" }}
              labelStyle={{ color: "#E2E8F0" }}
            />
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              iconType="circle"
              wrapperStyle={{
                color: "#E2E8F0",
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default GraficoCircular;
