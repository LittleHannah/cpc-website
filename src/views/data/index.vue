<template>
  <div style="padding: 0px 10px 20px">
    <h2>Code Availability</h2>
    All the codes needed to reproduce the results from this work can be found on GitHub, <a
      href="https://github.com/orgs/Shuhua-Group/repositories">https://github.com/orgs/Shuhua-Group/repositories</a>.
    <h2>The CPC Phase I Data Availability</h2>
    The release of the CPC Phase I data by this work is permitted by The Ministry of Science and Technology of the
    People’s Republic of China at the National Genomics Data Center (<a href="https://ngdc.cncb.ac.cn">https://ngdc.cncb.ac.cn</a>).

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
    <h3 style="margin:20px 0">Genome annotation files (*.GFF3) for polished assemblies of 58 core samples</h3>
    <div style="padding-left:20px" v-for="c in cpcGfff" :key="c">
      <h4>{{ c }}</h4>
      <ul>
        <li v-for="f in files" :key="f.name" v-if="f.class===c">
          <a :href='`${fileUrl}/${f.class}/${f.name}`' :download='f.name' target="_blank">
            {{ f.name }}
          </a>
        </li>
      </ul>
    </div>

    <h3 style="margin:20px 0">SV file of CPC & HPRC pangenome processed by the <a
        href="https://github.com/Shuhua-Group/PanGenome_VCF_PostProcess" style="color: #4343d0;font-size: 23px">PanGenome_VCF_PostProcess</a>
    </h3>
    <div style="padding-left:20px" v-for="c in cpcSV" :key="c">
      <h4>{{ c }}</h4>
      <div style="margin-left: 15px;color: #383d48">
        We have updated the process strategy about the complex loci with both small variants and SVs alleles, so that
        the number of variants is slightly different than in the paper.<br>
      </div>

      <ul>
        <li v-for="f in files" :key="f.name" v-if="f.class===c">
          <a :href='`${fileUrl}/${f.class}/${f.name}`' :download='f.name' target="_blank">
            {{ f.name }}
          </a>
        </li>
      </ul>

    </div>
    <div class="el-upload__tip"
         @click="frontDownloadB"
         style="cursor: pointer;"
    >
      <h3>
        CPC phase I (updated on Sep 24)
      </h3>
      <div style="margin-left: 20px;">
        <!--/*        <div style="margin-left: 5px;color: #383d48">*/-->
        <h4>
          The haplotype-resolved de novo assemblies (EBV-derived sequences removed)
        </h4>
        <!--        </div>-->
        <li>
          <a style="color: var(--bs-link-color);text-decoration: underline;"
          >
            EBV.contigs
          </a>
        </li>
      </div>
    </div>

    <div style="margin-top: 50px">
      * CPC pangenome reference includes 122 haplotypes of 61 samples from 36 East Asian populations.<br>
      * CPC & HPRC pangenome reference includes all samples in CPC.Phase1 and HPRC.<br>
      * Files with "-full" contain all contigs that could be assigned a chromosome, nothing masked or clipped.<br>
      * Files with "-min.af.0.1" were clipped to keep only nodes covered by >= 10% haplotypes (only suitable for
      short-read mapping).<br>
      * Files with neither suffix were clipped so that path intervals in the graph that span >=10kb without aligning to
      the minigraph are removed.
    </div>


  </div>
</template>

<script>

export default {
  data() {
    return {
      fileUrl: `https://pog.fudan.edu.cn/cpc/files`,

      cpc: ['CPC.Phase1.CHM13v2-full', 'CPC.Phase1.CHM13v2', 'CPC.Phase1.CHM13v2-minaf.0.1'],
      cpchprc: ['CPC.HPRC.Phase1.CHM13v2', 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1', 'CPC.HPRC.Phase1.GRCh38-MAF01.cactus264', 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus', 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.full'],
      cpcGfff: ['CPC.p1.58inds.GFF3'],
      cpcSV: ['CPC.HPRC.Phase1.processed.SVs.normed'],
      files: [
        {name: 'CPC.Phase1.CHM13v2-full.gfa.gz', class: 'CPC.Phase1.CHM13v2-full'},
        {name: 'CPC.Phase1.CHM13v2-full.gbwt', class: 'CPC.Phase1.CHM13v2-full'},
        {name: 'CPC.Phase1.CHM13v2-full.gg', class: 'CPC.Phase1.CHM13v2-full'},
        {name: 'CPC.Phase1.CHM13v2-full.xg', class: 'CPC.Phase1.CHM13v2-full'},

        {name: 'CPC.Phase1.CHM13v2.gfa.gz', class: 'CPC.Phase1.CHM13v2'},
        {name: 'CPC.Phase1.CHM13v2.dist', class: 'CPC.Phase1.CHM13v2'},
        {name: 'CPC.Phase1.CHM13v2.gbwt', class: 'CPC.Phase1.CHM13v2'},
        {name: 'CPC.Phase1.CHM13v2.gg', class: 'CPC.Phase1.CHM13v2'},
        {name: 'CPC.Phase1.CHM13v2.min', class: 'CPC.Phase1.CHM13v2'},
        {name: 'CPC.Phase1.CHM13v2.xg', class: 'CPC.Phase1.CHM13v2'},
        {name: 'CPC.Phase1.CHM13v2.vcf.gz', class: 'CPC.Phase1.CHM13v2'},

        {name: 'CPC.Phase1.CHM13v2-minaf.0.1.gfa.gz', class: 'CPC.Phase1.CHM13v2-minaf.0.1'},
        {name: 'CPC.Phase1.CHM13v2-minaf.0.1.dist', class: 'CPC.Phase1.CHM13v2-minaf.0.1'},
        {name: 'CPC.Phase1.CHM13v2-minaf.0.1.gbwt', class: 'CPC.Phase1.CHM13v2-minaf.0.1'},
        {name: 'CPC.Phase1.CHM13v2-minaf.0.1.gg', class: 'CPC.Phase1.CHM13v2-minaf.0.1'},
        {name: 'CPC.Phase1.CHM13v2-minaf.0.1.min', class: 'CPC.Phase1.CHM13v2-minaf.0.1'},
        {name: 'CPC.Phase1.CHM13v2-minaf.0.1.xg', class: 'CPC.Phase1.CHM13v2-minaf.0.1'},

        {name: 'CPC.HPRC.Phase1.CHM13v2.gfa.gz', class: 'CPC.HPRC.Phase1.CHM13v2'},
        {name: 'CPC.HPRC.Phase1.CHM13v2.dist', class: 'CPC.HPRC.Phase1.CHM13v2'},
        {name: 'CPC.HPRC.Phase1.CHM13v2.gbwt', class: 'CPC.HPRC.Phase1.CHM13v2'},
        {name: 'CPC.HPRC.Phase1.CHM13v2.gg', class: 'CPC.HPRC.Phase1.CHM13v2'},
        {name: 'CPC.HPRC.Phase1.CHM13v2.min', class: 'CPC.HPRC.Phase1.CHM13v2'},
        {name: 'CPC.HPRC.Phase1.CHM13v2.xg', class: 'CPC.HPRC.Phase1.CHM13v2'},
        {name: 'CPC.HPRC.Phase1.CHM13v2.vcf.gz', class: 'CPC.HPRC.Phase1.CHM13v2'},


        {name: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1.gfa.gz', class: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1'},
        {name: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1.dist', class: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1'},
        {name: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1.gbwt', class: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1'},
        {name: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1.gg', class: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1'},
        {name: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1.min', class: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1'},
        {name: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1.xg', class: 'CPC.HPRC.Phase1.CHM13v2-minaf.0.1'},

        // {name: 'CPC_HPRC_GRCh38ref_pluschm13cn1.MAF001.xg', class: 'CPC.HPRC.Phase1.GRCh38-MAF001.cactus264'},
        // {name: 'CPC_HPRC_GRCh38ref_pluschm13cn1.MAF001.vcf.gz', class: 'CPC.HPRC.Phase1.GRCh38-MAF001.cactus264'},
        // {name: 'CPC_HPRC_GRCh38ref_pluschm13cn1.MAF001.min', class: 'CPC.HPRC.Phase1.GRCh38-MAF001.cactus264'},
        // {name: 'CPC_HPRC_GRCh38ref_pluschm13cn1.MAF001.gbz', class: 'CPC.HPRC.Phase1.GRCh38-MAF001.cactus264'},

        {
          name: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.d21.snarls',
          class: 'CPC.HPRC.Phase1.GRCh38-MAF01.cactus264'
        },
        {
          name: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.d21.min',
          class: 'CPC.HPRC.Phase1.GRCh38-MAF01.cactus264'
        },
        {
          name: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.d21.gbz',
          class: 'CPC.HPRC.Phase1.GRCh38-MAF01.cactus264'
        },
        {
          name: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.d21.dist',
          class: 'CPC.HPRC.Phase1.GRCh38-MAF01.cactus264'
        },

        {
          name: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.snarls',
          class: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus'
        },
        {
          name: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.gbz',
          class: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus'
        },


        {name: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.full.snarls', class: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.full'},
        {name: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.full.og', class: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.full'},
        {name: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.full.hal', class: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.full'},
        {name: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.full.gfa.gz', class: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.full'},
        {name: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.full.gbz', class: 'CPC_HPRC_reconstruct_GRCh38ref_T2Tplus_CN1plus.full'},



        // {
        //   name: 'CPC_HPRC_GRCh38ref_pluschm13cn1.MAF001.for_pangenie.vcf',
        //   class: 'CPC.HPRC.Phase1.GRCh38-MAF001.cactus264'
        // },
        // {name: 'CPC_HPRC_GRCh38ref_pluschm13cn1.MAF001.dist', class: 'CPC.HPRC.Phase1.GRCh38-MAF001.cactus264'},


        {name: 'CPC.p1.58inds.GFF3.tar.gz', class: 'CPC.p1.58inds.GFF3'},

        {name: 'CPC.HPRC.Phase1.processed.SVs.normed.vcf.gz', class: 'CPC.HPRC.Phase1.processed.SVs.normed'},

      ]
    }
  },
  methods: {
    frontDownloadB() {
      var a = document.createElement("a");  // 创建一个<a />标签
      a.href = "EBV.contigs";                  // 设置下载文件地址 注意：使用英文
      a.download = "EBV.contigs";        // 设置下载文件文件名
      a.style.display = "none";             // 隐藏a标签
      document.body.appendChild(a);         // 将a标签追加到文档对象中
      a.click();                            // 点击，浏览器自动下载
      a.remove();                           // 用完就删除<a />标签
    },
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
