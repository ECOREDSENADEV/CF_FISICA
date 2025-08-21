<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Conservación de la energía
    
    
    .bg-color-1.p-4(data-aos="fade-left").mb-5
      p.mb-0 Este video aborda el principio de <b>conservación de la energía</b>, explicando que la energía en un sistema no se crea ni se destruye, solo se transforma entre diferentes formas. Se analiza especialmente la <b>energía mecánica</b>, que resulta de la suma de la <b>energía cinética</b> —asociada al movimiento— y la <b>energía potencial</b>, que depende de la posición de un cuerpo. A través de ejemplos visuales, se muestra cómo la energía puede transformarse de potencial a cinética sin perderse, siempre que no intervengan fuerzas externas o fricción.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
    separador
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Trabajo efectuado por una fuerza (constante y variable)
        
        p.mb-5 El trabajo (W) es una magnitud escalar que resulta de la acción de una fuerza (F) sobre un cuerpo para desplazarlo una distancia (d). Este proceso implica la transferencia de energía, permitiendo que el objeto se mueva. La fuerza es una magnitud vectorial, y sus componentes en los ejes cartesianos son:

        .row.justify-content-center.mb-3
          .col-lg-4
            .bg-color-9.p-5.align-items-center
              h4.mb-0.text-white.text-center Fx = F cos θ
              h4.mb-0.text-white.text-center Fy = F sen θ
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Trabajo efectuado por una fuerza constante
          
        p.mb-5 Se produce cuando la fuerza aplicada es paralela al desplazamiento y no cambia en el tiempo ni en la posición. La ecuación para calcularlo es:

        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span Aplicación de fuerza sobre un objeto con descomposición en componentes

        .row.mb-5
          .col-lg-6.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in", alt=": Ilustración de una persona jalando una maleta con una cuerda inclinada, mostrando la descomposición de la fuerza aplicada en una componente horizontal.")
          .col-lg-6
            .bg-color-9.text-white.px-4.py-3.mb-3
              h4 W = F * d = (F cos θ) * d = F d cos θ
            p Si <b>θ = 0°</b>, el trabajo se calcula como <b>W = F d</b>, ya que la fuerza y el desplazamiento tienen la misma dirección.
            p Si <b>θ = 180°</b>, el trabajo es <b>W = -F d</b>, indicando que la fuerza se opone al desplazamiento.
            p Su unidad en el Sistema Internacional (S.I.) es el <b>Newton por metro (N·m)</b>, denominado <b>Joule (J)</b>
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Trabajo efectuado por una fuerza variable
      
    p.mb-5 Ocurre cuando la fuerza aplicada cambia en magnitud, dirección, posición u otro factor a lo largo del desplazamiento. En estos casos, el objeto se mueve en pequeños intervalos, donde la fuerza se considera casi constante en cada tramo. Un ejemplo claro es el trabajo realizado al estirar un resorte. Para alargarlo se requiere una fuerza creciente, proporcional a la deformación, según la ley de Hooke:

    .titulo-sexto.color-acento-contenido
      h5 Figura 10.
      span Aplicación de la ley de Hooke en un resorte sometido a fuerza elástica

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in", alt="Diagrama de un resorte horizontal comprimido que muestra la fuerza aplicada hacia la derecha y la fuerza de restitución hacia la izquierda.")
      .col-lg-7
        .row.bg-color-9.p-4.align-items-center
          .col-lg-3
            h4.mb-0.text-white F = k (x − x₀)
          .col-lg-9
            p.text-white Donde:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-11
                p.mb-0.text-white <b>k</b> es la constante de elasticidad del resorte.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-11
                p.mb-0.text-white <b>x</b> es la posición final.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-11
                p.mb-0.text-white <b>x₀</b> es la posición inicial.
            div.text-white
              p.mb-0 De esta forma:
              p.mb-0 F = k Δx = k (x − x₀)
              p.mb-0 Si se considera que d = Δx, el trabajo se puede expresar como:
              p.mb-0 W = F d = k Δx · Δx
              p.mb-0 Esto indica que el trabajo depende directamente de la deformación que experimente el resorte.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        separador
        
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.2 Energía cinética
        
        p.mb-5 La energía cinética (K) es la energía asociada al movimiento de un cuerpo y está directamente relacionada con la fuerza que interviene para producir dicho movimiento. Representa la capacidad que tiene un objeto en movimiento para realizar trabajo sobre otros cuerpos. Su expresión matemática es:
        
        .titulo-sexto.color-acento-contenido
          h5 Figura 11.
          span Transformación de energía potencial en energía cinética al patear un balón
        .row.mb-5
          .col-lg-6.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in", alt="Ilustración del cambio de energía en un tiro de fútbol, con la pierna levantada representando energía potencial y el impacto con el balón representando energía cinética.")
          .col-lg-6
            .row.bg-color-9.p-5.align-items-center
              .col-lg-5
                h4.mb-0.text-white K = ½ m v²
              .col-lg-7
                p.text-white Donde:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>m</b> es la masa del cuerpo.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>v</b> es la velocidad del cuerpo.
        
        p Esta ecuación indica que la energía cinética aumenta proporcionalmente a la masa del objeto y al cuadrado de su velocidad, por lo que un incremento en la rapidez genera un aumento significativo en la energía del movimiento.




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
