<template>
  <div id="Wrapper">
    <div id="Content">
      <div id="LeftWrapper">
        <div id="TopWrapper">
          <img id="fk1" src="@/img/pc1.svg" />
          Hey,Welcome
        </div>
        <div id="ACenWrapper">关于本团队</div>
        <div id="BCenWrapper">艾迪花园携手上分小组倾情打造</div>
        <div id="CCenWrapper">Can Can Need</div>
        <button><p>关于"上分小组"那些事</p></button>
      </div>
      <div id="RightWrapper">
        <img id="fk2" src="@/img/Ilustra.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
* {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  border: none;
}
#Wrapper {
  background: #121414;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  width: 1140px;
  height: 650px;
}

#Content {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(1, auto);
  grid-column-gap: 100px;
}
#LeftWrapper {
  display: grid;
  grid-template-rows: repeat(5, auto);
  margin-top: 100px;
}
#TopWrapper {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  /* identical to box height, or 142% */
  /* Títulos */
  color: #e1e1e6;
  display: grid;
  grid-template-columns: 10px 200px;
  justify-items: center;
  justify-content: start;
  align-items: center;
  margin-left: 25%;
}

#ACenWrapper {
  font-family: "Songti SC";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 72px;
  /* identical to box height, or 100% */
  color: #e1e1e6;
  margin-left: 25%;
}

#BCenWrapper {
  font-family: "HanziPen SC";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 72px;
  /* identical to box height, or 300% */
  /* Blue */
  color: #61dcfb;
  margin-left: 25%;
}

#CCenWrapper {
  color: #61dcfb;
  margin-left: 25%;
}
button {
  background: #eba417;
  border-radius: 100px;
  width: 215px;
  height: 53px;
  left: 153px;
  top: 444px;
  margin-left: 23%;
  cursor: pointer;
}
p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #121214;
}
#RightWrapper {
  display: grid;
  margin-top: 100px;
}
#fk2:hover {
  transform: scale(1.2);
}
button:hover {
  transform: scale(1.1) translateX(10px);
  filter: hue-rotate(10deg) brightness(150%) saturate(120%);
}
</style>
