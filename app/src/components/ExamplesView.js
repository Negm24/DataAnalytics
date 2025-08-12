// src/components/ExamplesView.js
import React from "react";
import DataTrend from "../images/DataTrendExample.png";
import BarChart from "../images/BarChart.png";
import PieChart from "../images/PieChart.png";
import LinePlot from "../images/LinePlot.png";
import ScatterPlot from "../images/ScatterPlot.png";
import HeatMap from "../images/HeatMap.png";
import Histogram from "../images/Histogram.png";
import BoxPlot from "../images/BoxPlot.png";
import TDScatterPlot from "../images/TDScatterPlot.png";

const ExamplesView = ({ examples }) => {
  const imageMap = {
    "DataTrendExample.png": DataTrend,
    "BarChart.png": BarChart,
    "PieChart.png": PieChart,
    "LinePlot.png": LinePlot,
    "ScatterPlot.png": ScatterPlot,
    "HeatMap.png": HeatMap,
    "Histogram.png": Histogram,
    "BoxPlot.png": BoxPlot,
    "TDScatterPlot.png": TDScatterPlot,
  };

  return (
    <div className="examples-view">
      <div className="examples-grid">
        {examples.map((example, index) => {
          const isImage = Object.keys(imageMap).includes(example.content);
          return (
            <div key={index} className="example-card">
              <h3>{example.title}</h3>
              {isImage ? (
                <img
                  src={imageMap[example.content]}
                  alt={example.title}
                  className="example-image"
                />
              ) : (
                <div className="example-content">
                  {example.content.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExamplesView;
