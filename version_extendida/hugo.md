![image](https://user-images.githubusercontent.com/17634377/162354239-ad70dd72-5092-40d3-a7f9-65d077a0550c.png)

## Versión Extendida
# Tutorial GoHugo

GoHugo es una herramienta para crear sitios web estáticos (js, html y css). Te ayuda a construir sitios web simples, los usos más comunes son: blogs, landing pages, documentación, etc.

Te recomiendo ir a la documentación: [GoHugo](https://gohugo.io/getting-started/quick-start/)

Para usar esta herramienta necesitas descargarla en tu S.O.: [Installation](https://gohugo.io/getting-started/installing/).

Corre el siguiente comando `hugo version` para verificar que instalaste correctamente la herramienta:

```
> hugo version
hugo v0.92.0+extended darwin/arm64 BuildDate=unknown
```

# Cómo crear un sitio web con Go Hugo

## 1) Crea un nuevo `site`, para ello ejecuta el siguiente comando desde la línea de comando:

```
hugo new site my_first_static_project
```

Esto creara una carpeta con algunos archivos, estos son necesarios para el proyecto y tienen un fin.
```
archetypes  config.toml content     data        layouts     static      themes
```

![test](https://user-images.githubusercontent.com/17634377/162357032-47f34b9d-e261-4af4-b37e-e8e6a0b360f3.gif)


## 2) Añade un tema a tu proyecto creado.

Para cualquier proyecto de Hugo es necesario añadir un tema, puedes ver los temas disponibles aquí: [Themes](https://themes.gohugo.io/).

En tu línea de comando, dentro de esta carpeta de tu proyecto, ejecuta el siguiente comando:

```
git clone https://github.com/nanxiaobei/hugo-paper themes/paper
```

Esto deberá descargar el tema en tu carpeta de `themes` con el nombre de `latinxperts`. Los archivos contenidos aquí son los que le darán formato a tu proyecto. Si quieres modificar el tema, es aquí donde puedes hacerlo.

IMPORTANTE: Este tema es un repositorio de GitHub, por lo que si quieres hacer modificaciones y guardarlas necesitarás una copia para ti. En este caso podrías realizar un fork del tema y descargarlo directamente en el repo.

![test](https://user-images.githubusercontent.com/17634377/162357100-02e325b6-95b5-4a96-b942-6b8dba52637d.gif)


## 3) Actualiza la configuración principal con lo que te pide el tema.

Cada tema puede solicitar cierta información que irá en el archivo `config.toml`. Borra todo el contenido de ahí, y actualízalo por lo siguiente:

```toml
baseURL = "https://hugo-paper.vercel.app/"
# title = "Hugo Themes"
author = "Steve Francia"
copyright = "Copyright © 2008–2019, Steve Francia and the lee.so; all rights reserved."
paginate = 3
languageCode = "en"
DefaultContentLanguage = "en"
enableInlineShortcodes = true
# prevent build failures when using Hugo's Instagram shortcode due to deprecated Instagram API.
# See https://github.com/gohugoio/hugo/issues/7228#issuecomment-714490456
ignoreErrors = ["error-remote-getjson"]

# ------------------------------
theme = "paper"
title = "Paper"

[params]
  twitter = 'nanxiaobei'
  github = 'nanxiaobei'
  instagram = 'nan.xiaobei'
# ------------------------------

# needed to  render raw HTML (e.g. <sub>, <sup>, <kbd>, <mark>)
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true

[menu]

  [[menu.main]]
    identifier = "about"
    name = "About"
    url = "/about/"
    weight = 10

[taxonomies]
category = "categories"
tag = "tags"
series = "series"

[privacy]

  [privacy.vimeo]
    disabled = false
    simple = true

  [privacy.twitter]
    disabled = false
    enableDNT = true
    simple = true

  [privacy.instagram]
    disabled = false
    simple = true

  [privacy.youtube]
    disabled = false
    privacyEnhanced = true

[services]

  [services.instagram]
    disableInlineCSS = true

  [services.twitter]
    disableInlineCSS = true
```

![test](https://user-images.githubusercontent.com/17634377/162357213-eb7e4801-56ac-4c84-ab77-153b5cbd70a6.gif)

## 4) Inicia el servidor de GoHugo y prueba ver tu sitio construido:

El siguiente comando construirá el proyecto y te levantará un server local para verlo:

```
hugo serve
```

De momento como no hemos agregado nada más que el tema, basta con que puedas ver que tu sitio tiene los estilos del tema.

![test](https://user-images.githubusercontent.com/17634377/162357387-e4379c1f-28da-4013-a693-5bc1d369ba20.gif)

## 5) Agrega un nuevo post.

Hugo tiene un comando para agregar un nuevo post a tu proyecto, simplemente se trata de crear un archivo de markdown:

```
hugo new content/post/post_1.md
```

Borra el contenido generado en este archivo y sustituyelo por:

```markdown
+++
title = "Mi primer post"
date = "2019-03-05"
description = "Guide to emoji usage in Hugo"
+++

## Mi primer post

Emoji can be enabled in a Hugo project in a number of ways.
<!--more-->
The [`emojify`](https://gohugo.io/functions/emojify/) function can be called directly in templates or [Inline Shortcodes](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes).

To enable emoji globally, set `enableEmoji` to `true` in your site's [configuration](https://gohugo.io/getting-started/configuration/) and then you can type emoji shorthand codes directly in content files; e.g.

<p><span class="nowrap"><span class="emojify">🙈</span> <code>:see_no_evil:</code></span>  <span class="nowrap"><span class="emojify">🙉</span> <code>:hear_no_evil:</code></span>  <span class="nowrap"><span class="emojify">🙊</span> <code>:speak_no_evil:</code></span></p>
<br>

The [Emoji cheat sheet](http://www.emoji-cheat-sheet.com/) is a useful reference for emoji shorthand codes.

***

**N.B.** The above steps enable Unicode Standard emoji characters and sequences in Hugo, however the rendering of these glyphs depends on the browser and the platform. To style the emoji you can either use a third party emoji font or a font stack; e.g.

{{< highlight html >}}
.emoji {
  font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
}
{{< /highlight >}}

{{< css.inline >}}
<style>
.emojify {
  font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
  font-size: 2rem;
  vertical-align: middle;
}
@media screen and (max-width:650px) {
  .nowrap {
    display: block;
    margin: 25px 0;
  }
}
</style>
{{< /css.inline >}}

```

Nuevamente vuelve a levantar tu proyecto con `hugo serve` y deberías poder ver tu nuevo post.

![test](https://user-images.githubusercontent.com/17634377/162357812-5b3c1c5c-3b38-4124-91e7-cd7a0c3d19c3.gif)


## 6) Construye tu website.

Lo que hemos hecho hasta ahora ha sido crear un nuevo proyecto de Hugo, añadimos un tema, lo configuramos, y creamos un nuevo post, todo esto lo hemos probado en local.

La gran ayuda de Hugo es poder construir un website con todo lo anterior, para ello es necesario ejecutar el siguiente comando:

```
hugo -D
```

Esto creará una carpeta `public/`, esta va a contener solamente archivos de html, css y js. Esta carpeta es tu sitio construido, podrás tomarla y subirla a algún servidor o usando GitHub Pages. 

Hasta ahora hemos probado nuestro proyecto con la dirección `localhost:1313`, si vas a la carpeta `public`, puedes abrir el archivo `index.html` y ver el proyecto sin ningún problema.

![test](https://user-images.githubusercontent.com/17634377/162358067-afe67671-d680-478f-acca-303140362135.gif)

# Recapitulación

Revisa muy bien lo anterior y ten muy claro lo siguiente:

- Instalación de GoHugo.
- Cómo crear un proyecto de GoHugo.
- Cómo agregar un tema.
- Cómo actualizar la configuración del proyecto.
- Cómo iniciar el servidor para ver nuestro website.
- Cómo agregar un nuevo post y modificarlo con formato markdown.
- Cómo construir el website.

Probablemente tendrás muchas dudas y errores al momento de experimentar con esta herramienta. No te preocupes, es normal porque esta herramienta es muy extensa. 

Te dejo esta referencia: [Libro GoHugo](https://pragprog.com/titles/bhhugo/build-websites-with-hugo/)

Si quieres una parte 2 de GoHugo, coméntale a tu Mission Commander. 😁
