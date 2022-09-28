<template>
  <div>
    <!--    <div class="el-tabs_content">-->
    <!--      <div role="tabpanel" id="pane-1" aria-labelledby="tab-1" class="el-tab-pane" style="padding: 20px;display: none;" aria-hidden="true">-->
    <!--        <div>-->
    <div class="title" style="max-width: 1200px;">
      Contact Us
    </div>

    <div style="display: flex;flex-wrap: wrap;justify-content: space-between;margin-top: 20px;">
      <div class="col-sm">
        <div class="icon-group">
          <div class="icon-border">
            <img src="http://pog.fudan.edu.cn/pggmhc/img/Team.e3c06613.svg" class="icon-img">
          </div>
          <div style="width: 420px;">
            <p class="icon-title">Group</p>
            <h6>Human Population Omics Group</h6>
          </div>
        </div>
      </div>

      <div class="col-sm">
        <div class="icon-group">
          <div class="icon-border">
            <img src="http://pog.fudan.edu.cn/pggmhc/img/institution.c75e4c0a.svg" class="icon-img">
          </div>
          <div style="width: 420px;">
            <p class="icon-title">Institution</p>
            <h6>Fudan University</h6>
          </div>
        </div>
      </div>

      <div class="col-sm">
        <div class="icon-group">
          <div class="icon-border">
            <img src="http://pog.fudan.edu.cn/pggmhc/img/mail.b573cf73.svg" class="icon-img">
          </div>
          <div style="width: 420px;">
            <p class="icon-title">Email</p>
            <h6>humpog@fudan.edu.cn</h6>
          </div>
        </div>
      </div>

      <div class="col-sm">
        <div class="icon-group">
          <div class="icon-border">
            <img src="http://pog.fudan.edu.cn/pggmhc/img/address.3506e28e.svg" class="icon-img">
          </div>
          <div style="width: 420px;">
            <p class="icon-title">Address</p>
            <h6>School of Life Sciences, Song Hu Road 2005, Fudan University (Jiangwan Campus), Shanghai, China,
              200438</h6>
          </div>
        </div>
      </div>
    </div>
    <img src="http://pog.fudan.edu.cn/pggmhc/img/map.445ad7b1.png" style="width: 100%; margin-top: 20px;">
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'About'
}
</script>

<style lang="scss" scoped>
.el-tabs__content {
  overflow: hidden;
  position: relative;
}

.title {
  //background-color: #f6f8fd;
  border-radius: 5px;
  height: 60px;
  color: #285fca;
  line-height: 60px;
  font-size: 28px;
  font-weight: 540;
  padding-left: 15px;
}

.icon-group {
  display: flex;
  justify-content: space-between;
  width: 490px;
  margin-bottom: 20px;
}

.icon-border {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 1.5px solid #e4e7ed;
  width: 55px !important;
  height: 55px;
  //box-shadow: 0 4px 15px 0 rgb(0 0 0 / 10%);
}

.icon-img {
  display: inline-block;
  height: 30px;
  width: 30px;
  position: absolute;
  margin: auto;
}

.icon-title {
  margin-top: 7px;
  margin-bottom: 2px;
  color: #909399;
}

h4 {
  margin: 0;
}
</style>
