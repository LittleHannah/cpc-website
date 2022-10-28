<template>
  <div>
    <div class="row" style="max-width: 1200px;padding: 15px;">
<!--        <SampleMap/>-->
      <div class="card-title" style="padding: 15px;">
        Chinese Pangenome Consortium (Phase I)
      </div>
      <div class="card-content">
        <p>
          Human genomics is witnessing an ongoing paradigm shift from a single reference sequence to a pangenome form
          but
          populations of Asian ancestry are underrepresented. Here, we present the first effort (Phase I) of the Chinese
          Pangenome Consortium (CPC) with a collection of 116 high-quality and haplotypephased de novo assemblies based
          on
          58 core samples representing 36 minority Chinese ethnic groups. With > 30.65× High-Fidelity long-reads
          sequence
          coverage, an average contiguity N50 > 35.63 Mb, and an average total size of 3.01 Gb, the CPC core assemblies
          cover ~96.54% and ~93.59% of the latest reference sequence GRCh38 and a Telomere-to-Telomere haploid assembly
          T2T-CHM13, respectively. Moreover, the CPC Phase I data add 189 million base pairs of euchromatic polymorphic
          sequence and 1,367 protein-coding gene duplications to GRCh38. We also identify from the CPC pangenome ~15.9
          million small variants and ~78 thousand structural variants (SVs), of which ~6.1 million (38.0%) small
          variants
          and ~25 thousand (32.4%) SVs are not reported in a recently released pangenome reference by the Human
          Pangenome
          Reference Consortium (HPRC)1. The CPC data demonstrate a remarkable increase in discovering novel or missing
          sequences when individuals are included from underrepresented minority ethnic groups, suggesting the necessity
          of a more comprehensive sampling effort for both CPC and HPRC.
        </p>
      </div>

      <div class="card-title" style="padding: 20px;">
        Introduction
      </div>
      <div class="card-content">
        <p>
          Despite over the last two decades the reference human genome sequence has served as the foundation for genetic
          and biomedical research and applications, there is a broad consensus that no single reference sequence can
          represent the genomic diversity of global populations. On one hand, high-quality population-specific and
          haplotype-resolved genome references are necessary for genetic and medical analysis 2. On the other hand,
          there is a clear need to shift from a single reference to a pangenome form that better represents genomic
          diversity, or allelic variation within and across human populations3. With the advancement of long-read
          sequencing technologies as well as computational methods, it is now feasible to enable pangenomic construction
          to capture the missed variations from a large collection of diverse genomes4. The Human Pangenome Reference
          Consortium (HPRC) recently constructed a draft human pangenome reference based on 47 samples of worldwide
          populations but with East Asian population samples under-represented (n=4)1. In particular, only three
          southern Han Chinese samples are included in the HPRC reference which is inadequate to represent the genomic
          diversity of ethnic groups in a region such as China which is populated by 1.44 billion people. We showed
          previously that the genetic diversity in Asia was not well-covered by large-scale international collaborative
          projects such as the 1000 Genomes Project 5,6. China harbors a great genetic diversity with 55 officially
          recognized ethnic minority groups in addition to the Han Chinese majority and a considerable number of
          unrecognized ethnic groups. Despite advances in sequencing technologies leading to the achievement of a
          Telomere-to-Telomere haploid assembly T2T-CHM137, few Chinese genomes have been de novo assembled to
          high-quality haplotype sequences using long-read DNA sequencing technologies2,8-11. The two only published
          studies on the Chinese pangenome were limited to Han Chinese samples and short-read sequencing data12,13. The
          need to improve the representation of diverse ancestral backgrounds in genomic research is well known14,15.
          There is an urgency to establish a high-quality pangenome reference that better represents the great genomic
          diversity of Chinese populations. The Chinese Pangenome Consortium (CPC) aims to de novo sequence at least 500
          individuals to better detect and catalog sequence variants of the Chinese populations using the 3rd generation
          sequencing technologies. Here, we present the draft CPC pangenome reference based on the first sequencing
          effort (Phase I) of the CPC 116 high-quality de novo assemblies from 58 core samples representing 36 minority
          Chinese ethnic groups and 6 assemblies of the Han Chinese. We employed state-of-art sequencing technologies
          and computational methods to produce highquality, phased, chromosome-level haplotype sequences that are
          comparable to that of the HPRC.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import SampleMap from '@/components/SampleMap.vue';
//
// export default {
//   name: "Home",
//   components: {SampleMap}
// }
</script>

<style lang="scss" scoped>

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
