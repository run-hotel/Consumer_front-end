<template>
  <div class="flex-col page">
    <div class="justify-between section_1">
      <div class="flex-row">
        <div class="flex-row group_1">
          <iframe
            src="https://embed.lottiefiles.com/animation/45893"
            style="border: none; width: 40px; height: 40px"
          ></iframe>
        </div>
        <div class="flex-row group_2 HeaderButtons">
          <div class="flex-row group_4 topButton" @click="goUp">
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995287585802114.png"
              class="image_2"
            />
            <span class="text">首页</span>
          </div>
          <div class="flex-row group_5 topButton" @click="bookHotel">
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995288984904893.png"
              class="image_2"
            />
            <span class="text_2">预定酒店</span>
          </div>
          <div class="flex-row group_6 topButton">
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995395120252701.png"
              class="image_5"
            />
            <span class="text text_3">新闻公告</span>
          </div>
        </div>
      </div>
      <div class="flex-row group_7 RightButtons">
        <el-link
          href="register"
          :underline="false"
          class="flex-col items-center text-wrapper singIn"
        >
          <span class="text_4">SignUp</span>
        </el-link>
        <el-link
          href="login"
          :underline="false"
          class="flex-col items-center text-wrapper_1 logIn"
        >
          <span class="text_5">LogIn</span>
        </el-link>
      </div>
    </div>
    <div class="flex-col group_8">
      <div class="flex-col" style="position: relative">
        <div class="image_6">
          <div class="ContentWrapper">
            <div class="TopTip">
              <span class="topTitle">艾迪花园酒店</span>
              <span class="description">“艾迪无锡 · 创意无限”</span>
              <span class="description"
                >艾迪花园酒店是您追求完美的理想之园</span
              >
              <span class="description">“因为爱，所以来”</span>
            </div>
            <PurchaseButton :bookHotel="bookHotel" />
          </div>
        </div>
        <div class="flex-col section_3" ref="showHome">
          <div class="flex-col items-center group_10">
            <span class="text_6 text_7">农家品质起航</span>
            <span class="text_6 text_8" style="position: relative"
              >企业文化<iframe
                src="https://embed.lottiefiles.com/animation/1370"
                style="position: absolute; border: none; left: 10px; top: -50px"
              ></iframe>
            </span>
          </div>
          <div class="flex-col group_11">
            <div class="justify-between group_12">
              <div class="flex-col items-center">
                <span class="text_9">客户</span>
                <span class="text_10">至上</span>
              </div>
              <div class="flex-col items-center">
                <span class="text_11">以人</span>
                <span class="text_12">为本</span>
              </div>
              <div class="flex-col items-center">
                <span class="text_13">诚信</span>
                <span class="text_14">正直</span>
              </div>
            </div>
            <div class="flex-row group_16">
              <span class="text_15">
                客户是我们的”衣食父母”，万鸿不断坚持以客户为中心的理念，可以凝聚企业每位员士的不懈激情与智慧，不断通过创新优化产晶、系统性的解决方案及良好的服务来为客户创造价值与增值，让万鸿在与客户
                的共同成长中实现可持续发展。强化服务意识，给客户提供完美周到
                的服务是企业竞争力的重要表现
              </span>
              <span class="text_16">
                人是最有灵性的生物，是这个世界上感情最为丰富的主宰者。万鸿坚信员工永远是最宝贵的财富和资本，因此在管理过程中坚持以人为管理工作的出发点和中心，围绕着激发和
                调动人的积极性、主动性和创造性开展工作。公司为员工提供良好的学习、交流平台和阶梯式的晋升通道，提高员工的技术与服务水平，帮助员工成长，改善员工生活；同时我们鼓励同事与同事之间、上下级之间、部门与部
                门之间多沟通，快乐地工作，以促进工作更好
              </span>
              <span class="text_17">
                诚信是立人之本，孔子曰：人而无信，不知真可也。我们需要坚守：1、不赚不该赚的钱，不拿不该拿的东西，远离高压线；2、坚守契约精神、公道平等、不偏袒；3、不传播未经证实的消息，不背后议论人和事；
                4、敢于通过正确的渠道和路程，准确表达自己的观点；表达批评意见的同时能提出相应的建议；
                5、对损害公司利益的行为正确有效的制止。
              </span>
            </div>
          </div>
        </div>
        <div class="flex-col section_4">
          <span class="text_6 text_18">主要介绍</span>
          <span class="text_6 text_19" style="position: relative"
            >艾迪花园酒店带您开启品质生活<iframe
              src="https://embed.lottiefiles.com/animation/71540"
              style="position: absolute"
            ></iframe
          ></span>
          <span class="text_6 text_20">Be Love Be here</span>
          <div class="flex-col group_17">
            <div class="justify-between group_18">
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995395092545127.png"
                class="image_7"
              />
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995395098398951.png"
                class="image_7"
              />
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995395097508068.png"
                class="image_7 image_10"
              />
            </div>
            <div class="flex-col group_19">
              <div class="justify-between group_20">
                <span class="text_6 text_21">名师设计</span>
                <span class="text_6 text_22">位置优越</span>
                <span class="text_6 text_23">性价比高</span>
              </div>
              <div class="justify-between group_21">
                <span class="text_6 text_24">独创性设计，设计巨腕领衔</span>
                <span class="text_6 text_25">位置优越交通便利</span>
                <span class="text_6 text_26">房间干净 服务热情 态度亲切</span>
              </div>
            </div>
          </div>
          <div class="flex-col group_22">
            <div class="justify-between group_23">
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995395105473436.png"
                class="image_7"
              />
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995395108138911.png"
                class="image_7"
              />
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995395106170693.png"
                class="image_7 image_13"
              />
            </div>
            <div class="flex-col group_24">
              <div class="justify-between group_25">
                <div class="flex-col items-center text-wrapper_2">
                  <span class="text_6 text_27">酒店设施</span>
                </div>
                <div class="flex-col items-center text-wrapper_2">
                  <span class="text_6 text_28">精选环境</span>
                </div>
                <div class="flex-col text-wrapper_3">
                  <span class="text_6 text_29">实地欣赏</span>
                </div>
              </div>
              <div class="flex-row group_26">
                <span class="text_6 text_30">功能设施齐全</span>
                <span class="text_6 text_31">依山傍水，让您亲近大自然</span>
                <span class="text_6 text_32">无需实地考察即可在线欣赏</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-col section_5">
          <div class="flex-col items-center text-wrapper_4">
            <span class="text_33">酒店设施 </span>
          </div>
        </div>
      </div>
      <div class="flex-col group_27">
        <div class="flex-col group_28">
          <div class="justify-between group_29">
            <div class="flex-col items-center group_30">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995334694849912.png"
                class="image_14 border"
              />
              <span class="text_34">游泳池</span>
            </div>
            <div
              class="flex-col items-center group_31"
              style="position: relative"
            >
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995333350901149.png"
                class="image_15 border"
              />
              <span class="text_35">健身房</span>
              <iframe
                src="https://embed.lottiefiles.com/animation/53617"
                style="
                  position: absolute;
                  left: 350px;
                  top: -100px;
                  width: 250px;
                  height: 250px;
                "
              ></iframe>
            </div>
          </div>
          <div class="flex-col group_32">
            <div class="justify-between">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995336700625801.png"
                class="image_16 border"
              />
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995337869436015.png"
                class="image_16 border"
              />
            </div>
            <div class="justify-between group_34">
              <span class="text_36">休息室</span>
              <span class="text_37">Spa</span>
            </div>
          </div>
          <div class="justify-between group_35" id="text">
            <div class="flex-col items-center group_36">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995334021496401.png"
                class="image_16 border"
              />
              <span class="text_38">会议室</span>
            </div>
            <div class="flex-col items-center">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995335872070974.png"
                class="image_16 border"
              />
              <span class="text_39">停车场</span>
            </div>
          </div>
        </div>
        <div class="flex-col section_6">
          <div class="flex-col items-center text-wrapper_5">
            <span class="text_40" ref="bookHotel">房间预订</span>
          </div>
        </div>
      </div>
      <div class="flex-col group_38">
        <div class="flex-col group_39">
          <div class="flex-col group_40">
            <div class="flex-row">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995355904306218.png"
                class="image_21 border"
              />
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995286399720890.png"
                class="image_23 image_24 border"
              />
            </div>
            <div class="justify-between group_42">
              <span class="text_41">大床房</span>
              <span class="text_42">双人床</span>
            </div>
          </div>
          <div class="justify-between group_43">
            <div class="flex-row">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995356082408751.png"
                class="image_25 image_26"
              />
              <span class="text_43">1 bathroom</span>
            </div>
            <div class="flex-row">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995339752947702.png"
                class="image_25 image_27"
              />
              <span class="text_44">1 bathroom</span>
            </div>
          </div>
          <div class="justify-between group_46">
            <div class="flex-row">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995344206858365.png"
                class="image_25 image_28"
              />
              <span class="text_45">1 bed</span>
            </div>
            <div class="flex-row">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995339752947702.png"
                class="image_25 image_29"
              />
              <span class="text_46">2 beds</span>
            </div>
          </div>
          <div class="justify-between group_49">
            <div class="flex-row">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995344206858365.png"
                class="image_25 image_30"
              />
              <span class="text_47">1～2 people</span>
            </div>
            <div class="flex-row">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995339752947702.png"
                class="image_25 image_31"
              />
              <span class="text_48">2 people</span>
            </div>
          </div>
          <div class="flex-row group_52">
            <span class="text_49">200/每晚</span>
            <div class="flex-row group_53">
              <BookButton />
              <span class="text_52">309/每晚</span>
            </div>
            <BookButton style="margin-left: 333px" />
          </div>
          <div class="flex-col group_54">
            <div class="items-start">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995285195616200.png"
                class="image_21"
              />
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995283984664540.png"
                class="image_23 image_33"
              />
            </div>
            <div class="justify-between group_56">
              <span class="text_54">豪华床</span>
              <span class="text_55">单人床</span>
            </div>
          </div>
          <div class="flex-col group_57">
            <div class="topButton">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995339527578233.png"
                class="image_25"
              />
              <span class="text_56">2 bathroom</span>
            </div>
            <div class="justify-end">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995337958992441.png"
                class="image_25 image_35"
              />
              <span class="text_57">1 bathroom</span>
            </div>
          </div>
          <div class="flex-col group_60">
            <div class="topButton">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995339527578233.png"
                class="image_25"
              />
              <span class="text_58">3 beds</span>
            </div>
            <div class="justify-end">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995337958992441.png"
                class="image_25 image_37"
              />
              <span class="text_59">2 beds</span>
            </div>
          </div>
          <div class="flex-col group_63">
            <div class="topButton">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995339527578233.png"
                class="image_25"
              />
              <span class="text_60">3 people</span>
            </div>
            <div class="justify-end group_65">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995337958992441.png"
                class="image_25 image_39"
              />
              <span class="text_61">2 people</span>
            </div>
          </div>
          <div class="justify-between group_66">
            <span class="text_62">600/每晚</span>
            <div class="flex-row group_67">
              <BookButton />
              <span class="text_64">120/每晚</span>
            </div>
            <BookButton style="margin-top: 4px" />
          </div>
        </div>
        <div class="justify-between section_7">
          <div class="flex-col items-start group_68">
            <span class="text_6 text_66">Frequent ask qustions</span>
            <span class="text_6 text_67"
              >如果遇到什么问题，请及时与我们取得联系！</span
            >
          </div>
          <div class="flex-col buttonRightCards">
            <div class="flex-row section_8">
              <el-link href="/preferential" :underline="false">
                <span class="text_6 text_68 text_69">优惠政策</span>
                <img
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995291562283425.png"
                  class="image_2 image_40"
                />
              </el-link>
            </div>
            <div class="flex-row section_8">
              <el-link href="/preordain" :underline="false">
                <span class="text_6 text_68 text_70">预订流程</span>
                <img
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995291562283425.png"
                  class="image_2 image_40"
                />
              </el-link>
            </div>
            <div class="flex-row section_9">
              <el-link :underline="false" href="privacy">
                <span class="text_6 text_71">隐私条款</span>
                <img
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995291562283425.png"
                  class="image_2 image_43"
                />
              </el-link>
            </div>
          </div>
        </div>
        <div class="flex-col items-center section_10">
          <div class="flex-row group_70">
            <div class="flex-row Words">
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995395117661557.png"
                class="image_44"
              />
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995395118612442.png"
                class="image_45"
              />
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995395111799174.png"
                class="image_46"
              />
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995395113689302.png"
                class="image_47"
              />
            </div>
            <div class="flex-row group_72">
              <span class="text_72" @click="goUp">首页</span>
              <span class="text_73" @click="bookHotel">预定酒店 </span>
              <span class="text_74">新闻公告</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PurchaseButton from "@/views/smc_components/PurchaseButton.vue";
