import { BDR, BGW, FG, MFG } from "../constants";
import Tag from "./Tag";

export default function ScheduleBlock({ icon: Icon, title, headerColor, rows, note }) {
  return (
    <div className="border overflow-hidden" style={{ borderColor: BDR, background: BGW }}>
      <div className="px-6 py-4 flex items-center gap-3" style={{ background: headerColor }}>
        <Icon className="w-5 h-5" style={{ color: "#F8F5EE" }} />
        <h3 className="font-semibold text-lg" style={{ fontFamily: "'Spectral', serif", color: "#F8F5EE" }}>
          {title}
        </h3>
      </div>
      <div className="p-6">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: `1px solid ${BDR}` }}>
              {["Día", "Horario", "Estado"].map((header) => (
                <th
                  key={header}
                  className="text-left pb-2.5 pr-3 font-medium uppercase text-xs tracking-wide"
                  style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} style={{ borderBottom: `1px solid ${BDR}` }}>
                <td className="py-3 pr-3 font-medium" style={{ color: FG }}>
                  {row.day}
                </td>
                <td className="py-3 pr-3 text-xs" style={{ fontFamily: "'DM Mono', monospace", color: FG }}>
                  {row.time}
                </td>
                <td className="py-3">
                  <Tag tag={row.tag} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {note && (
          <p className="mt-4 text-xs leading-relaxed" style={{ color: MFG, borderTop: `1px solid ${BDR}`, paddingTop: "1rem" }}>
            {note}
          </p>
        )}
      </div>
    </div>
  );
}