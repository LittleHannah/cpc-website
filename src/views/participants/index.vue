<template>
  <div style="max-width: 1200px; padding: 0 10px 20px">

    <div>
      <h2>Chinese Pangenome Consortium Members</h2>

      <div style="display: flex; flex-flow: wrap; text-align: justify;padding: 20px 10px">
        <div class="photo-wrapper" v-for="par in participants" v-bind:key="par.name">
          <div class="photo-box">
            <img :src="par.img" class="image"/>
            <h5 align="center" style="margin: 10px 0;color:#606266;">{{ par.name }}</h5>
          </div>
        </div>
      </div>


      <h2>Contributions of CPC Members</h2>
      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Collection of blood samples and cell lines
          </div>
          <div style="font-size:20px;color:#606266">
            Yan Lu, Chuangxue Mao, Zhaoqing Yang, Jiayou Chu,
            Li Jin, Dongdong Wu, Jinchen Li, Juncheng Dai, Kai Ye, Xiaofei Yang, Binyin Shi, Chao Chen, Jian Yang,
            Shaoyuan Wu.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Sample selection
          </div>
          <div style="font-size:20px;color:#606266">
            Yan Lu, Yang Gao, Zhaoqing Yang, Shuhua Xu.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Sequencing
          </div>
          <div style="font-size:20px;color:#606266">
            Yan Lu, Dongdong Wu, Juncheng Dai.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Lab organizer within the CPC
          </div>
          <div style="font-size:20px;color:#606266">
            Yan Lu, Lian Deng.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Ethical, Legal, and Social Implications (ELSI)
          </div>
          <div style="font-size:20px;color:#606266">
            Lian Deng, Zhaoqing Yang, Jiayou Chu.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Pangenome empirical analysis / pangenome QC
          </div>
          <div style="font-size:20px;color:#606266">
            Yan Lu, Yang Gao, Xiaofei Yang, Hao Chen, Yuhang Cui.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Manuscript writing
          </div>
          <div style="font-size:20px;color:#606266">
            Shuhua Xu, Yan Lu, Yang Gao, Xiaofei Yang, Hao Chen, Xinjiang Tan, Lian Deng, Baonan Wang.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Manuscript editing
          </div>
          <div style="font-size:20px;color:#606266">
            Shuhua Xu, Yan Lu, Lian Deng, Kai Ye.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Assembly creation
          </div>
          <div style="font-size:20px;color:#606266">
            Hao Chen, Yang Gao, Xiaofei Yang.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Assembly QC / Assembly reliability analysis
          </div>
          <div style="font-size:20px;color:#606266">
            Yang Gao, Hao Chen, Xiaofei Yang.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Pangenome applications: structural variants
          </div>
          <div style="font-size:20px;color:#606266">
            Yang Gao, Yimin Wang.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Pangenome graph creation
          </div>
          <div style="font-size:20px;color:#606266">
            Xinjiang Tan, Xiaofei Yang, Songyang Li.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Data coordination / management
          </div>
          <div style="font-size:20px;color:#606266">
            Baonan Wang, Yang Gao.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Pangenome applications
          </div>
          <div style="font-size:20px;color:#606266">
            Yang Gao, Hao Chen, Yimin Wang.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Pangenome visualization / complex loci analysis
          </div>
          <div style="font-size:20px;color:#606266">
            Xinjiang Tan, Xiaofei Yang, Songyang Li.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Population genetic analysis
          </div>
          <div style="font-size:20px;color:#606266">
            Hao Chen, Yuwen Pan, Yang Gao, Yan Lu.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Variant identification from assembly
          </div>
          <div style="font-size:20px;color:#606266">
            Hao Chen, Xiaofei Yang, Shuang Kong.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            Variants annotation
          </div>
          <div style="font-size:20px;color:#606266">
            Lian Deng, Yan Lu, Baonan Wang.
          </div>
        </div>
      </div>

      <div style="display: flex; flex-flow: wrap; text-align: justify">
        <div class="contributions-content">
          <div style="font-size:25px;font-weight:400;color: #285fca;">
            CPC Website building
          </div>
          <div style="font-size:20px;color:#606266">
            Xiaohan Zhao, Yingbing Shi.
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Participants',
  data() {
    return {
      participants: [
        {name: 'Shuhua Xu', img: require("@/assets/img/participants/shuhuaxu.jpg")},
        {name: 'Kai Ye', img: require("@/assets/img/participants/yekai1.jpg")},
        {name: 'Jiayou Chu', img: require("@/assets/img/participants/JiayouChu.jpg")},
        {name: 'Li Jin', img: require("@/assets/img/participants/LiJin.jpg")},
        {name: 'Zhaoqing Yang', img: require("@/assets/img/participants/ZhaoqingYang1.jpg")},
        {name: 'Dongdong Wu', img: require("@/assets/img/participants/wudongdong.jpg")},
        {name: 'Zhibin Hu', img: require("@/assets/img/participants/huzhibin.jpeg")},
        {name: 'Xingming Zhao', img: require("@/assets/img/participants/zhaoxingming.jpeg")},

        {name: 'Huijun Yuan', img: require("@/assets/img/participants/HuiJunYuan.jpg")},
        //袁慧君老师
        {name: 'Xin Jin', img: require("@/assets/img/participants/jinxin.jpeg")},
        {name: 'Chao Chen', img: require("@/assets/img/participants/chenchao.jpeg")},
        {name: 'Jinchen Li', img: require("@/assets/img/participants/lijinchen.jpeg")},
        {name: 'Jian Yang', img: require("@/assets/img/participants/yangjian.jpeg")},
        {name: 'Shaoyuan Wu', img: require("@/assets/img/participants/ShaoyuanWu.jpg")},
        {name: 'Yan Lu', img: require("@/assets/img/participants/YanLu.jpg")},
        {name: 'Xiaofei Yang', img: require("@/assets/img/participants/XiaofeiYang.jpg")},
        {name: 'Lian Deng', img: require("@/assets/img/participants/LianDeng.jpg")},

        {name: 'Shaohua Fan', img: require("@/assets/img/participants/fanshaohua.jpeg")},

        {name: 'Juncheng Dai', img: require("@/assets/img/participants/Juncheng Dai.jpg")},

        {name: 'Bingyin Shi', img: require("@/assets/img/participants/shibingyin.jpeg")},

        //14.Hao Sun
        {name: 'Hao Sun', img: require("@/assets/img/participants/kongbai.png")},
        {name: 'Guanglin He', img: require("@/assets/img/participants/GuanglinHe.jpg")},
        {name: 'Fengxiao Bu', img: require("@/assets/img/participants/FengxiaoBu.jpg")},
        {name: 'Yang Wu', img: require("@/assets/img/participants/YangWu.jpg")},

        {name: 'Yang Gao', img: require("@/assets/img/participants/YangGao.jpg")},
        {name: 'Hao Chen', img: require("@/assets/img/participants/HaoChen.jpg")},
        {name: 'Xinjiang Tan', img: require("@/assets/img/participants/XinjiangTan.jpg")},
        {name: 'Yimin Wang', img: require("@/assets/img/participants/YiminWang.jpg")},
        {name: 'Baonan Wang', img: require("@/assets/img/participants/BaonanWang.jpg")},
        {name: 'Songyang Li', img: require("@/assets/img/participants/SongyangLi.jpg")},
        {name: 'Yuhang Cui', img: require("@/assets/img/participants/YuhangCui.jpg")},
        {name: 'Yuwen Pan', img: require("@/assets/img/participants/YuwenPan.jpg")},
        {name: 'Sen Ma', img: require("@/assets/img/participants/SenMa.jpg")},
        {name: 'Shuang Kong', img: require("@/assets/img/participants/ShuangKong.jpg")},
        {name: 'Xiaohan Zhao', img: require("@/assets/img/participants/xiaohanzhao.jpg")},
        {name: 'Chuangxue Mao', img: require("@/assets/img/participants/maochuangxue.jpeg")},
        {name: 'Chang Lei', img: require("@/assets/img/participants/leichang.jpg")},
        {name: 'Yingbing Shi', img: require("@/assets/img/participants/shiyingbing.jpeg")},

      ]
    }
  }
}
//   export default {
//   name: 'Contributions ',
//   data() {
//     return {
//       contributions: []
//     }
// }
// }
</script>

<style lang="scss" scoped>
.photo-wrapper {
  width: 20%;
  margin-bottom: 40px;
}

.image {
  width: 100%;
  height: 90%;
  border-radius: 5px;

  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1, 1.1);
    filter: contrast(130%);

  }
}

.photo-box {
  height: 200px;
  width: 150px
}

.card-title {
  margin-left: 8px;
  font-size: 20px;
  color: #5F74A4FF;
}
</style>
