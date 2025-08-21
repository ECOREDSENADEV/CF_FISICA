<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Oscilaciones y ondas

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema7/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-1.px-4.py-5(data-aos="fade-left")
              p.mb-0 Una oscilación es una variación, perturbación o fluctuación en el tiempo de un medio o sistema. En física, química e ingeniería, se describe como el movimiento repetitivo alrededor de una posición de equilibrio. El estudio de las oscilaciones sirve como punto de partida para comprender el comportamiento de las ondas, ya que una onda puede interpretarse como un conjunto de oscilaciones que se propagan en el espacio.
    
    
        .row.justify-content-center
          .col-lg-10
            .bg-color-3.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-xl-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema7/2.svg', alt='')
                .col-xl
                  .p-4
                    p.mb-0 Una onda se define como la propagación de una perturbación que transporta energía sin transportar materia. Esta perturbación puede modificar propiedades como la densidad, la presión o los campos eléctricos y magnéticos, y puede propagarse tanto en un medio material (aire, agua, suelo) como en el vacío (ondas electromagnéticas).
        
    separador
        
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Oscilaciones
    
    p Las oscilaciones representan movimientos periódicos o repetitivos en torno a una posición de equilibrio, y se caracterizan por parámetros como amplitud, frecuencia y período.
    p.mb-0 Clasificación de las oscilaciones:

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  figure
                    img(src='@/assets/curso/tema7/3.svg', alt='Texto que describa la imagen')
              h5.text-center.mb-4 Armónica simple
              p.text-center La fuerza restauradora es proporcional al desplazamiento. Ejemplo: péndulo de pequeña amplitud.
        
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  figure
                    img(src='@/assets/curso/tema7/4.png', alt='Texto que describa la imagen')
              h5.text-center.mb-4 Amortiguada
              p.text-center La amplitud disminuye con el tiempo por pérdida de energía. Ejemplo: vibración de un resorte en aceite.
        
          .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  figure
                    img(src='@/assets/curso/tema7/5.svg', alt='Texto que describa la imagen')
              h5.text-center.mb-4 Forzada
              p.text-center Existe una fuerza externa periódica que mantiene la oscilación. Puede producir resonancia si coincide con la frecuencia natural.

        separador
        
        #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 7.2 Ondas
        
        p.mb-5 Una onda se origina cuando una oscilación se propaga en el espacio, transportando energía sin trasladar materia. Los parámetros fundamentales de una onda son:

        .row.justify-content-center
          .col-lg-10
            .bg-color-3.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-xl-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema7/6.svg', alt='')
                .col-xl
                  .p-4
                    p.mb-0 <b>Cresta y valle</b> (en ondas transversales).
                    p.mb-0 <b>Longitud de onda (λ)</b>: distancia entre dos crestas consecutivas.
                    p.mb-0 <b>Frecuencia (f):</b> número de oscilaciones por segundo (Hz).
                    p.mb-0 <b>Velocidad de propagación (v)</b>: v=λ*f

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Clasificación de las ondas
    
    p.mb-5 Para comprender mejor el comportamiento de las ondas, se pueden clasificar según la dirección de vibración de las partículas del medio y según la necesidad de un medio material para propagarse:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Clasificación de las ondas
        .tabla-a.color-acento-contenido.pst-3
          table
            thead
              tr.text-center
                th.bg-color-6.text-white  Criterio
                th.bg-color-6.text-white  Tipo de onda
                th.bg-color-6.text-white  Características
            tbody
              tr.bg-color-white
                td Según la dirección de oscilación
                td Transversal
                td Las partículas del medio vibran perpendicular a la dirección de propagación. Ej.: ondas en una cuerda.
              tr.bg-color-7
                td Según la dirección de oscilación
                td Longitudinal
                td Las partículas vibran en la misma dirección de la propagación. Ej.: sonido en el aire.
              tr.bg-color-white
                td Según la necesidad de un medio
                td Mecánicas
                td Necesitan un medio material para propagarse. Ej.: sonido, ondas en el agua.
              tr.bg-color-7
                td Según la necesidad de un medio
                td Electromagnéticas
                td No requieren medio material y pueden propagarse en el vacío. Ej.: luz, microondas.

    


</template>

<script>
export default {
  name: 'Tema3',
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
