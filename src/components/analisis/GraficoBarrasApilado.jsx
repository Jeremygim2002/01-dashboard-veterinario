// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Title from "../common/Titulo"

const data = [
  { canal: "Búsqueda Orgánica", valor: 4200 },
  { canal: "Publicidad Pagada", valor: 3000 },
  { canal: "Acceso Directo", valor: 2500 },
  { canal: "Redes Sociales", valor: 2000 },
  { canal: "Referencias", valor: 1500 },
  { canal: "Email Marketing", valor: 1200 },
];

const COLORS = [
  "#14B8A6",  // Verde azulado tecnológico
  "#6366F1",  // Azul-violeta fuerte
  "#9333EA",  // Púrpura elegante
  "#D946EF",  // Magenta futurista
  "#FACC15",  // Amarillo brillante de alto contraste
  "#EF4444",  // Rojo potente y dinámico
];

const GraficoBarrasLimpio = () => {
  return (
    <motion.div
      className="bg-slate-800 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-700 transition-all duration-500"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
    >
      <Title className="text-center tracking-wide mb-4" text="CANALES DE ATENCIÓN" />
      <div className="w-full h-[360px]">
        <ResponsiveContainer>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 60, bottom: 10 }}
            barCategoryGap={16}
          >
            <XAxis type="number" stroke="#94A3B8" tick={{ fontSize: 12 }} />
            <YAxis
              type="category"
              dataKey="canal"
              stroke="#94A3B8"
              tick={{ fontSize: 13 }}
              width={120}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                borderColor: "#475569",
                borderRadius: "0.5rem",
              }}
              itemStyle={{ color: "#F1F5F9", fontWeight: "500" }}
              labelStyle={{ color: "#E2E8F0", fontWeight: "bold" }}
            />
            <Bar
              dataKey="valor"
              radius={[0, 12, 12, 0]}
              barSize={18}
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default GraficoBarrasLimpio;
