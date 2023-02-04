<template>
  <div class="frame">
    <div class="container">
      <div class="box-3">
        <div class="loader-3">
          <div class="pulse"></div>
          <div class="pulse"></div>
          <div class="pulse"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// use only the available space inside the 400x400 frame
.frame {
  width: 100%;
  min-height: 100vh;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgb(0 0 0 / 10%);
  overflow: hidden;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #03000a9c;
  position: absolute;
  left: 0;
}

.container {
  height: 100%;
  width: 100%;
  padding: 30px;
}

$border: 2px solid $primaryColor;

.loader-3 {
  margin: 44px auto;
  box-sizing: border-box;
  //background: #fff;
}

.loader-3 {
  height: 32px;
  width: 105px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;

  .pulse {
    position: relative;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background: $primaryColor;
    animation: loader-3-pulse 1.8s infinite ease-in-out;
    top: 0;

    &:nth-child(2) {
      animation-delay: 0.16s;
    }

    &:nth-child(3) {
      animation-delay: 0.32s;
    }
  }
}

@keyframes loader-3-pulse {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>