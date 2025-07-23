<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Conceptos básicos
      .row.justify-content-center(data-aos="zoom-in-left")
        .col-lg-8
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-8.bg1.p-4
              p.mt-4 La antropometría, puede definirse como la ciencia que estudia la medición, tipo y proporciones del cuerpo. Las proporciones del cuerpo humano a través de la historia se han tomado como punto de referencia para la evolución de la figura humana. De allí la importancia de las medidas. (Fuenmayor, 2014).
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/Tema1/img01.svg', alt='') 
        .col-lg-4
          .row.align-items-center.mb-5
            .col-lg-3.mb-3.d-none.d-lg-block
              img(src='@/assets/curso/Tema1/ico1.svg', alt='') 
            .col-lg-12
              p Las tallas que corresponden se enuncian en tablas de medidas que permiten estandarizar las proporciones del cuerpo humano. Sin embargo, antes de llegar a identificar dichas tablas, se requiere comprender conceptos en el ámbito del patronaje.
      
      separador
      #t_1_1.titulo-segundo.mb-5
        h2 1.1 Historia del patronaje

      p.mb-5 Para hablar de la historia del patronaje, es necesario tomar como referente el desarrollo de la moda, pues han sido desarrollados de manera simultánea.
      .row.justify-content-center.mb-3
        .col-lg-5.col-10.mb-3
          img(src='@/assets/curso/Tema1/img01.png', alt='') 
        .col-lg-7
          .row.justify-content-center.align-items-center
            .col-lg-12
              p La historia traza una línea entre las prendas elaboradas a partir de telas cortadas adaptadas al cuerpo y a aquellas utilizadas para envolverlo, pues las últimas eran modeladas sobre la figura humana y los materiales que salían directamente del telar tenían una dimensión reducida que obligaba a unirlos para cubrir el cuerpo. Con el uso de la aguja se inició el desarrollo de las prendas de vestir como piezas de ropa sencillas. Estas piezas son ubicadas en la Edad del Bronce en donde se creía que los hombres vestían casacas de cuero y dado que estas muestran alguna complejidad, se puede suponer que tenían algún sistema primario de patrones, aunque no es posible su comprobación.
          .row.align-items-center.mb-5
            .col-lg-2.mb-3.d-none.d-lg-block
              img(src='@/assets/curso/Tema1/ico2.svg', alt='') 
            .col-lg-10
              p Se tienen indicios de que los primeros patrones asociados a piezas repetidas fueron de las mangas, las cuales aparecieron en culturas persas, turcas y pueblos caucásicos, siendo muy notorio el uso de esos patrones.
      
      .row.justify-content-center.mb-5
        .col-lg-6.mb-3
          LineaTiempoD.color-acento-botones.activo
            .row(numero="1" titulo="En la Edad Media")
              .col-md-12.mb-4.mb-md-0
                p.text-small La ropa mostraba las formas del cuerpo, lo que presume el uso de patrones; un ejemplo de ello es el uso de corsés o calzas, posteriormente se confirma en el Renacimiento y en el Barroco, mostrando mayor conocimiento entre la prenda y la anatomía humana.
              
            .row(numero="2" titulo="El primer libro de patronaje")
              .col-md-12.mb-4.mb-md-0
                p.text-small Se ha mantenido en el tiempo es el “Libro de geometría, práctica y traca”, el cual data de 1580 y propone un método para cortar patrones y ahorrar tejidos, allí los patrones se mostraban como pequeños diagramas dibujados de manera manual. Se registran los primeros manuales de patronaje en los siglos XVI y XVII, los cuales fueron evolucionando hasta ser muy valorados en el siglo XVIII.

            .row(numero="3" titulo="A inicios del siglo XIX")
              .col-md-12.mb-4.mb-md-0
                p.text-small Se distinguen los métodos de patronaje a escala proporcional y medición directa, tomando el primero como una medición estándar y el segundo como medidas directamente, siendo el primer método descartado por los sastres cuando se aceptó que no todas las personas tenían las mismas medidas. Con la aparición de la cinta métrica en 1818 se dio comienzo a la comercialización de patrones.
        
            .row(numero="4" titulo="Luego en 1838")
              .col-md-12.mb-4.mb-md-0
                p.text-small Aparecen libros ofreciendo diagramas y en 1850 patrones recortados dentro de libros editados. Con la creación de la máquina de coser en 1851 y las publicaciones sobre el tema, se dio la revolución tecnológica de la época, pero los sastres franceses por miedo a la desaparición de los artesanos destruyeron las máquinas. Solo hasta 1860 se elaboró un lenguaje común para los patrones con piquetes, cuadrados, círculos y triángulos.
        
            .row(numero="5" titulo="A finales del siglo XIX")
              .col-md-12.mb-4.mb-md-0
                p.text-small Se inicia el diseño y ofrecimiento de patrones por tallas y algunas herramientas en su elaboración. Durante las dos guerras mundiales se minimizó el ofrecimiento de patrones y se incentivó el desarrollo de prendas reduciendo piezas para racionalizar recursos y los patrones se orientaron a las prendas militares.
        
            .row(numero="6" titulo="Después de la Segunda Guerra Mundial")
              .col-md-12.mb-4.mb-md-0
                p.text-small Se incentivó la producción de patrones, ya que se dio inicio al auge de modernización de las prendas y en los años 80 se registró la llegada de diseños japoneses y las tecnologías computarizadas. De esa época se conserva la metodología que incluye instrucciones tanto a nivel de patrones a la medida como industriales.
        .col-lg-6.col-11
          img(src='@/assets/curso/Tema1/img02.png', alt='') 
      separador
      #t_1_2.titulo-segundo.mb-5
        h2 1.2 Antropometría, anatomía y ejes del cuerpo

      .row.justify-content-center.mb-5(data-aos="zoom-in-left")
        .col-lg-9
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/Tema1/ico3.svg', alt='') 
            .col-lg-7.bg1.p-4
              p.mt-5.mb-5 La antropometría (del griego ánthropos, hombre, y metro, medida; y el sufijo - ia, cualidad) estudia las medidas y dimensiones de partes del cuerpo humano, ya que estas varían de un individuo a otro. Esta se clasifica en estática o estructural (estudia las medidas de cabeza, troncos, y extremidades en posiciones fijas) y funcional (estudio de medidas del cuerpo mientras está en movimiento). (Antón, 2012).
          p La importancia de esta ciencia en una sociedad en la que la industria de la moda tiene como principal actividad vestir al ser humano, radica en la asignación de las medidas a las diferentes tallas, lo que permite establecer las tablas de dimensiones para facilitar la elaboración de los patrones y la confección de prendas de manera práctica y sencilla.
        .col-lg-3.col-7.col-md-6
          img(src='@/assets/curso/Tema1/img03.png', alt='') 

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.mb-3.col-10
          img(src='@/assets/curso/Tema1/img04.png', alt='') 
        .col-lg-7
          .row.justify-content-center.align-items-center
            .col-lg-12
              p De otro lado, la anatomía estudia la manera como se distribuye el cuerpo humano y la estructura de los seres vivos (disposición de huesos y órganos y la relación que existe entre ellos). Es por esto que la anatomía es fundamental en la industria de la moda, pues permite diseñar prendas de vestir con base en características específicas y permite resaltar cualidades y disimular defectos, buscando la satisfacción de las personas. (Soto, 2009).
          .bloque-texto-e.bg1.p-4
            .bloque-texto-e__texto
              i.fas.fa-quote-left
              h4 Finalmente, es necesario reconocer los ejes del cuerpo, los cuales, junto a los planos anatómicos, son superficies imaginarias que fraccionan el cuerpo humano con el fin de facilitar su comprensión e identificación
              i.fas.fa-quote-right
            .row.align-items-end
              .col
                .bloque-texto-e__autor 
                  p (Ayuso, 2008).

      p.mb-4 Los ejes se representan como líneas imaginarias sobre las cuales gira una articulación. Por su parte, el plano como la superficie que se halla perpendicular al eje sobre el que se mueve el segmento corporal.
      
      .row.justify-content-center.mb-5(data-aos="fade-down")
        .col-lg-4.col-md-6.mb-3.mb-md-0
          .row.px-2.pt-2.h-100
            .col-12.m-0.nav-holder2.align-items-center.px-0
              img(src="@/assets/curso/Tema1/img1.png", alt="")
              .text.p-2
                .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                  h4.mt-4.mb-3 Eje longitudinal
                  p.px-4 Situado a lo largo del eje mayor del cuerpo y coincide con la línea de gravedad del cuerpo. Algunos autores lo identifican como eje vertical.
        
        .col-lg-4.col-md-6.mb-3.mb-md-0
          .row.px-2.pt-2.h-100
            .col-12.m-0.nav-holder2.align-items-center.px-0
              img(src="@/assets/curso/Tema1/img2.png", alt="")
              .text.p-2
                .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                  h4.mt-4.mb-3 Eje transversal
                  p.px-4 Se extiende de forma horizontal a través del cuerpo, de un costado al otro, y su principal característica es que siempre forma un ángulo recto con el eje vertical.
        .col-lg-4.col-md-6.mb-3.mb-md-0
          .row.px-2.pt-2.h-100
            .col-12.m-0.nav-holder2.align-items-center.px-0
              img(src="@/assets/curso/Tema1/img3.png", alt="")
              .text.p-2
                .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                  h4.mt-4.mb-3 Eje sagital
                  p.px-4 Posee una orientación anteroposterior, lo que significa que su línea imaginaria atraviesa el cuerpo de forma recta, yendo desde la parte frontal hacia la posterior.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6.col-md-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1.
            span  Ejes
          img.mb-3(src='@/assets/curso/Tema1/figura1.png', alt='Ilustración que presenta los ejes anatómicos del cuerpo. Una figura humana muestra la ubicación de los tres ejes: longitudinal (vertical, de cabeza a pies), transversal (horizontal, de lado a lado) y sagital (de frente hacia atrás). Gráficos complementarios ilustran el tipo de rotación que permite cada eje.')  
          figcaption Fuente: Ayuso, (2008).

      p.mb-3 La identificación de estos planos anatómicos permite comprender por qué los patrones y las medidas se dividen para entallar el cuerpo masculino, lo cual se evidencia en la simetría que presentan dichos patrones.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 2. 
            span Patrones simétricos
          img.mb-3(src='@/assets/curso/Tema1/figura2.png', alt='Ilustración con simetría de los patrones de una camisa, compara las vistas del frente completo y la espalda completa con sus mitades correspondientes para demostrar que, al ser simétricas, solo se necesita trazar la mitad de cada pieza para crear el patrón.')  
          figcaption Fuente: SENA, (2019).
      
      p.mb-3 Al dividir cada dibujo se puede notar que ambas mitades son simétricas, por lo tanto, al realizar el patrón del vestido solo se traza la mitad del frente y la mitad del posterior.

      .tarjeta.bg5.p-4.mb-3(data-aos="zoom-in-left")
        .row.justify-content-around.align-items-center.p-2
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema2/pdf.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.text-white  Antropometría
                p.text-white Para ampliar la información sobre antropometría, se sugiere consultar el siguiente documento.
              .col-sm-auto.col-lg-2
                a.boton.bg6.texto-blanco(:href="obtenerLink('')" target="_blank")  
                  span Descargar
                  i.fas.fa-file-arrow-down

      separador
      #t_1_3.titulo-segundo.mb-5
        h2 1.3 Convenciones en la señalización de patrones
      
      .row.justify-content-center.mb-0
        .col-lg-5.col-10.mb-3
          img(src='@/assets/curso/Tema1/img05.png', alt='') 
        .col-lg-7
          .row.justify-content-center.align-items-center
            .col-lg-12
              p En el patronaje industrial, la comunicación clara y sin errores es fundamental para pasar del diseño a la producción. Para lograrlo, se utiliza un sistema estandarizado de convenciones en la señalización de patrones. Estos códigos, en su mayoría gráficos, funcionan como un lenguaje universal que sustituye el uso de textos extensos o referencias alfanuméricas complejas. La función principal de estas convenciones es indicar la manera correcta en que cada pieza despiezada debe ser posicionada y aplomada sobre la tela para proceder a su corte.
          .row.align-items-center.mb-3
            .col-lg-2.mb-3.d-none.d-lg-block
              img(src='@/assets/curso/Tema1/ico2.svg', alt='') 
            .col-lg-10
              p La información contenida en un patrón se puede dividir en dos grandes categorías: la señalización simbólica y la información escrita.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema3/img05.svg")
            h3.bg2.py-2.w-card-text Señalización simbólica: el lenguaje gráfico

      p.mb-4 Estos son los símbolos visuales que se trazan sobre el patrón. Cada uno tiene un significado preciso y vital para la confección. En la siguiente tabla se presentan las convenciones más empleadas:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 1. 
            span Convenciones
          img.mb-3(src='@/assets/curso/Tema1/tabla1.svg', alt='La tabla muestra en dos columnas los símbolos gráficos y sus descripciones correspondientes. Incluye símbolos clave como indicación que un segmento divide en dos partes y en tres partes, el hilo de tela, medida descifrada en el trazo, cortar, el doblez, los piquetes, las perforaciones para ubicaciones internas.')  
          figcaption Fuente: SENA, (2019).

      p.mb-4 Además de los símbolos gráficos, cada pieza del patrón debe funcionar como una ficha técnica que contiene información escrita esencial para su correcta identificación, organización y producción. Al momento de separar o despiezar los moldes, se debe incluir la siguiente información:

      .row.justify-content-center.mb-5
        .col-lg-3.col-8.mb-3.col-md-6
          img(src="@/assets/curso/Tema1/img06.svg")
        .col-lg-9
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Nombre de la prenda")
              .col-md-12.mb-4.mb-md-0
                p Este dato es el identificador principal del conjunto de patrones. Permite asociar cada pieza a un diseño o modelo específico (ej. “Chaqueta Bombacha Ref. 105”), lo cual es crucial en entornos de producción donde se manejan múltiples diseños simultáneamente y así evitar confusiones. 
          
            .row(titulo="Nombre de la pieza")
              .col-md-12.mb-4.mb-md-0
                p Identifica la parte específica de la prenda a la que corresponde el molde (por ejemplo: delantero, espalda, manga, cuello).  Esta información es fundamental para el operario de confección, ya que le permite organizar y ensamblar las distintas partes en el orden correcto.
            .row(titulo="Talla")
              .col-md-12.mb-4.mb-md-0
                p Indica las dimensiones a las que corresponde el patrón (ej. S, M, L, o 38, 40, 42).  Es un dato indispensable para la organización del corte y para asegurar que la prenda final cumpla con las especificaciones de medida requeridas para cada talla.
            .row(titulo="Referencia")
              .col-md-12.mb-4.mb-md-0
                p Es un código alfanumérico único que se le asigna a un modelo específico para su seguimiento y organización en el sistema de producción.  La referencia evita ambigüedades que podrían surgir con nombres de prenda similares y facilita la gestión de inventarios y órdenes de corte.
            .row(titulo="Indicar cuántas veces se corta el patrón:")
              .col-md-12.mb-4.mb-md-0
                p Esta instrucción (ej. “Cortar x2”, “Cortar x1 al doblez”) es una orden directa para el personal de corte que define el número de piezas idénticas que se deben obtener de la tela.  Es un dato crítico para asegurar que se disponga de todos los componentes necesarios para el ensamblaje completo de la prenda.

      .row.justify-content-center.mb-5  
        .col-lg-9
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Nombre del patronista")
              .col-md-12.mb-4.mb-md-0
                p Registra el nombre del profesional que desarrolló y aprobó el patrón.  Esta información es importante para la trazabilidad y el control de calidad, ya que permite realizar consultas o solicitar ajustes al responsable directo en caso de ser necesario. 
            .row(titulo="Enumerar el patrón")
              .col-md-12.mb-4.mb-md-0
                p Este dato identifica el conjunto de patrones de un diseño particular. Aunque a menudo se combina con la referencia, puede servir para versionar o agrupar patrones dentro de una colección, asegurando que se trabaje con el set de moldes correcto. 
            .row(titulo="Enumerar las piezas")
              .col-md-12.mb-4.mb-md-0
                p Indica el número específico de cada pieza dentro del conjunto total de un patrón (ej. “Pieza 1 / 5”, “Pieza 2 / 5”).  Esta numeración es esencial para el operario de confección, ya que le sirve de guía para seguir el orden de ensamblaje correcto de la prenda y para verificar que no falte ninguna parte.
            .row(titulo="Señalizar hilos de tela, piquetes, perforaciones y símbolos de doblez")
              .col-md-12.mb-4.mb-md-0
                p Además de la información escrita, es indispensable que cada pieza final tenga marcados todos los símbolos gráficos necesarios para su confección.  Esto incluye la línea del hilo de tela para el aplomo correcto, los piquetes para las uniones, las perforaciones para ubicaciones internas y las indicaciones de corte al doblez, garantizando así una interpretación sin errores durante el ensamblaje.
        .col-lg-3.col-8.col-md-6
          img(src="@/assets/curso/Tema1/img07.svg")
      separador
      #t_1_4.titulo-segundo.mb-5
        h2 1.4 Figuras geométricas y materiales requeridos

      p.mb-3 El trazado de patrones es, en esencia, un ejercicio de geometría aplicada. Cada molde que conforma una prenda se construye a partir de la combinación de figuras y líneas geométricas básicas, las cuales se utilizan aplicando medidas determinadas para dar forma y estructura al diseño. El dominio de estos elementos visuales es el primer paso para la correcta interpretación y construcción de cualquier patrón.


      .row.justify-content-center.align-items-center.mb-5.fondot01
        .col-lg-6.col-9
          .titulo-sexto.color-acento-contenido(data-aos='fade-right').mt-5
            h5 Figura 3. 
            span  Figuras geométricas
          img.mb-3(src='@/assets/curso/Tema1/figura3.png', alt='')  
          figcaption Fuente: Ayuso, (2008).

      p.mb-3 Las figuras geométricas presentan el vocabulario visual fundamental para el patronista. Cada forma tiene un propósito específico en la creación de los moldes:

      .row.justify-content-center.align-items-center.mb-5.fondot01_1.p-4
        .col-lg-3.col-7.d-none.d-lg-block

          img.mb-3(src='@/assets/curso/Tema1/img06.png', alt='') 
        .col-lg-7.col-11
          SlyderF(columnas="col-lg-6 col-md-6").mb-3
            .tarjeta.color.p-4
              .row.justify-content-center
                .col-12
                  img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/Tema1/ico01.svg' alt='AvatarTop')
                  .row.justify-content-center
                    .col-8.mb-2
                      h4.text-center.bg-color.p-2.text-white Líneas y ángulos
                    .col-10.mb-4 
                      p.text-center.mb-0 Las líneas horizontales, verticales y paralelas establecen los ejes y guías del patrón. El ángulo recto de 90 grados es la base para escuadrar y asegurar que las piezas encajen correctamente.
                  
            .tarjeta.color.p-4
              .row.justify-content-center
                .col-12
                  img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/Tema1/ico02.svg' alt='AvatarTop')
                  .row.justify-content-center
                    .col-9.mb-2
                      h4.text-center.bg-color.p-2.text-white Figuras planas 
                    .col-10.mb-4 
                      p.text-center.mb-0 Los rectángulos y cuadrados suelen formar el cuerpo principal de las piezas, como el torso de una camisa o la pernera de un pantalón, antes de ser modificados con curvas y otros detalles.
            .tarjeta.color.p-4
              .row.justify-content-center
                .col-12
                  img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/Tema1/ico04.svg' alt='AvatarTop')
                  .row.justify-content-center
                    .col-9.mb-2
                      h4.text-center.bg-color.p-2 Diagonales 
                    .col-10.mb-4 
                      p.text-center.mb-0 Las líneas diagonales o al sesgo son cruciales para ciertos cortes y para comprender cómo se comportará la tela en partes específicas del diseño.
            
            .tarjeta.color.p-4
              .row.justify-content-center
                .col-12
                  img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/Tema1/ico05.svg' alt='AvatarTop')
                  .row.justify-content-center
                    .col-9.mb-2
                      h4.text-center.bg-color.p-2 Curvas
                    .col-10.mb-4 
                      p.text-center.mb-0 Las líneas curvas, tanto cóncavas como convexas, son indispensables para trazar contornos anatómicos que se ajusten al cuerpo, como las sisas, los escotes, las caderas o las entrepiernas.

      p.mb-4 Para realizar el proceso de patronaje, #[b los materiales] que se requieren son:

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img07.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          i.fas.fa-circle-chevron-right
          |  Pliegos de papel manifold, bond o periódico sin imprimir (usado para el diseño del patrón). 
          br
          i.fas.fa-circle-chevron-right
          |  Hojas de papel ónix (utilizado para calcar en patrones de modistería).
          br
          i.fas.fa-circle-chevron-right
          |  Cartulina (empleada para plantillas base que son calcadas constantemente).
          br
          i.fas.fa-circle-chevron-right
          |  Lápiz negro o portaminas 0.7 mm (consta de punta dura para un trazado firme de las líneas).
          br
          i.fas.fa-circle-chevron-right
          |  Lápices de colores (permiten diferenciar las líneas y vértices importantes que se tienen en cuenta al momento de confeccionar las prendas).
          br
          i.fas.fa-circle-chevron-right
          |  Marcador, micropunta y plumones (facilitan el trazo de líneas delgadas y gruesas).
          br
          i.fas.fa-circle-chevron-right
          |  Borrador de nata.

      p.mb-3 Adicionalmente, se requieren los siguientes elementos:

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema3/img05.svg")
            h3.bg2.py-2.w-card-text Elementos requeridos en la elaboración de patrones


      .row.justify-content-center.align-items-center.mb-3.fondo_pasos_t2(data-aos="fade-down")
        .col-lg-10.col-11
          PasosA.color-acento-botones.mb-5(tipo="l").mt-5
            .row
              .col-md-7.mb-4.mb-md-0
                h3 Piqueteador de moldes (Los piquetes también pueden hacerse con tijeras)
                p Sirve para hacer los agujeros en donde el molde debe llevar piquetes. Cuando los patrones se elaboran en cartón grueso, no se pueden usar las tijeras.
              .col-md-4
                img(src='@/assets/curso/Tema1/1.svg', alt='')

            .row
              .col-md-4.mb-3
                img(src='@/assets/curso/Tema1/2.svg', alt='')
              .col-md-6
                h3 Tijera cortapapel
                p Se utiliza para cortar los patrones, una vez delineados.


            .row
              .col-md-7.mb-4.mb-md-0
                h3 Reglas para modistería (preferiblemente en acrílico)
                p Se utilizan para marcar sisas.

              .col-md-4
                img(src='@/assets/curso/Tema1/3.svg', alt='')

            .row
              .col-md-4.mb-3
                img(src='@/assets/curso/Tema1/4.svg', alt='')
              .col-md-6
                h3 Carretilla o rodaja para modistería
                p Son usadas para trasladar un molde a la tela o para hacer marcas o señales en la costura.





































  </template>

<script>
export default {
  name: 'Tema1',
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
