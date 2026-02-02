import React from "react";

const MemoTable = () => {
  const data = [
    { outil: "useMemo", sert: "mémoriser une valeur" },
    { outil: "useCallback", sert: "mémoriser une fonction" },
    { outil: "React.memo", sert: "mémoriser un composant" },
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Outil</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Sert à</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px", fontWeight: "bold" }}>
                {row.outil}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{row.sert}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemoTable;
