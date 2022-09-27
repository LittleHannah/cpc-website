<template>
  <footer class="footer mt-auto py-3 bg-light">
    <div class="row" style="max-width: 1200px;margin: auto;">
      <div class="col-sm">
        <h3>QR Code</h3>
        <img style="width:140px" src="@/assets/img/qrcode.png">
        <a style="display:block" href="https://www.revolvermaps.com/livestats/5890s438kz2/">
          <img src="//rf.revolvermaps.com/w/3/s/a/5/0/2/ffffff/010020/aa0000/5890s438kz2.png" alt="Stats" style="border:0;">
        </a>

      </div>
      <div class="col-sm">
        <h3>Databases</h3>
        <ul>
          <li v-for="item in databases" :key="item.name">
            <a :href="item.link" :title="item.description">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class="col-sm">
        <h3>Related Links</h3>
        <ul>
          <li v-for="item in relatedLinks" :key="item.name">
            <a :href="item.link" :title="item.description">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class="footer-company">
        <p>2022 © All Rights Reserved by CPC</p>
        <p>
          <a href="#/home">Home</a>
          <el-divider direction="vertical" />
          <a href="#/publications">Publications</a>
          <el-divider direction="vertical" />
          <a href="#/about">About</a>
        </p>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'GroupFooter',
  data() {
    return {
      databases: [
        { name: 'PGG.Han', link: 'https://www.pgghan.org/', description: 'The Han Chinese genome database and analysis platform' },
        { name: 'PGG.MHC', link: 'https://pog.fudan.edu.cn/pggmhc', description: 'Toward understanding the diversity of major histocompatibility complexes in human populations' },
        { name: 'PGG.Population', link: 'https://www.pggpopulation.org/', description: 'A database for understanding genomic diversity and genetic ancestry of human populations' },
        { name: 'PGG.SNV', link: 'https://www.pggsnv.org/', description: 'A database for understanding evolutionary and medical implications of human single nucleotide variations in diverse populations' },
        { name: 'PGG.SV', link: 'https://www.biosino.org/pggsv/#/home', description: 'A structural variation (SV) database containing 520,525 SVs from 6,263 genomes worldwide' },
      ],
      relatedLinks: [
        { name: 'HumPOG', link: 'https://pog.fudan.edu.cn', description: 'Human Population Omics Group at Fudan University group website' },
        { name: 'Han100K', link: 'https://pog.fudan.edu.cn/han100k', description: 'Facilitates the understanding of the population structure and history of Han Chinese' },
        { name: 'Asian Admixed Genomes Consortium', link: 'https://aagc.pggpopulation.org/index.html', description: 'Asian Admixed Genomes Consortium' },
        { name: 'School of Life Sciences Fudan University', link: 'https://life.fudan.edu.cn/', description: 'Official website of School of Life Sciences Fudan University' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  font-size: 1.125rem;
}
.footer-company {
  display: flex;
  justify-content: space-between;
  margin:auto;
  width: 1200px;
  color: rgb(145,150,159);
  border-top: 1px dashed rgb(197, 197, 197);
  padding: 10px 10px 0px;
  margin-top: 10px;
  > p > a {
    margin-left: 15px;
  }
}
p {
  margin:0
}
li::before {
  content: '';
  display: inline-block;
  width: 0px;
  height: 0px;
  border-left: 5px solid rgb(197, 197, 197);
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-radius: 2px;
}
li {
  list-style-type:none;
  cursor: pointer;
  line-height: 32px;
}
ul {
  margin: 0 !important;
  padding-left: 0px
}

</style>