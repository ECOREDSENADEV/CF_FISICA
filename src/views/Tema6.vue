<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Electromagnetismo
    
    .row
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.px-4.py-5(data-aos="fade-left")
          p.mb-0 El electromagnetismo es una rama de la física que estudia la relación entre los fenómenos eléctricos y magnéticos. Su base se encuentra en que una corriente eléctrica genera un campo magnético, y que un campo magnético variable puede inducir corriente eléctrica, lo que se conoce como inducción electromagnética (Faraday, 1831).
    
    separador
    
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Magnetismo
    
    p.mb-5 El magnetismo es un fenómeno físico donde ciertos materiales ejercen fuerzas de atracción o repulsión sobre otros.

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .bg-color-3.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-xl-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema6/2.png', alt='')
                .col-xl
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 <b>Material natural</b>: magnetita.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 <b>Material artificial</b>: imanes.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 <b>Polaridad</b>: todos los imanes presentan dos polos: norte (N) y sur (S).
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 <b>Interacción</b>: polos iguales se repelen, polos opuestos se atraen.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 <b>Campo magnético (BBB)</b>: es el espacio donde se manifiestan estas fuerzas, representado mediante líneas de fuerza que van del polo norte al polo sur.

        separador
        
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.2 Electricidad y campo eléctrico
        
        p El campo eléctrico es la región del espacio donde una carga eléctrica experimenta una fuerza eléctrica.

        ul.lista-ul--color.mb-5
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-5
            p.mb-0 Es un campo vectorial, ya que posee magnitud y dirección.
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-5
            p.mb-0 Se calcula mediante la ecuación:

        .row.justify-content-center.mb-5
          .col-lg-8
            .row.bg-color-9.p-5.align-items-center
              .col-lg-3
                h4.mb-0.text-white F=qE
              .col-lg-9
                p.text-white Donde:
                ul.lista-ul--color.mb-3
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>F</b> = fuerza eléctrica (Newton, N)
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>q</b> = carga eléctrica (1.602×10−19 C)
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>E</b> = intensidad del campo eléctrico (N/C) 
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>Ley de Coulomb</b>: Explica la interacción entre dos cargas:

                figure.mb-3.justify-content-center.d-flex
                  img(src="@/assets/curso/tema6/3.svg", data-aos="zoom-in", style="max-width: 150px")
                figure.justify-content-center.d-flex
                  img(src="@/assets/curso/tema6/4.svg", data-aos="zoom-in", style="max-width: 210px")
      

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        separador
        
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.3 Electromagnetismo y campo magnético inducido
        
        p Cuando una corriente eléctrica circula por un conductor, se genera un campo magnético alrededor de él.

        ul.lista-ul--color.mb-5
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-5
            p.mb-0 <b>Regla de la mano derecha:</b> si el pulgar indica la dirección de la corriente, los dedos indican el sentido del campo magnético.
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-5
            p.mb-0 <b>Intensidad del campo magnético (B):</b> depende de la intensidad de corriente y la distancia al conductor.

        .row.justify-content-center.mb-5
          .col-lg-8
            .row.bg-color-9.p-5.align-items-center
              .col-lg-3
                figure.mb-3.justify-content-center.d-flex
                  img(src="@/assets/curso/tema6/5.svg", data-aos="zoom-in", style="max-width: 100px")
              .col-lg-9
                p.text-white Donde:
                ul.lista-ul--color.mb-3
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>B</b> = campo magnético (Tesla, T)
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>μ0</b> = permeabilidad del vacío (4π×10−7 T·m/A)
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>I</b> = corriente eléctrica (A)
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>r</b> = distancia al conductor (m)




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
