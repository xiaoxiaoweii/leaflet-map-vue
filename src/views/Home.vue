<template>
  <div class="wrapper">
    <div id="map"></div>
    <div class="other_btn">
      <div class="latlng">
        <div class="other_lat">{{ latNum }}</div>
        <div class="other_lon">{{ lonNum }}</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Home",
  components: {},
  data() {
    return {
      // 经纬数据
      latNum: 0,
      lonNum: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initMap();
    });
  },
  methods: {
    initMap() {
      let map = L.map("map", {
        attributionControl: false,
        crs: L.CRS.EPSG4326,
        minZoom: 1,
        maxZoom: 13,
        worldCopyJump: true,
        maxBounds: [
          [180, -1800],
          [-180, 1800],
        ],
        zoomControl: false,
      });
      map.setView([30.2, 119.7], 5);
      window.map = map;
      this.setTileLayer();
      this.setLatlngGraticule();
      this.changeZoom();
      this.changeMove();
      // 经纬度显示
      this.showLatlon();
    },
    showLatlon() {
      window.map.on("mousemove", (e) => {
        let latlng = L.latLng(e.latlng.lat, e.latlng.lng).wrap();
        this.latNum =
          latlng.lat > 0
            ? Math.abs(latlng.lat).toFixed(3) + " N"
            : Math.abs(latlng.lat).toFixed(3) + " S";
        this.lonNum =
          latlng.lng > 0
            ? Math.abs(latlng.lng).toFixed(3) + " E"
            : Math.abs(latlng.lng).toFixed(3) + " W";
      });
    },
    async setLatlngGraticule() {
      await L.latlngGraticule({
        showLabel: true,
        dashArray: [1, 1],
        fontColor: "#999000",
        zoomInterval: this.$constants.graticule_zoom,
      }).addTo(map);
    },
    changeZoom() {
      window.map.on("zoomend", (ev) => {
        console.log("zoomend", window.map.getZoom());
        console.log(ev);
      });
    },
    changeMove() {
      window.map.on("moveend", (ev) => {
        console.log(
          "moveend",
          window.map.getZoom(),
          window.map.getCenter(),
          window.map.getBounds()
        );
        console.log(ev);
      });
    },
    setTileLayer() {
      this.$constants.tileLayer.vec.addTo(map);
      this.$constants.tileLayer.cva.addTo(map);
    },
  },
};
</script>
<style lang="scss" style>
.wrapper #map {
  padding: 0;
  margin: 0;
  width: 100%;
  height: calc(100vh);
  .other_btn {
    z-index: 1000;
    position: fixed;
    bottom: 20px;
    left: 10px;
    display: flex;
    align-items: center;
    background-size: 100%;
    padding-left: 10px;
    margin-right: 10px;
    .latlng {
      width: 250px;
      display: flex;
      align-items: center;
      div {
        width: 80px;
        margin-left: 5px;
      }
      .other_lat {
        font-weight: 500;
      }
      .other_lon {
        font-weight: 500;
      }
    }
  }
}
</style>
