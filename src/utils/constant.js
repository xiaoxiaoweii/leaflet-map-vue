/* eslint-disable */
import * as L from 'leaflet'
export const constants = {
  // 经纬度网格设置
  graticule_zoom: [
    {
      start: 2,
      end: 2,
      interval: 32,
    },
    {
      start: 3,
      end: 3,
      interval: 16,
    },
    {
      start: 4,
      end: 4,
      interval: 8,
    },
    {
      start: 5,
      end: 5,
      interval: 4,
    },
    {
      start: 6,
      end: 6,
      interval: 2,
    },
    {
      start: 7,
      end: 7,
      interval: 1,
    },
    {
      start: 8,
      end: 8,
      interval: 0.5,
    },
    {
      start: 9,
      end: 9,
      interval: 0.25,
    },
    {
      start: 10,
      end: 10,
      interval: 0.125,
    },
    {
      start: 11,
      end: 18,
      interval: 0.0625,
    },
  ],
  // 底图列表
  tileLayer: {
    vec: L.tileLayer(
      "http://{s}.tianditu.gov.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&tk=c77ff55fbeec6f05de4685b93f816b9a",
      {
        zoomOffset: 1,
        subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
      }
    ),
    cva: L.tileLayer(
      "http://{s}.tianditu.gov.cn/cva_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&tk=c77ff55fbeec6f05de4685b93f816b9a",
      {
        zoomOffset: 1,
        subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
      }
    ),
  },
  // 工具栏列表
  toolList: [
    {
      name: "measure",
      src: require("@/assets/images/measure.svg"),
      activeSrc: require("@/assets/images/measure_active.svg"),
    },
    {
      name: "area",
      src: require("@/assets/images/area.svg"),
      activeSrc: require("@/assets/images/area_active.svg"),
    },
    {
      name: "grid",
      src: require("@/assets/images/grid.svg"),
      activeSrc: require("@/assets/images/grid_active.svg"),
    },
    {
      name: "Basemap",
      src: require("@/assets/images/Basemap.svg"),
      activeSrc: require("@/assets/images/Basemap_active.svg"),
    },
    {
      name: "screenshot",
      src: require("@/assets/images/screenshot.svg"),
      activeSrc: require("@/assets/images/screenshot_active.svg"),
    },
  ],
};
