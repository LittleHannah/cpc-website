<template>
  <div style="padding: 20px 10px">

    <div style="display: flex; flex-flow: wrap; text-align: justify;">
      <div class="photo-wrapper" v-for="par in participants" v-bind:key="par.name">
        <div class="photo-box">
          <img :src="par.img" class="image"/>
          <h5 align="center" style="margin: 10px 0">{{par.name}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Participants',
  data() {
    return {
      participants: [
        { name: 'Shuhua Xu', img: 'http://pog.fudan.edu.cn/pggmhc/img/shuhuaxu.09ee412e.jpg' },
        { name: 'Kai Ye', img: 'http://www.xjtu.edu.cn/dx0831yekai.png' },
        { name: 'Yan Lu', img: 'http://pog.fudan.edu.cn/upload/admin-upload/avatar/YanLu.JPG' },
        { name: 'Li Jin', img: 'https://life.fudan.edu.cn/_upload/article/images/99/c3/4a17814d47539f1dbf24fb7dc219/dc6fe60b-9848-4bc7-8cd6-0c46f9e502ec.jpg' },
        { name: 'Yang Gao', img: 'http://pog.fudan.edu.cn/upload/admin-upload/avatar/YangGao.jpg' },
        { name: 'Xiaofei Yang', img: 'http://www.cs.xjtu.edu.cn/__local/3/B8/46/9DCE4FBFE5890C2E1E33CD31D68_DC2E76DF_36B48.jpg' },
        { name: 'Hao Chen', img: 'http://pog.fudan.edu.cn/upload/admin-upload/avatar/HaoChen.jpg' },
        { name: 'Xinjiang Tan', img: 'http://pog.fudan.edu.cn/upload/admin-upload/avatar/XinjiangTan.jpeg' },
        { name: 'Lian Deng', img: 'http://pog.fudan.edu.cn/upload/admin-upload/avatar/LianDeng.jpeg' },
        { name: 'Yimin Wang', img: 'http://pog.fudan.edu.cn/upload/admin-upload/avatar/YiminWang.jpeg' },
        { name: 'Baonan Wang', img: 'http://pog.fudan.edu.cn/upload/admin-upload/avatar/BaonanWang.jpeg' },
        { name: 'Songyang Li', img: 'http://pog.fudan.edu.cn/upload/admin-upload/avatar/SongyangLi.jpeg' },
        { name: 'Yuhang Cui', img: 'http://pog.fudan.edu.cn/upload/admin-upload/avatar/YuhangCui.jpeg' },
        { name: 'Yuwen Pan', img: 'http://pog.fudan.edu.cn/upload/admin-upload/avatar/YuwenPan.jpeg' },
        { name: 'Sen Ma', img: 'http://pog.fudan.edu.cn/upload/admin-upload/avatar/SenMa.jpeg' },
        { name: 'Shuang Kong', img: 'http://pog.fudan.edu.cn/upload/admin-upload/avatar/ShuangKong.JPG' },
        { name: 'Xiaohan Zhao' , img: 'http://pog.fudan.edu.cn/pggmhc/img/xiaohanzhao.322bd791.jpg' },
        { name: 'Dongdong Wu', img: 'https://people.ucas.edu.cn/self/img/ff9c073c-d6af-448c-8667-66edec4d66c7.jpg' },
        { name: 'Shaoyuan Wu', img: 'https://xpic.x-mol.com/tutor%2F20200227%2FXMGNPV01463.png?x-oss-process=image/resize,m_lfit,h_200,w_200' },
      ]
    }
  }
}
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
