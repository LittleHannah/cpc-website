<template>
  <div>
    <div style="max-width: 1200px; padding: 0 10px 20px">
      <h1 style="margin-top:20px">Welcome to CPC (Phase I)</h1>

      <div class="card-content">
        <h2>Sample Distribution</h2>
        <p>
          Here, we present the first effort (Phase I) of the Chinese
          Pangenome Consortium (CPC) with a collection of 116 high-quality and haplotype-phased de novo assemblies based
          on 58 core samples representing 36 minority Chinese ethnic groups.
        </p>
        <div style="display:flex;justify-content:space-between;margin-bottom: 40px;flex-wrap: wrap">
          <div data-aos="fade-up" class="digit-card">
            <div style="font-size:80px;font-weight:650;text-align:center;color: #d24733">116</div>
            <div style="font-size:20px;font-weight:400;text-align:center;color:#606266;">high-quality and
              haplotype-phased de novo assemblies
            </div>
          </div>
          <div data-aos="fade-up" class="digit-card">
            <div style="font-size:80px;font-weight:650;text-align:center;color: #6e982f">58</div>
            <div style="font-size:20px;font-weight:400;text-align:center;color:#606266;">core samples</div>
          </div>
          <!--          <div class="digit-card" style="margin-top:50px">-->
          <div data-aos="fade-up" class="digit-card">
            <div style="font-size:80px;font-weight:650;text-align:center;color: #ffab13">36</div>
            <div style="font-size:20px;font-weight:400;text-align:center;color:#606266;">minority Chinese ethnic
              groups
            </div>
          </div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom: 40px;">
          <img data-aos="fade-right" src="@/assets/img/home/sample_distribution_new.png" style="width:100%;border-radius: 10px;">
        </div>

        <h2>Sequencing Quality</h2>
        <p>
          With > 30.65× High-Fidelity long-reads sequence
          coverage, an average contiguity N50 > 35.63 Mb, and an average total size of 3.01 Gb, the CPC core
          assemblies
          cover ~96.54% and ~93.59% of the latest reference sequence GRCh38 and a Telomere-to-Telomere haploid
          assembly
          T2T-CHM13, respectively.
        </p>
        <div style="max-width: 1200px;display:flex;justify-content:space-between;margin-bottom: 40px;font-size: 16px;flex-wrap: wrap;">
          <div data-aos="zoom-in" class="sq-digit-container">
            <div class="sq-digit">>30.65×</div>
            <div style="width: 220px;">High-Fidelity long-reads sequence coverage</div>
          </div>
          <div data-aos="zoom-in" class="sq-digit-container">
            <div class="sq-digit">>35.63 Mb</div>
            <div style="width: 220px;">Average contiguity N50</div>
          </div>
          <div data-aos="zoom-in" class="sq-digit-container">
            <div class="sq-digit">3.01 Gb</div>
            <div style="width: 220px;">Average total size</div>
          </div>
          <div data-aos="zoom-in" class="sq-digit-container">
            <div class="sq-digit">~96.54%</div>
            <div style="width: 220px;">Coverage of the latest reference sequence GRCh38</div>
          </div>
          <div data-aos="zoom-in" class="sq-digit-container">
            <div class="sq-digit">~93.59%</div>
            <div style="width: 220px;">Coverage of T2T-CHM13</div>
          </div>
        </div>
        <h2>New Findings</h2>
        <p>
          Moreover, the CPC Phase I data add <b>189 million base pairs of euchromatic polymorphic
          sequence</b> and <b>1,367 protein-coding gene duplications</b> to GRCh38. We also identify from the CPC
          pangenome <b>~15.9
          million small variants</b> and <b>~78 thousand structural variants (SVs)</b>, of which ~6.1 million (38.0%)
          small variants
          and ~25 thousand (32.4%) SVs are not reported in a recently released pangenome reference by the Human
          Pangenome
          Reference Consortium (HPRC). The CPC data demonstrate a remarkable increase in discovering novel or missing
          sequences when individuals are included from underrepresented minority ethnic groups, suggesting the
          necessity
          of a more comprehensive sampling effort for both CPC and HPRC.
        </p>
      </div>

      <h2>Motivations</h2>
      <div class="card-content">
        <p>Despite over the last two decades the reference human genome sequence has served as the foundation for
          genetic
          and biomedical research and applications, there is a broad consensus that no single reference sequence can
          represent the genomic diversity of global populations. On one hand, high-quality <b>population-specific</b> and
          <b>haplotype-resolved</b>  genome references are necessary for genetic and medical analysis. On the other hand,
          there is a clear need to shift <b>from a single reference to a pangenome</b> form that better represents genomic
          diversity, or allelic variation within and across human populations.</p>

        <p>With the advancement of long-read
          sequencing technologies as well as computational methods, it is now feasible to enable pangenomic
          construction
          to capture the missed variations from a large collection of diverse genomes. The Human Pangenome Reference
          Consortium (HPRC) recently constructed a draft human pangenome reference based on 47 samples of worldwide
          populations but with <b>East Asian population samples under-represented</b> (n=4). In particular, only three
          southern Han Chinese samples are included in the HPRC reference which is inadequate to represent the genomic
          diversity of ethnic groups in a region such as China which is populated by 1.44 billion people. We showed
          previously that the genetic diversity in Asia was not well-covered by large-scale international
          collaborative
          projects such as the 1000 Genomes Project. <b>China harbors</b> a great genetic diversity with <b>55 officially
          recognized ethnic minority groups</b> in addition to the <b>Han Chinese majority</b> and a considerable number of
          <b>unrecognized ethnic groups</b>. </p>

        <p>Despite advances in sequencing technologies leading to the achievement of a
          Telomere-to-Telomere haploid assembly T2T-CHM137, few Chinese genomes have been de novo assembled to
          high-quality haplotype sequences using long-read DNA sequencing technologies. The two only published
          studies on the Chinese pangenome were limited to Han Chinese samples and short-read sequencing data. The
          need to improve the representation of diverse ancestral backgrounds in genomic research is well known.
          There is an urgency to establish a high-quality pangenome reference that better represents the great genomic
          diversity of Chinese populations.</p>

        <p><b>The Chinese Pangenome Consortium (CPC)</b> aims to de novo sequence <b>at least 500
          individuals</b> to better detect and catalog sequence variants of the Chinese populations using <b>the 3rd
          generation
          sequencing technologies</b>. Here, we present the draft CPC pangenome reference based on the first sequencing
          effort (Phase I) of the CPC 116 high-quality de novo assemblies from 58 core samples representing 36
          minority
          Chinese ethnic groups and 6 assemblies of the Han Chinese. We employed state-of-art sequencing technologies
          and computational methods to produce highquality, phased, chromosome-level haplotype sequences that are
          comparable to that of the HPRC.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      digits: [
        {digit: 116, description: 'high-quality and haplotype-phased de novo assemblies'},
        {digit: 58, description: 'core samples'},
        {digit: 36, description: 'minority Chinese ethnic groups'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/index.scss';
p > b {
  color: #1D4193;
}
.sq-digit {
  font-size: 40px;
  font-weight: 650;
  color: #1D4193
}

.sq-digit-container {
  padding: 10px 0;
  margin-right: 10px;
  border-radius: 10px;
  background-color: rgba(218, 230, 239, 0.3);
  text-align: center;
  // border-right: 1px solid #DCDFE6;
  width: 220px;
  margin-top: 10px;
}

.digit-card {
  //background-color: rgba(218, 239, 222, 0.5);
  background-color: rgba(218, 230, 239, 0.3);
  margin-top: 10px;
  //background-color: #F5F7FA;
  border-radius: 10px;
  padding: 10px 20px;
  //margin-left: 60px;
  width: 350px;
}

.card-title {
  font-size: 20px;
  padding: 1rem 0rem;
}

.card-content {
  font-size: 18px;
}

p {
  color: #606266;
}
</style>
