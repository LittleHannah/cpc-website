<template>
  <div>
    <div class="row" style="max-width: 1200px;">
      <div class="card-title" style="padding: 20px;">
        Team
      </div>
      <p>
        Human Population Omics Group (HumPOG) is led by Dr. Shuhua Xu.
      </p>
      <div style="display: flex; flex-flow: wrap;">
        <!--          第一个人-->
        <div class="el-card is-always-shadow" style="margin-left:5px;border-radius: 20px;">
          <div class="col-sm">
            <div class="el-card_body" style="padding: 5px;border-radius: 20px;">
              <img src="http://pog.fudan.edu.cn/pggmhc/img/shuhuaxu.09ee412e.jpg" class="image">
              <div style="padding: 5px 10px 10px; max-width: 171px">
                <h5 align="center"> Shuhua Xu </h5>
                <span class="position">个人职位 <br> </span>
                <span class="contribution">Principal Investigator</span>
              </div>
            </div>
          </div>
        </div>
        <!--          第二个人-->
        <div class="el-card is-always-shadow" style="margin-left:80px;border-radius: 20px;">
          <div class="col-sm">
            <div class="el-card_body" style="padding: 5px;border-radius: 20px;">
              <img src="https://www.pgghan.org/HCGD/images/team/luyan.jpg" class="image">
              <div style="padding: 5px 10px 10px; max-width: 171px">
                <h5 align="center"> Yan Lu </h5>
                <span class="position">个人职位 <br> </span>
                <span class="contribution"
                      style="justify-content: center; white-space: pre-wrap">个人贡献个人贡献</span>
              </div>
            </div>
          </div>
        </div>
        <!--          第三个人-->
        <div class="el-card is-always-shadow" style="margin-left:80px;border-radius: 20px;">
          <div class="col-sm">
            <div class="el-card_body" style="padding: 5px;border-radius: 20px;">
              <img src="http://pog.fudan.edu.cn/pggmhc/img/xiaohanzhao.322bd791.jpg" class="image">
              <div style="padding: 5px 10px 10px; max-width: 171px">
                <h5 align="center"> Xiaohan Zhao </h5>
                <span class="position">个人职位 <br> </span>
                <span class="contribution"
                      style="justify-content: center; white-space: pre-wrap">个人贡献个人贡献</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Participants'
}
</script>

<style lang="scss" scoped>

.card-title {
  margin-left: 8px;
  font-size: 20px;
  color: #606266;
}

span {
  font-size: 14px;
}

p {
  margin-left: 20px;
  color: #606266;
}

.el-card {
  .el-card_body {
    color: #606266;
    position: relative;
    height: 220px;

    img {
      border-radius: 20px;
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;

      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }

  margin-bottom: 60px;
}

</style>
