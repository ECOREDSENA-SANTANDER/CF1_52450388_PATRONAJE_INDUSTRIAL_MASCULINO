<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Procedimiento del patronaje

    .row.justify-content-center.align-items-.mb-5(data-aos="zoom-in-left")
      .col-lg-9
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/Tema3/img01.svg', alt='') 
          .col-lg-7.bg1.p-4
            p.mt-2 El patronaje permite la construcción de una prenda de vestir al desglosar las diferentes partes del cuerpo humano a cubrir, de manera que cada trozo de tela se adapta a esa área y la unión de todas las piezas da como resultado el diseño del modelo propuesto.
            p.mb-4 A cada una de las partes resultantes de dividir la totalidad de la figura geométrica plana que ha formado el molde de las prendas dibujadas sobre papel, se le llaman piezas, mientras al conjunto de todas ellas patrón.
        p El departamento de patronaje es el encargado de hacer que un dibujo de dos dimensiones se convierta en una prenda que se siente bien; es decir, es el responsable de crear el patrón con el que se cortará y posteriormente se confeccionará dicha prenda.
      .col-lg-3.col-7.col-md-6
        img(src='@/assets/curso/Tema3/img02.png', alt='') 
    
    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Elaboración de patrones

    p Elaborar un patrón para una prenda de vestir equivale a la construcción técnica de las piezas con las que se conforma la misma, aplicando acotaciones y medidas en concordancia con la anatomía física de una persona.
    p.mb-4 A continuación, se describen los pasos de creación que componen el proceso para elaborar una prenda estructurada:

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8.mb-2
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.bg1.p-4(titulo="Patrón base")
            .row.justify-content-center.align-items-center
              .col-lg-10
                p Es aquel que se elabora con base a un determinado tipo de prendas, las cuales están bien definidas; es decir, que su diseño no ha sufrido modificaciones. Por ejemplo, el básico de la parte superior del cuerpo que generalmente contiene piezas como: espalda, delantero, manga y cuello. Por supuesto que, para lograr este patrón, se ha de contar con las medidas anatómicas o tallas del usuario. Igualmente deben tenerse en cuenta los desahogos (diferencia entre las dimensiones de la prenda y el cuerpo que viste).
          .tarjeta.color-acento-botones.bg1.p-4(titulo="Patrón tipo")
            .row.justify-content-center.align-items-center
              .col-lg-10
                p Es la adaptación del patrón base al diseño de la prenda en particular. Para lograr una adecuada calidad del patrón tipo al diseño de la prenda han de tenerse en cuenta las fichas de diseño.
          .tarjeta.color-acento-botones.bg1.p-4(titulo="Patrón prototipo")
            .row.justify-content-center.align-items-center
              .col-lg-10
                p Es el que corresponde a la totalidad de patrones que conforman la prenda y que integran los diferentes materiales textiles. De acuerdo al tipo de tejido existen tres clases de patronaje prototipo:
                ul.lista-ul--color
                  li.mb-1
                    i.fas.fa-chevron-right
                    | #[b Tejido exterior:]
                    li.mb-1
                      i.mb-0   
                      | • Piezas principales.
                    li.mb-1
                      i
                      | • Piezas secundarias o avíos.
                  li.mb-1
                    i.fas.fa-chevron-right
                    | #[b Material de refuerzo o relleno.]
                  li.mb-0
                    i.fas.fa-chevron-right
                    | #[b Sacos bolsillo. (Camps, 1995).]
      .col-lg-4.col-9.col-md-6(data-aos="zoom-in-left")
        img(src='@/assets/curso/Tema3/img03.png', alt='') 


    p Al final, se realiza el procedimiento llamado despiece, el cual consiste en tomar cada pieza desglosada del patrón para calcarlas y darles los respectivos aumentos de costura para poder confeccionar la prenda de vestir.
    p.mb-4 En resumen, el procedimiento de patronaje debe hacerse de la siguiente manera:

    .row.justify-content-center.align-items-center.mb-5.fondo01t3.p-4(data-aos="zoom-in-left")
      .col-lg-3.col-6.col-md-5
        img(src='@/assets/curso/Tema3/img04.svg', alt='')
      .col-lg-7.col-11
        ol.lista-ol--cuadro
          li
          .lista-ol--cuadro__vineta
            span 1
          |Toma de medidas.
          li
          .lista-ol--cuadro__vineta
            span 2
          |Desarrollo del patrón base, dependiendo de la tipología de prenda a trazar.

          li.mb-
          .lista-ol--cuadro__vineta
            span 3
          |Análisis e interpretación del diseño.

          li
          .lista-ol--cuadro__vineta
            span.d-flex 4
          |Desarrollo del plano partiendo del trazo de los patrones base, realizando la interpretación del diseño a desarrollar.

          li
          .lista-ol--cuadro__vineta
            span 5
          |Despiece. Se separa cada una de las piezas trazadas en el plano. A estas se le incrementan las costuras y la simbología correspondiente a cada pieza.

          li
          .lista-ol--cuadro__vineta
            span 6
          |Cortar la muestra para realizar la verificación del patronaje.
          li
          .lista-ol--cuadro__vineta
            span 7
          |Ensamblar la prenda.

          li
          .lista-ol--cuadro__vineta
            span 8
          |Verificar prueba y ajustar el plano. Se realizan las correcciones necesarias.

    p.mb-4(data-aos="zoom-in-left") Para materializar los conceptos descritos, se presenta el caso práctico del proceso de patronaje para una camisa básica masculina. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-6  
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 17. 
          span Proceso patronaje camisa masculina
      .row.justify-content-center
        .col-lg-6.col-10.col-md-7
          img.mb-3(src='@/assets/curso/Tema3/figura17.png', alt='Diagrama del proceso de patronaje para una camisa en el que se comparte la transición en tres etapas: comienza con el "Diseño" (un dibujo de la prenda), sigue con el "Plano" (el patrón técnico completo) y finaliza con el "Despiece" (las piezas individuales del patrón separadas).')  

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema3/img05.svg")
          h3.bg2.py-2.w-card-text Cuadro de tallas y medidas normalizadas masculinas


    .row.justify-content-center.align-items-center.mb-4.fondo01t31.p-4(data-aos="zoom-in-left")
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-1.col-3.col-md-2.mb-2
            img(src="@/assets/curso/Tema3/img06.svg")
          .col-lg-10.col-11
            p A continuación, se presenta la tabla de medidas y sus respectivas tallas, con el propósito de facilitar la selección de las mismas, para la elaboración de patrones de ropa masculina.
            p Existen diferentes tablas de tallas y medidas que varían según el país y como las equivalencias son similares, causan confusión cuando se revisan los patrones fabricados en distintos lugares. También, las medidas de tallas cambian de acuerdo al fabricante e incluso a la marca.

    p.mb-3 En la siguiente tabla se presenta el cuadro de tallas y medidas (en centímetros) sin desahogos:

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 2. 
        span Cuadro de tallas y medidas

    .tabla-a.color-acento-botones(alt='Detalla las medidas corporales estandarizadas para ropa masculina, en centímetros. Las columnas presentan las tallas desde la XS/34 hasta la XXL/44, y las filas listan las medidas correspondientes, como contornos, anchos y largos.') 
      table
        thead
          tr.text-white
            th.bg3 Medidas
            th.bg4 Talla XS / 34
            th.bg3 Talla S / 36
            th.bg4 Talla M / 38
            th.bg3 Talla L / 40
            th.bg4 Talla XL / 42
            th.bg3 Talla XXL / 44
        tbody
          tr
            td Contorno de cuello
            td 34
            td 36
            td 38
            td 40 
            td 42
            td 44
          tr
            td Contorno de pecho
            td 86.5
            td 91.5
            td 96.5
            td 101.5 
            td 106.5
            td 111.5
          tr
            td Contorno de cintura
            td 71
            td 76
            td 81
            td 86
            td 91
            td 96
          tr
            td Contorno de cadera
            td 86.5
            td 91.5
            td 96.5
            td 101.5
            td 106.5
            td 111.5
          tr
            td Contorno de puño
            td 24
            td 26
            td 28
            td 30
            td 32
            td 34
          tr
            td Ancho de espalda
            td 40.5
            td 42
            td 43.5
            td 45
            td 46.5
            td 48
          tr
            td Ancho de pecho
            td 36.5
            td 38
            td 39.5
            td 41
            td 42.5
            td 44
          tr
            td Largo de talle
            td 44.5
            td 45
            td 45.5
            td 46
            td 46.5
            td 47
          tr
            td Largo total de camisa
            td 73
            td 73.5
            td 74
            td 74.5
            td 75
            td 75.5
          tr
            td Largo de hombro
            td 15.5
            td 16
            td 16.5
            td 17
            td 17.5
            td 18
          tr
            td Largo de manga
            td 57.5
            td 58
            td 58.5
            td 59
            td 59.5
            td 60
          tr
            td Largo total
            td 106
            td 106.5
            td 107
            td 107.5
            td 108
            td 108.5
          tr
            td Tiro
            td 25
            td 25.5
            td 26
            td 26.5
            td 27
            td 27.5
          tr
            td Bota
            td 20.5
            td 21.5
            td 22.5
            td 23.5
            td 24.5
            td 25.5
      .py-1
      figcaption Fuente: SENA, (2019).











































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