import BookButton from "@/views/smc_components/BookButton.vue";
export default {
  components: {
    PurchaseButton,
    BookButton,
  },
  methods: {
    goUp() {
      this.$refs.showHome.scrollIntoView({ behavior: "smooth" });
    },
    bookHotel() {
      this.$refs.bookHotel.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
/************************************************************
** 请将全局样式拷贝到项目的全局 CSS 文件或者当前页面的顶部 **
** 否则页面将无法正常显示                                  **
************************************************************/
.ContentWrapper {
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  justify-items: center;
  gap: 60px;
}
.description {
  font-family: "ABeeZee";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 130%;
  /* or 22px */

  text-align: center;

  color: #ffffff;
}

html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Microsoft Yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  overflow: auto;
}

* {
  border: none;
  box-sizing: border-box;
  flex-shrink: 0;
  border: none;
  text-decoration: none;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  display: flex;
  justify-content: flex-start;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}

.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}

.justify-around {
  display: flex;
  justify-content: space-around;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.items-start {
  display: flex;
  align-items: flex-start;
}

.items-center {
  display: flex;
  align-items: center;
}

.items-end {
  display: flex;
  align-items: flex-end;
}
.text_6 {
  text-transform: capitalize;
}
.topTitle {
  font-family: "ABeeZee";
  font-weight: 400;
  font-size: 60px;
  line-height: 71px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
}
.TopTip {
  display: grid;
  grid-template-rows: repeat(4, auto);
  text-align: center;
  justify-items: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 60px 0px 60px 60px;
  padding: 50px;
}

.text {
  color: #000000;
  font-size: 15px;
  font-family: ABeeZee;
  line-height: 14px;
  font-style: italic;
}

.text-wrapper_6 {
  padding: 16.5px 0 17.5px;
  background-color: #9b51e0;
  border-radius: 16px;
  width: 158.5px;
  height: 45.5px;
}

.section_8 {
  padding: 22px 15px 22px 15.5px;
  background-color: #ffffff;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1490196078) inset;
  position: relative;
}

.image_2 {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}

.image_7 {
  border-radius: 50px;
  width: 60px;
  height: 60px;
}

.image_16 {
  width: 400px;
  height: 240px;
}

.image_21 {
  flex: 1 1 580px;
  width: 580px;
  height: 360px;
}

.image_23 {
  flex: 1 1 580px;
  width: 583px;
  height: 360px;
}

.image_25 {
  width: 11px;
  height: 11px;
}

.image_48 {
  margin-left: 13.5px;
  width: 36.5px;
  height: 36.5px;
}

.text-wrapper_2 {
  width: 125px;
}

.text_50 {
  color: #ffffff;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 11.5px;
}

.text_68 {
  color: #000000;
  font-size: 20px;
  font-family: Inter;
  line-height: 18.5px;
}

.image_40 {
  margin-left: 407.5px;
}

.page {
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}

.section_1 {
  padding: 26.5px 120px 26.5px 122px;
  background-color: #ffffff;
}

.group_8 {
  margin-top: 7.5px;
}

.group_7 {
  margin: 4.5px 0;
}

.group_27 {
  margin-top: 91.5px;
}

.group_38 {
  margin-top: 138px;
}

.group_1 {
  margin: 7.5px 0;
}

.group_2 {
  margin-left: 152px;
}

.text-wrapper {
  padding: 11px 0 6.5px;
  border-radius: 5px;
  width: 102px;
  height: 35px;
  border: solid 1px #3563e9;
}

.text-wrapper_1 {
  margin-left: 20px;
  padding: 11.5px 0 8.5px;
  background-color: #3563e9;
  border-radius: 5px;
  width: 89px;
  height: 35px;
}

.image_6 {
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  background-image: url("@/img/backImage.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 51.0417vw;
}

.section_3 {
  margin-top: 7px;
  padding: 142.5px 163.5px 150px 166px;
  background-color: #ffffff;
}

.section_4 {
  margin-top: 7px;
  padding: 82px 0 104.5px;
  background-color: #ffffff;
}

.section_5 {
  margin-top: 8px;
  background-image: url("https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995290253915606.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.group_28 {
  padding-bottom: 10.5px;
  align-self: center;
  width: 1006px;
}
.group_28 *,
.group_28 {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.group_28 img:hover {
  background: rgba(15, 14, 71, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  transform: scale(1.1) translateY(-20px);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(40px);
}

.section_6 {
  padding-bottom: 2px;
  background-image: url("https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16557995282728300889.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.group_39 {
  padding: 0 69px 7px 71px;
}

.section_7 {
  padding: 80px 120px 80px 121px;
  background-color: #ffffff;
}

.section_10 {
  margin-top: 7px;
  padding-top: 47px;
  background-color: #3563e9;
  overflow: hidden;
}

.image {
  width: 47px;
  height: 29px;
}

.image_1 {
  margin: 7px 0 4px;
  width: 82px;
  height: 18px;
}

.group_6 {
  margin-left: 60px;
  padding: 3.5px 0;
  align-self: center;
  overflow: hidden;
  width: 94px;
  height: 24px;
}

.text_4 {
  color: #3563e9;
  font-size: 16px;
  font-family: Inter;
  line-height: 15.5px;
}

.text_5 {
  color: #ffffff;
  font-size: 16px;
  font-family: Inter;
  line-height: 15px;
}

.group_10 {
  align-self: center;
}

.group_11 {
  margin-top: 76.5px;
}

.text_18 {
  align-self: center;
  color: #757575;
  font-size: 20px;
  font-family: Inter;
  line-height: 18.5px;
}

.text_19 {
  margin-top: 32.5px;
  align-self: center;
  color: #212121;
  font-size: 48px;
  font-family: Inter;
  font-weight: 600;
  line-height: 45.5px;
}

.text_20 {
  margin-top: 59.5px;
  align-self: center;
  color: #757575;
  font-size: 60px;
  font-family: LingWai SC;
  line-height: 41px;
}

.group_17 {
  margin-top: 102.5px;
  align-self: center;
  width: 1029px;
}

.group_22 {
  margin-top: 76.5px;
  padding-left: 234.5px;
  padding-right: 211.5px;
}

.text-wrapper_4 {
  padding: 191px 0 212px;
  background-color: rgba(0, 0, 0, 0.5294117647);
}

.group_29 {
  padding: 0 7px;
}

.group_32 {
  margin-top: 58px;
  padding-left: 3px;
  padding-right: 2px;
}

.group_35 {
  margin-top: 72.5px;
}

.text-wrapper_5 {
  padding: 172.5px 0 201.5px;
  background-color: rgba(0, 0, 0, 0.5294117647);
}

.group_40 {
  padding-left: 2px;
}

.group_43 {
  margin-left: 2.5px;
  margin-top: 49px;
  align-self: flex-start;
  width: 800px;
}

.group_46 {
  margin-left: 2px;
  margin-top: 38px;
  align-self: flex-start;
  width: 774px;
}

.group_49 {
  margin-left: 2px;
  margin-top: 37px;
  align-self: flex-start;
  width: 784px;
}

.group_52 {
  margin-top: 39.5px;
}

.group_54 {
  margin-top: 66.5px;
}

.group_57 {
  margin-top: 42px;
  align-self: flex-start;
  width: 802px;
}

.group_60 {
  margin-top: 34px;
  align-self: flex-start;
  width: 775.5px;
}

.group_63 {
  margin-top: 33px;
  align-self: flex-start;
  width: 785.5px;
  height: 15.5px;
}

.group_66 {
  margin-top: 36.5px;
}

.group_68 {
  align-self: center;
}

.group_70 {
  padding: 52px 0 48.5px 3.5px;
}

.section_2 {
  padding: 10px 0;
  background-color: rgba(0, 0, 0, 0.1019607843);
  border-radius: 10px;
  overflow: hidden;
  width: 124px;
  height: 44px;
}

.group_5 {
  margin-left: 50px;
  align-self: center;
  overflow: hidden;
  width: 94px;
  height: 24px;
}

.image_5 {
  flex-shrink: 0;
  width: 21px;
  height: 17px;
}

.text_3 {
  margin-left: 12px;
  margin-bottom: 2.5px;
}

.text_7 {
  color: #757575;
  font-size: 20px;
  font-family: Inter;
  line-height: 18.5px;
}

.text_8 {
  margin-top: 25px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 46px;
  font-family: Inter;
  font-weight: 600;
  line-height: 43.5px;
}

.group_12 {
  align-self: center;
  width: 824px;
}

.group_16 {
  margin-top: 16px;
}
.group_16,
.group_16 * {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 15px;
}
.group_16 .text_15:hover {
  background: rgba(255, 255, 255, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 0px 60px 60px 60px;
}
.group_16 .text_16:hover {
  background: rgba(255, 255, 255, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 0px 60px 60px 60px;
}
.group_16 .text_17:hover {
  background: rgba(255, 255, 255, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 0px 60px 60px 60px;
}

.group_18 {
  padding: 0 66.5px;
}

.group_19 {
  margin-top: 25px;
}

.group_23 {
  padding: 0 42.5px;
}

.group_24 {
  margin-top: 25px;
  text-align: center;
}

.text_33 {
  color: #ffffff;
  font-size: 36px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 34px;
}

.group_30 {
  margin-bottom: 2px;
}

.group_31 {
  margin-top: 5px;
}

.group_34 {
  margin-top: 6px;
  align-self: center;
  width: 635.5px;
}

.group_36 {
  margin-top: 14px;
}

.text_40 {
  color: #ffffff;
  font-size: 36px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 33.5px;
}

.group_42 {
  margin-top: 29.5px;
  align-self: center;
  width: 839px;
}

.text_49 {
  margin-top: 11px;
  color: #9b51e0;
  font-size: 18px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 17px;
}

.group_53 {
  margin-left: 347px;
  flex-shrink: 0;
}

.view_3 {
  margin-left: 333px;
  flex-shrink: 0;
}

.group_56 {
  margin-top: 32px;
  align-self: center;
  width: 810px;
}

.group_65 {
  margin-top: -8.5px;
  position: relative;
}

.text_62 {
  margin-top: 10px;
  color: #9b51e0;
  font-size: 18px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 17px;
}

.group_67 {
  margin-bottom: 4px;
}

.view_5 {
  margin-top: 4px;
}

.text_66 {
  margin-left: 2.5px;
  color: #212121;
  font-size: 48px;
  font-family: Inter;
  font-weight: 600;
  line-height: 46.5px;
}

.text_67 {
  margin-top: 22.5px;
  color: #757575;
  font-size: 20px;
  font-family: Inter;
  line-height: 19px;
}

.section_9 {
  padding: 22px 15px 22px 16.5px;
  background-color: #ffffff;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1490196078) inset;
}

.group_72 {
  margin-left: 308.5px;
  align-self: center;
}
.group_72,
.group_72 * {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.group_72 span {
  padding: 20px;
}
.group_72 span:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  background-blend-mode: overlay;
  mix-blend-mode: normal;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

.group_73 {
  margin: 4.5px 0 5px 302px;
}

.group_4 {
  overflow: hidden;
  width: 64px;
}

.text_2 {
  color: #000000;
  font-size: 15px;
  font-family: ABeeZee;
  line-height: 14px;
  font-style: italic;
  width: 70px;
}

.text_15 {
  flex: 1 1 337px;
  color: #757575;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  text-align: center;
}

.text_16 {
  margin-left: 50.5px;
  flex: 1 1 337px;
  color: #757575;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  text-align: center;
}

.text_17 {
  margin-left: 54px;
  flex: 1 1 337px;
  color: #757575;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  text-align: center;
}

.image_10 {
  margin-right: 10px;
}

.group_20 {
  padding: 0 52.5px;
}

.group_21 {
  margin-top: 23.5px;
}

.image_13 {
  margin-right: 23.5px;
}

.group_25 {
  padding: 0 10.5px;
}

.group_26 {
  margin-top: 23.5px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, auto);
}

.image_14 {
  width: 400px;
  height: 225px;
}

.text_34 {
  margin-top: 5px;
  color: #4f4f4f;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 13px;
}

.image_15 {
  width: 400px;
  height: 224px;
}

.text_35 {
  margin-top: 3.5px;
  color: #4f4f4f;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 13px;
}

.text_36 {
  margin-bottom: 2.5px;
  color: #4f4f4f;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 13.5px;
}

.text_37 {
  margin-top: 2.5px;
  color: #4f4f4f;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 13px;
}

.text_38 {
  margin-top: 3px;
  color: #4f4f4f;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 13.5px;
}

.text_39 {
  margin-top: 17px;
  color: #4f4f4f;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 13.5px;
}

.image_24 {
  margin-left: 135px;
}

.text_41 {
  margin-bottom: 4px;
  color: #4f4f4f;
  font-size: 32px;
  font-family: Lato;
  font-weight: 700;
  line-height: 30px;
}

.text_42 {
  margin-top: 4px;
  color: #4f4f4f;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 30px;
}

.image_26 {
  flex-shrink: 0;
}

.text_43 {
  margin-left: 12px;
  color: #4f4f4f;
  font-size: 12px;
  font-family: Roboto;
  line-height: 9px;
}

.image_27 {
  flex-shrink: 0;
}

.text_44 {
  margin-left: 12px;
  color: #4f4f4f;
  font-size: 12px;
  font-family: Roboto;
  line-height: 9px;
}

.image_28 {
  flex-shrink: 0;
}

.text_45 {
  margin-left: 12px;
  color: #4f4f4f;
  font-size: 12px;
  font-family: Roboto;
  line-height: 9px;
}

.image_29 {
  flex-shrink: 0;
}

.text_46 {
  margin-left: 11.5px;
  color: #4f4f4f;
  font-size: 12px;
  font-family: Roboto;
  line-height: 9px;
}

.image_30 {
  flex-shrink: 0;
}

.text_47 {
  margin-left: 12px;
  color: #4f4f4f;
  font-size: 12px;
  font-family: Roboto;
  line-height: 11.5px;
}

.image_31 {
  flex-shrink: 0;
}

.text_48 {
  margin-left: 11.5px;
  color: #4f4f4f;
  font-size: 12px;
  font-family: Roboto;
  line-height: 11.5px;
}

.view_2 {
  flex-shrink: 0;
}

.text_52 {
  margin-left: 132px;
  margin-top: 9.5px;
  color: #9b51e0;
  font-size: 18px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 17px;
}

.image_33 {
  margin-left: 136.5px;
  margin-top: 13px;
}

.text_54 {
  margin-bottom: 2px;
  color: #4f4f4f;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 30px;
}

.text_55 {
  margin-top: 2px;
  color: #4f4f4f;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 30px;
}

.text_56 {
  margin-left: 11.5px;
  margin-right: 715.5px;
  color: #4f4f4f;
  font-size: 12px;
  font-family: Roboto;
  line-height: 9px;
  width: 80px;
}

.image_35 {
  margin-right: 12px;
}

.text_57 {
  margin-bottom: 2px;
  color: #4f4f4f;
  font-size: 12px;
  font-family: Roboto;
  line-height: 9px;
}

.text_58 {
  margin-left: 11.5px;
  margin-right: 716px;
  color: #4f4f4f;
  font-size: 12px;
  font-family: Roboto;
  line-height: 10px;
  width: 60px;
}

.image_37 {
  margin-right: 11.5px;
}

.text_59 {
  margin-bottom: 2px;
  color: #4f4f4f;
  font-size: 12px;
  font-family: Roboto;
  line-height: 9px;
}

.text_60 {
  margin-left: 11.5px;
  margin-right: 716px;
  color: #4f4f4f;
  font-size: 12px;
  font-family: Roboto;
  line-height: 11.5px;
  width: 60px;
}

.image_39 {
  margin-right: 11.5px;
}

.text_61 {
  color: #4f4f4f;
  font-size: 12px;
  font-family: Roboto;
  line-height: 11.5px;
}

.view_4 {
  flex-shrink: 0;
}

.text_64 {
  margin-left: 134px;
  align-self: center;
  color: #9b51e0;
  font-size: 18px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 17px;
}

.text_69 {
  margin: 2px 0 3px;
}

.text_70 {
  margin: 2px 0 3.5px;
}

.text_71 {
  margin: 2px 0 3.5px;
  color: #000000;
  font-size: 20px;
  font-family: Inter;
  line-height: 18.5px;
}

.image_43 {
  margin-left: 406.5px;
}

.image_44 {
  width: 37px;
  height: 46px;
}

.image_45 {
  margin-left: 12px;
  align-self: center;
  width: 42.5px;
  height: 28.5px;
}

.image_46 {
  margin-left: 2.5px;
  align-self: center;
  width: 75.5px;
  height: 28.5px;
}

.image_47 {
  margin-left: 3.5px;
  align-self: center;
  width: 31px;
  height: 22.5px;
}

.text_72 {
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  line-height: 13px;
}

.text_73 {
  margin-left: 53px;
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  line-height: 13px;
}

.text_74 {
  margin-left: 52px;
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  line-height: 13px;
}

.image_49 {
  margin-left: 0;
}

.text_9 {
  color: #212121;
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
  line-height: 29px;
}

.text_10 {
  color: #212121;
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
  line-height: 29px;
}

.text_11 {
  color: #212121;
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
  line-height: 29px;
}

.text_12 {
  color: #212121;
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
  line-height: 29px;
}

.text_13 {
  color: #212121;
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
  line-height: 29px;
}

.text_14 {
  color: #212121;
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
  line-height: 29px;
}

.text_21 {
  color: #212121;
  font-size: 22px;
  font-family: Inter;
  font-weight: 600;
  line-height: 21px;
}

.text_22 {
  color: #212121;
  font-size: 22px;
  font-family: Inter;
  font-weight: 600;
  line-height: 20.5px;
}

.text_23 {
  margin-right: 10px;
  color: #212121;
  font-size: 22px;
  font-family: Inter;
  font-weight: 600;
  line-height: 21px;
}

.text_24 {
  color: #616161;
  font-size: 16px;
  font-family: Inter;
  line-height: 15px;
}

.text_25 {
  color: #616161;
  font-size: 16px;
  font-family: Inter;
  line-height: 15px;
}

.text_26 {
  color: #616161;
  font-size: 16px;
  font-family: Inter;
  line-height: 15px;
}

.text-wrapper_3 {
  margin-right: 24px;
}

.text_30 {
  color: #616161;
  font-size: 16px;
  font-family: Inter;
  line-height: 15px;
}

.text_31 {
  margin-left: 244.5px;
  color: #616161;
  font-size: 16px;
  font-family: Inter;
  line-height: 15.5px;
}

.text_32 {
  margin-left: 221.5px;
  color: #616161;
  font-size: 16px;
  font-family: Inter;
  line-height: 15px;
}

.text_27 {
  color: #212121;
  font-size: 22px;
  font-family: Inter;
  font-weight: 600;
  line-height: 20.5px;
}

.text_28 {
  color: #212121;
  font-size: 22px;
  font-family: Inter;
  font-weight: 600;
  line-height: 21px;
}

.text_29 {
  color: #212121;
  font-size: 22px;
  font-family: Inter;
  font-weight: 600;
  line-height: 21px;
}

.topButton {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-items: center;
}

.border {
  border-radius: 16px;
}
.HeaderButtons {
  cursor: pointer;
}
.HeaderButtons div {
  width: 104px;
  height: 44px;
  padding: 10px 5px;
}
.HeaderButtons * {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.HeaderButtons div:hover {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.RightButtons {
  cursor: pointer;
}
.RightButtons,
.RightButtons * {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.RightButtons .singIn:hover {
  transform: translateX(-10px) scale(1.2);
}
.RightButtons .logIn:hover {
  transform: translateX(10px) scale(1.2);
}

.buttonRightCards *,
.buttonRightCards {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.buttonRightCards div:hover {
  transform: translateX(15px);
  cursor: pointer;
  background: #2851e3;
  border-radius: 10px;
}

.Words,
.Words * {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.Words *:hover {
  transform: translateX(10px) rotate(30deg);
}

/*# sourceMappingURL=style.css.map */
</style>
