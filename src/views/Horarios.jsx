import { Target, Users } from "lucide-react";
import { FIELD_ROWS, HALL_ROWS, TAG_STYLE, BGW } from "../constants";
import SectionHeader from "../components/SectionHeader";
import ScheduleBlock from "../components/ScheduleBlock";

export default function Horarios() {
  return (
    <section id="horarios" style={{ background: BGW }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          n="02"
          title="Horarios e Instalaciones"
          subtitle="Actividad disponible sábados y domingos. Consulta el estado de cada instalación antes de tu visita."
        />

        <div className="flex flex-wrap gap-3 mb-10">
          {Object.entries(TAG_STYLE).map(([tag, style]) => (
            <span key={tag} className="flex items-center gap-2 text-xs px-3 py-1.5" style={{ background: style.bg, color: style.color, fontFamily: "'DM Mono', monospace" }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: style.color }} />
              {tag}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ScheduleBlock
            icon={Target}
            title="Campo de Tiro — Bosque"
            headerColor="#7A8C38"
            rows={FIELD_ROWS}
            note="Campo de 18 dianas en entorno forestal natural. Acceso libre para socios con licencia en vigor. Las fechas de Cursos de Iniciación se publicarán con antelación."
          />
          <ScheduleBlock
            icon={Users}
            title="Pabellón Cubierto"
            headerColor="#4A5E28"
            rows={HALL_ROWS}
            note="Instalación interior de 18 m con 8 dianas fijas. El pabellón abre únicamente los sábados. Para uso fuera de horario, contactar con la Junta Directiva."
          />
        </div>
      </div>
    </section>
  );
}