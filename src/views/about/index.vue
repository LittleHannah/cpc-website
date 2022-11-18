<template>
  <div>
    <h2>
        Aims and Scope
      </h2>
      <div>
        <p>
          China is populated with multiple ethnic groups with high cultural and language diversities, including 55
          officially recognized ethnic minority groups in addition to the Han Chinese majority and a considerable number
          of unrecognized ethnic groups. We showed previously that Individuals of Chinese or Asian ancestry harbor a
          great genomic diversity.</p>

        <p>As the first effort (Phase I) of the CPC, the current pangenome reference
          constructed by the CPC was based on 58 CPC core samples representing 36 of the 55 ethnic minority groups and 8
          linguistic groups. At the stage of Phase II, apart from the initial 58 core samples, CPC aims to produce
          high-quality, phased, chromosome-level haplotype sequences of 500 individuals, which will cover the 56 ethnic
          groups as officially defined as well as a number of unidentified ethnic groups that have never been
          well-covered by any previous work, such as Sherpa, Dolan, Keriyan, Deng, Lop Nur and so on. A more ambitious
          endeavor of the CPC, most likely at its Phase III or partly at Phase II, is to generate telomere-to-telomere
          (T2T) chromosome sequence assemblies with both HiFi reads and nanopore ultra-long reads data. We appreciate
          that the fully-phased T2T diploid genomes will be paradigm-shift and the new standard in population-level
          genomic studies. In parallel with the effort to document genomic diversity, significant efforts have been
          invested in comprehensively annotating the elements in the CPC genomes that confer function, such as genes,
          control elements, and transcript isoforms.</p>

        <p>China has been an important part of the global force of human
          genomics since the Human Genome Project, the International HapMap Project, and the 1000 Genomes Project.
          Despite regional efforts are crucial considering the differentiated genetic makeups of populations in
          different geographical places as we have shown in this first report of CPC, we believe there is great room for
          international collaborations to increase between China and other countries in building the pangenome reference
          and applying for various basic and clinical research. Similar to many other collaborative projects in human
          genomics, the success of CPC requires a large team of scientists with expertise in population genomics, genome
          sequencing technologies, computational biology, and ethics, within China as well as international
          collaborations. CPC also aims to improve and broaden foundational genomic data resources to be shared with
          both domestic and international communities.
        </p>
      </div>
      <h2>
        Contact Us
      </h2>
    <div style="display: flex;flex-wrap: wrap;justify-content: space-between;margin-top: 20px;">
      <div data-aos="fade-up" class="col-sm">
        <div class="icon-group">
          <div class="icon-border">
            <img src="@/assets/img/about/Group.svg" class="icon-img">
          </div>
          <div style="width: 420px;">
            <p class="icon-title">Group</p>
            <h6>Human Population Omics Group</h6>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" class="col-sm">
        <div class="icon-group">
          <div class="icon-border">
            <img src="@/assets/img/about/institution.svg" class="icon-img">
          </div>
          <div style="width: 420px;">
            <p class="icon-title">Institution</p>
            <h6>Fudan University</h6>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" class="col-sm">
        <div class="icon-group">
          <div class="icon-border">
            <img src="@/assets/img/about/mail.svg" class="icon-img">
          </div>
          <div style="width: 420px;">
            <p class="icon-title">Email</p>
            <h6>humpog@fudan.edu.cn</h6>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" class="col-sm">
        <div class="icon-group">
          <div class="icon-border">
            <img src="@/assets/img/about/address.svg" class="icon-img">
          </div>
          <div style="width: 420px;">
            <p class="icon-title">Address</p>
            <h6>School of Life Sciences, Song Hu Road 2005, Fudan University (Jiangwan Campus), Shanghai, China,
              200438</h6>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/img/about/map.png"
         style="width: 100%;margin-bottom: 20px;">
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'About'
}
</script>

<style lang="scss" scoped>
@import '@/scss/index.scss';
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
  font-size: 24px;
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

.card-title {
  margin-left: 8px;
  font-size: 20px;
  color: #5F74A4FF;
}

p {
  color: #606266;
  font-size: 18px;
}
</style>
