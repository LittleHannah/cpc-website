<template>
  <div style="padding: 0px 10px 20px">
    <h2>Code Availability</h2>
    All the codes needed to reproduce the results from this work can be found on GitHub, <a href="https://github.com/orgs/Shuhua-Group/repositories">https://github.com/orgs/Shuhua-Group/repositories</a>.
    <h2>The CPC Phase I Data Availability</h2>
    The release of the CPC Phase I data by this work is permitted by The Ministry of Science and Technology of the People’s Republic of China (permission no. 2022BAT2142, 2022BAT1947, and 2022BAT1948) at the National Genomics Data Center  (<a href="https://ngdc.cncb.ac.cn">https://ngdc.cncb.ac.cn</a>).

    <h3 style="margin:20px 0">CPC pangenome reference</h3>
    <div style="padding-left:20px" v-for="c in cpc" :key="c">
      <h4>{{ c }}</h4>
      <ul>
        <li v-for="f in files" :key="f.name" v-if="f.class===c">
          <a :href='`${fileUrl}/${f.class}/${f.name}`' :download='f.name' target="_blank">
            {{ f.name }}
          </a>
        </li>
      </ul>
    </div>
    <h3 style="margin:20px 0">CPC & HPRC pangenome reference</h3>
    <div style="padding-left:20px" v-for="c in cpchprc" :key="c">
      <h4>{{ c }}</h4>
      <ul>
        <li v-for="f in files" :key="f.name" v-if="f.class===c">
          <a :href='`${fileUrl}/${f.class}/${f.name}`' :download='f.name' target="_blank">
            {{ f.name }}
          </a>
        </li>
      </ul>
    </div>
    * CPC pangenome reference includes 122 haplotypes of 61 samples from 36 East Asian populations.<br>
    * CPC & HPRC pangenome reference includes all samples in CPC.Phase1 and HPRC.<br>
    * Files with "-full" contain all contigs that could be assigned a chromosome, nothing masked or clipped.<br>
    * Files with "-min.af.0.1" were clipped to keep only nodes covered by >= 10% haplotypes (only suitable for short-read mapping).<br>
    * Files with neither suffix were clipped so that path intervals in the graph that span >=10kb without aligning to the minigraph are removed.

  </div>
</template>

<script>

export default {
  data(){
    return {
      fileUrl: `https://pog.fudan.edu.cn/cpc/files`,
      cpc: ['CPC.Phase1.CHM13v2-full', 'CPC.Phase1.CHM13v2', 'CPC.Phase1.CHM13v2-minaf.0.1'],
      cpchprc: ['CPC.HPRC.Phase1.CHM13v2', 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1'],
      files: [
        { name: 'CPC.Phase1.CHM13v2-full.gfa.gz', class: 'CPC.Phase1.CHM13v2-full'},
        { name: 'CPC.Phase1.CHM13v2-full.gbwt', class: 'CPC.Phase1.CHM13v2-full'},
        { name: 'CPC.Phase1.CHM13v2-full.gg', class: 'CPC.Phase1.CHM13v2-full'},
        { name: 'CPC.Phase1.CHM13v2-full.xg', class: 'CPC.Phase1.CHM13v2-full'},

        { name: 'CPC.Phase1.CHM13v2.gfa.gz', class: 'CPC.Phase1.CHM13v2'},
        { name: 'CPC.Phase1.CHM13v2.dist', class: 'CPC.Phase1.CHM13v2'},
        { name: 'CPC.Phase1.CHM13v2.gbwt', class: 'CPC.Phase1.CHM13v2'},
        { name: 'CPC.Phase1.CHM13v2.gg', class: 'CPC.Phase1.CHM13v2'},
        { name: 'CPC.Phase1.CHM13v2.min', class: 'CPC.Phase1.CHM13v2'},
        { name: 'CPC.Phase1.CHM13v2.xg', class: 'CPC.Phase1.CHM13v2'},

        { name: 'CPC.Phase1.CHM13v2-minaf.0.1.gfa.gz', class: 'CPC.Phase1.CHM13v2-minaf.0.1'},
        { name: 'CPC.Phase1.CHM13v2-minaf.0.1.dist', class: 'CPC.Phase1.CHM13v2-minaf.0.1'},
        { name: 'CPC.Phase1.CHM13v2-minaf.0.1.gbwt', class: 'CPC.Phase1.CHM13v2-minaf.0.1'},
        { name: 'CPC.Phase1.CHM13v2-minaf.0.1.gg', class: 'CPC.Phase1.CHM13v2-minaf.0.1'},
        { name: 'CPC.Phase1.CHM13v2-minaf.0.1.min', class: 'CPC.Phase1.CHM13v2-minaf.0.1'},
        { name: 'CPC.Phase1.CHM13v2-minaf.0.1.xg', class: 'CPC.Phase1.CHM13v2-minaf.0.1'},
        
        { name: 'CPC.HPRC.Phase1.CHM13v2.gfa.gz', class: 'CPC.HPRC.Phase1.CHM13v2'},
        { name: 'CPC.HPRC.Phase1.CHM13v2.dist', class: 'CPC.HPRC.Phase1.CHM13v2'},
        { name: 'CPC.HPRC.Phase1.CHM13v2.gbwt', class: 'CPC.HPRC.Phase1.CHM13v2'},
        { name: 'CPC.HPRC.Phase1.CHM13v2.gg', class: 'CPC.HPRC.Phase1.CHM13v2'},
        { name: 'CPC.HPRC.Phase1.CHM13v2.min', class: 'CPC.HPRC.Phase1.CHM13v2'},
        { name: 'CPC.HPRC.Phase1.CHM13v2.xg', class: 'CPC.HPRC.Phase1.CHM13v2'},

        { name: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1.gfa.gz', class: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1' },
        { name: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1.dist', class: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1' },
        { name: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1.gbwt', class: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1' },
        { name: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1.gg', class: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1' },
        { name: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1.min', class: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1' },
        { name: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1.xg', class: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/index.scss';
.card-title {
  margin-left: 8px;
  font-size: 20px;
  color: #5F74A4FF;
}

.card-content {
  text-align: justify;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  font-size: 16px;
  color: #606266;
}

p {
  text-align: justify;
  color: #606266;
}
</style>
