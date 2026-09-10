import { Calendar, Clock } from "lucide-react";
import { BGW, BDR, COURSES, FG, MFG, OLI, RED } from "../constants";
import SectionHeader from "../components/SectionHeader";
import { useState } from "react";

export default function Cursos() {
  const [courseTab, setCourseTab] = useState("todos");

  const filteredCourses = COURSES.filter((course) => {
    if (courseTab === "todos") {
      return true;
    }

    return courseTab === "cursos" ? course.type === "curso" : course.type === "taller";
  });

  return (
    <section id="cursos" style={{ background: BGW }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          n="04"
          title="Formación: Cursos y Talleres"
          subtitle="Formación presencial impartida por monitores federados. Plazas limitadas, inscripción previa obligatoria."
        />

        <div className="flex gap-2 mb-10 border-b" style={{ borderColor: BDR }}>
          {[
            { key: "todos", label: "Todos" },
            { key: "cursos", label: "Cursos de Iniciación" },
            { key: "talleres", label: "Talleres Técnicos" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setCourseTab(tab.key)}
              className="px-5 py-2.5 text-xs font-medium uppercase tracking-widest transition-colors duration-200 -mb-px"
              style={{
                color: courseTab === tab.key ? OLI : MFG,
                borderBottom: courseTab === tab.key ? `2px solid ${OLI}` : "2px solid transparent",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="border flex flex-col transition-colors duration-200"
              style={{ borderColor: BDR, background: BGW }}
              onMouseEnter={(event) => {
                event.currentTarget.style.borderColor = `${OLI}66`;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.borderColor = BDR;
              }}
            >
              <div
                className="px-4 py-1.5 flex items-center justify-between"
                style={{ background: course.type === "taller" ? "rgba(192,57,43,0.07)" : "rgba(122,140,56,0.07)" }}
              >
                <span className="text-xs font-medium uppercase tracking-widest" style={{ color: course.type === "taller" ? RED : OLI, fontFamily: "'DM Mono', monospace" }}>
                  {course.type === "taller" ? "Taller Técnico" : "Curso de Iniciación"}
                </span>
                <span
                  className="text-xs px-2 py-0.5"
                  style={{ background: course.type === "taller" ? "rgba(192,57,43,0.12)" : "rgba(122,140,56,0.12)", color: course.type === "taller" ? RED : OLI, fontFamily: "'DM Mono', monospace" }}
                >
                  {course.spots} plazas
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs mb-3" style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}>
                  <Calendar className="w-3.5 h-3.5" />
                  {course.date}
                </div>
                <h3 className="font-semibold text-base leading-snug mb-2 flex-1" style={{ fontFamily: "'Spectral', serif", color: FG }}>
                  {course.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: MFG }}>
                  {course.desc}
                </p>
                <div className="flex items-center justify-between text-xs pt-4 mb-4" style={{ borderTop: `1px solid ${BDR}`, color: MFG, fontFamily: "'DM Mono', monospace" }}>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {course.duration}
                  </span>
                  <span>{course.level}</span>
                </div>
                <button
                  className="w-full text-xs py-2.5 font-medium tracking-wide uppercase transition-colors duration-200"
                  style={{ background: course.type === "taller" ? RED : OLI, color: "#FFF" }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.opacity = "0.85";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.opacity = "1";
                  }}
                >
                  Solicitar Plaza
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}