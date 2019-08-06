<template>
  <div class="container">
    <vue-headful
            title="Press | TravCP"
            description="Description from TravCP"
        />
    <Navbar/>
    <!-- Change image sources of the img element to change press logos -->
    <!--About us start -->
    <div class="about-us-header">
      <p>Press</p>
      <hr>
    </div>
    <div class="about-us-main">
      <div class="d-flex">
        <div class="container" style="padding: 0 70px 50px 70px; background: #FFF;text-align: center;">
          <img style="height: 60px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAhCAMAAAC8w0ZqAAAAbFBMVEX////MAADLAADKAADJAADIAADgjIzOIiLcd3fXYWHUUVHy0tL78fHqs7PilJTuw8P++vr56enWW1vabW3knJzloaH24ODZZ2forKzUTEzQNDTegoLQMDDNGBjwzMzMCgrPKSnSQ0Psu7vRPDxsaUifAAADBklEQVRIiY2WcZ+yIAzHx4Dy1NQ0zc7Msvf/Hp9tiGBXz6f9cScTvs3x2wAgWF4WTZ2SXU4yblMcz2U0AarTRe2b2zouH+mlhQctCXPK1BqNYnqgcYcalUIbTcm0c52942BQ78DQEu/pnoamLMac3I917eccrX/feI5WxNHkWhyF5VWojbFsCUBDDo2TUcrOy6SUXZOiZfb2nnM2TLGXNjvmbBVU5NEFQE//pyV9FI5pKW1G4f0t58xPNskpA/OBrM+go8m/0BccF/PIbuS6wKnluEz/hrOj38Spg6ymTLPZATJadIbJZhyYzWUjyJWAsR0Hpqs/nIzc9NtQWwx5Zs4P7PEKJ83ElYP4gB0tT/5w9qhwhBwl08jxmJXDHzBRQFngKDPTH2W7F86BAz9WjEHzHAq2cuUoLeuvEYcWHSRVW84v8vOF3pu0C5JbOQO/47yuHMr7lVzlhtPxbvIcZXZRBawcivXo8hrisblbFXN6SmPDQWENbzmYwqA5rMChN04OESchRykSy99zlC1BUhg4apFDFXHo4+1x1i/hxBw1sqoxzQJnkUNTBs5IXChofPrIoVeUV02Re84iB3Z5Ds8TYfUfOKyVSrSq1vwscpCHL+PBAXkjftz3uH0nl5ODUl/nx1acV6kpz7GV9nJQX++XrXifnhzyynF5Zzmor/VDtf6QmoriAbgjyyHmRHoePnB4CsJsIg7nXeTwdX1x70lEJg8MHM67bjmsbb1323oviruKOK6XUViBIxllOWz6j9r2HzIVc6Ql17QlgcN5p1GNL/3wGvdDZxFH8nqrTMRxvSy3/+vPzmwjIhXOjb5pDy25Vs4scthRL/94XixWdbyL0tDpA7imkgxc42FzckhEoqNzvZ5fzkoqRX9SSS/LhEdRiIkcOqhoq9Gf1C/nqTPjat0ZlbIyE5/vxld0wq6Rz2+73iY253uU63FV1OjP+1/vEa2IK7pLwC3cN1Yz11B0+dWIxB7V6jpKMJsricz095/F6mFz+YHDz35/njeuvh7vDc/6B6jYLO1vUgKiAAAAAElFTkSuQmCC" alt="" srcset="">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIumwx1Rww5Ncgdf9ZPvpKRBfx8gI7c5Wmmp-M3AYBhQ-YoHE" alt="" srcset="">
          <img style="height: 170px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsAXSqOZT4dYhhsketY0GuCLE8HQAgsFt-WZMUz0fEALzd41WM" alt="" srcset="">
          <img style="height: 140px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrXi3QUUZmtLl3Ugyu1ql8ChSt_WBfXXATJSaiK8Wiwx-jEVO" alt="" srcset="">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSiXzrxSfxxZOIT0yQGVxe2Xb8TYagW_E0jkkxLkeigkLQ9y2" alt="" srcset="">
          <img style="height: 120px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbxIf6kykBL6AZQGJw7Jd1DXFvEbd7ZvKaU0dKU2FGe70EYtX6" alt="" srcset="">
      
        </div>
        </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Press",
  components: {
    Navbar
  }
};
</script>
<style scoped>
.about-us-header {
  padding-top: 3%;
}
.about-us-header p {
  font-size: 3em;
  font-weight: bolder;
  color: #f81894;
  text-align: center;
}
.about-us-header hr {
  width: 200px;
}
.about-us-main {
  background: #fafafa;
  height: auto;
}
.about-us-details-view {
  padding-left: 10%;
  padding-right: 0;
  padding-top: 5%;
  padding-bottom: 5%;
}
.about-us-image {
  background: url("../../assets/ueno.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;
}
.right-pad {
  padding-right: 5%;
}
.remove-pad {
  padding-left: 5%;
}
.text-width {
  width: 50%;
}
.about-us-image-text-view {
  padding-left: 5%;
}
.about-us-image-text-view h5 {
  color: #f81894;
  font-weight: bolder;
}
.about-us-image-text-view p {
  padding-top: 20px;
  font-weight: bold;
  text-align: justify;
}
</style>