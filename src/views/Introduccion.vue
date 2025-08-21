<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.px-4.py-5(data-aos="fade-left")
          p.mb-0 La física es una ciencia que busca comprender, describir y explicar los fenómenos naturales que ocurren en el universo, analizando cómo interactúan la energía, la materia, el espacio y el tiempo. A través de su estudio, es posible interpretar los cambios que se producen en el entorno y establecer principios que rigen el comportamiento de los cuerpos, desde el movimiento de los planetas hasta las partículas más pequeñas.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/2.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Esta disciplina se apoya en la observación, la medición y la formulación de leyes que permiten predecir resultados en situaciones concretas. Para lograrlo, se utilizan magnitudes físicas que representan propiedades medibles de los cuerpos, así como sistemas de unidades que estandarizan estas mediciones. Gracias a este enfoque, la física se convierte en una herramienta fundamental para la ciencia y la tecnología, al ofrecer bases sólidas para la comprensión del mundo material.
    
    .row.align-items-center
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 El aprendizaje de la física fomenta el pensamiento analítico y la resolución de problemas, al conectar conceptos teóricos con situaciones cotidianas y aplicaciones prácticas. Desde el estudio del movimiento y las fuerzas hasta la termodinámica, el electromagnetismo y las ondas, cada uno de sus campos contribuye a explicar fenómenos esenciales para la vida y el desarrollo tecnológico, integrando conocimiento que impulsa la innovación y el progreso científico.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
