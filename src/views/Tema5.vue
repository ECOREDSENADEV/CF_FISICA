<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 TermodinámicaTema 3
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-1.px-4.py-5(data-aos="fade-left")
              p.mb-0 La termodinámica estudia la relación entre energía térmica y energía mecánica, basada en la ley de conservación de la energía. Esto implica que, al aumentar un tipo de energía, debe producirse una disminución en otra forma de energía. Esta rama de la física analiza los cambios de temperatura, presión y volumen en un sistema físico.
        
        p.mb-5 El término proviene de “termo” (calor) y “dinámica” (movimiento), ya que la termodinámica estudia el movimiento desordenado de las partículas. Se sustenta en cuatro leyes o principios fundamentales:

        .row
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/2.png", data-aos="zoom-in")
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-8")
              div(titulo="Principio cero")
                p.ms-5 Define la temperatura como una propiedad de los sistemas. Si dos sistemas están en equilibrio térmico con un tercero, estarán en equilibrio entre sí. La propiedad que comparten es la temperatura.
              div(titulo="Primer principio")
                p.ms-5 Considera la energía como una magnitud conservativa. Afirma que, cuando un cuerpo caliente entra en contacto con uno más frío, el calor se transfiere hasta alcanzar un equilibrio térmico con igual temperatura en ambos cuerpos.
              div(titulo="Segundo principio")
                p.ms-5 Establece la irreversibilidad de los fenómenos físicos e introduce la entropía como medida del desorden molecular, que no es conservativa. El calor fluye espontáneamente de un cuerpo caliente a uno frío, nunca al contrario.
              div(titulo="Tercer principio")
                p.ms-5 Indica que es imposible alcanzar el cero absoluto con un número finito de transformaciones. Además, la entropía de un sólido perfectamente cristalino a 0 Kelvin es cero, ya que no existe desorden molecular.

        separador
        
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.1 Parámetros termodinámicos fundamentales
        
    p.mb-5 El siguiente video explica los parámetros termodinámicos, que son magnitudes físicas medibles en un sistema y que determinan su estado termodinámico. Se describen las variables de estado o funciones de estado, diferenciando entre propiedades intensivas, que no dependen de la cantidad de materia, y propiedades extensivas, que sí lo hacen. Además, se presentan ejemplos de sistemas abiertos, cerrados y aislados, mostrando cómo intercambian materia y energía con su entorno. Estos conceptos son esenciales para comprender el comportamiento y el equilibrio de los sistemas en termodinámica.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Escalas termométricas
    
    p.mb-5 La temperatura es una magnitud física escalar que indica el grado de agitación de las moléculas de un cuerpo. Mientras mayor sea el movimiento de sus moléculas, mayor será su temperatura. En otras palabras, la temperatura de un cuerpo es proporcional al movimiento molecular que lo conforma. Las escalas termométricas se utilizan para medir la temperatura de los cuerpos. Estas pueden clasificarse en absolutas o relativas, según el punto de referencia empleado:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        h2.mb-5 Escalas absolutas
        p Señalan el valor del cero absoluto, es decir, la temperatura mínima posible, donde cesa el movimiento molecular.
      .col-md.tarjeta.color-secundario.p-5
        h2.mb-5 Escalas relativas
        p Dependen de puntos de referencia basados en propiedades físicas, como los puntos de ebullición y congelación del agua.

    p.mb-5 A continuación, se presentan las principales escalas termométricas:

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema5/3.svg', alt='Texto que describa la imagen')
              h5.text-center.mb-4 Celsius (°C)
              p.text-center Creada por Anders Celsius (1742). Basada en el punto de congelación del agua (0 °C) y el punto de ebullición (100 °C). Su uso es común en aplicaciones domésticas y clínicas.
        
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema5/4.svg', alt='Texto que describa la imagen')
              h5.text-center.mb-4 Kelvin (K)
              p.text-center Desarrollada por Lord William Thomson Kelvin. Es una escala absoluta. Su cero absoluto equivale a -273 °C o -459 °F. El incremento de 1 K = 1 °C. Es la escala más usada en estudios científicos.
        
          .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema5/5.svg', alt='Texto que describa la imagen')
              h5.text-center.mb-4 Fahrenheit (°F)
              p.text-center Diseñada por Gabriel Daniel Fahrenheit. Utilizada principalmente en Estados Unidos y el Reino Unido. Su punto de congelación es 32 °F y el punto de ebullición es 212 °F, con 180 divisiones entre ambos.

        separador
        
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.3 Procesos termodinámicos
        
        p.mb-5 Los procesos termodinámicos son los cambios o evoluciones en las magnitudes o propiedades termodinámicas de un cuerpo, producidos por las interacciones de los sistemas que lo componen. Estos procesos se clasifican según la variable termodinámica que permanece constante durante el cambio.

        .bg-full-width.bg-fondo-slider.mb-5
          .p-4.p-md-5
            SlyderA(tipo="b").bg-white.tarjeta.p-4
              .row.align-items-center.p-4.p-md-5.justify-content-around
                .col-lg-4.order-2
                  figure
                    img(src="@/assets/curso/tema5/6.png")
                .col-lg-4.order-1.mb-3.mb-lg-0
                  h4.mb-5 Isotérmico
                  p La temperatura permanece constante durante todo el proceso. Es un cambio reversible.
                  ul.lista-ul--color
                    li.mb-0.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Representación gráfica: Curvas llamadas isotermas en un diagrama P-V (diagrama de Clapeyron), con forma de hipérbolas equiláteras.
                    li.mb-0.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Ecuación característica: PV = T (constante).  
              .row.align-items-center.p-4.p-md-5.justify-content-around
                .col-lg-4.order-2
                  figure
                    img(src="@/assets/curso/tema5/7.png")
                .col-lg-4.order-1.mb-3.mb-lg-0
                  h4.mb-5 Isocórico 
                  p El volumen permanece constante (ΔV = 0). 
                  ul.lista-ul--color
                    li.mb-0.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 No se realiza trabajo presión-volumen, ya que ΔW = PΔV = 0.
              .row.align-items-center.p-4.p-md-5.justify-content-around
                .col-lg-4.order-2
                  figure
                    img(src="@/assets/curso/tema5/8.png")
                .col-lg-4.order-1.mb-3.mb-lg-0
                  h4.mb-5 Isobárico
                  p La presión permanece constante (ΔP = 0). 
                  ul.lista-ul--color
                    li.mb-0.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 El calor transferido realiza trabajo y también modifica la energía interna del sistema.
              .row.align-items-center.p-4.p-md-5.justify-content-around
                .col-lg-4.order-2
                  figure
                    img(src="@/assets/curso/tema5/9.png")
                .col-lg-4.order-1.mb-3.mb-lg-0
                  h4.mb-5 Adiabático
                  p No existe intercambio de calor con el entorno. 
                  ul.lista-ul--color
                    li.mb-0.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Si es reversible, se denomina proceso isentrópico. 
                    li.mb-0.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Relación característica: ΔU + W = 0 y W = PΔV. 
                    li.mb-0.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Es el proceso opuesto al isotérmico, donde la temperatura no se mantiene constante.


    
  

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
