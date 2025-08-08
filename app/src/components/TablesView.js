// src/components/TablesView.js
import React from "react";

const TablesView = ({ tables }) => {
  return (
    <div className="tables-view">
      {tables.map((table, index) => (
        <div key={index} className="table-container">
          <h3>{table.title}</h3>
          <table>
            <thead>
              <tr>
                {table.headers.map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TablesView;
