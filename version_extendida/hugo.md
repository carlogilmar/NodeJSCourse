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

## 2) Añade un tema a tu proyecto creado.

Para cualquier proyecto de Hugo es necesario añadir un tema, puedes ver los temas disponibles aquí: [Themes](https://themes.gohugo.io/).

En tu línea de comando, dentro de esta carpeta de tu proyecto, ejecuta el siguiente comando:

```
git clone https://github.com/nanxiaobei/hugo-paper themes/paper
```

Esto deberá descargar el tema en tu carpeta de `themes` con el nombre de `latinxperts`. Los archivos contenidos aquí son los que le darán formato a tu proyecto. Si quieres modificar el tema, es aquí donde puedes hacerlo.

IMPORTANTE: Este tema es un repositorio de GitHub, por lo que si quieres hacer modificaciones y guardarlas necesitarás una copia para ti. En este caso podrías realizar un fork del tema y descargarlo directamente en el repo.

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

## 4) Inicia el servidor de GoHugo y prueba ver tu sitio construido:

El siguiente comando construirá el proyecto y te levantará un server local para verlo:

```
hugo serve
```

De momento como no hemos agregado nada más que el tema, basta con que puedas ver que tu sitio tiene los estilos del tema.

## 5) Agrega un nuevo post.

Hugo tiene un comando para agregar un nuevo post a tu proyecto, simplemente se trata de crear un archivo de markdown:

```
hugo new content/post/post_1.md
```

Borra el contenido generado en este archivo y sustituyelo por:

```markdown
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet semper ante, a condimentum risus venenatis et. In accumsan elit mollis, malesuada nibh ut, vehicula tellus. Vestibulum ornare nulla et congue ullamcorper. Aenean tempus urna ex, nec sollicitudin neque vulputate in. Mauris sit amet massa molestie, laoreet felis at, pellentesque quam. Sed rutrum felis purus, varius egestas massa fermentum et. Phasellus viverra dictum suscipit. Pellentesque lobortis arcu eget sapien porttitor convallis. Nullam tempus bibendum ante non dignissim. Proin sit amet purus lorem. Aenean ornare ante eu faucibus sollicitudin. Sed scelerisque augue sed dui scelerisque, in consectetur arcu elementum. In eros metus, auctor ut consequat auctor, rutrum ut ipsum. Suspendisse sollicitudin non quam vestibulum convallis.

Donec a iaculis turpis. Nam volutpat gravida justo, tristique lobortis nibh gravida id. Nam placerat ante sed pharetra condimentum. Fusce tempus nec sapien nec fermentum. Vivamus iaculis, magna non rutrum tincidunt, libero tellus dignissim erat, sed egestas mi erat vitae arcu. Aliquam tempor facilisis ipsum tristique aliquet. Vivamus eros odio, cursus nec velit et, ultricies aliquet nibh. Pellentesque tempor mauris id leo condimentum rhoncus quis laoreet leo. Nullam in tellus vel metus aliquet ullamcorper ac non quam. Vivamus elementum mauris quis purus ornare, ac elementum dui porta. Nulla lacinia eget enim id mattis. Morbi varius quam fermentum sollicitudin rutrum. Etiam consectetur ac mi vitae dapibus. Vivamus id diam porttitor, tincidunt arcu a, lobortis libero. Aliquam erat volutpat.
```

Nuevamente vuelve a levantar tu proyecto con `hugo serve` y deberías poder ver tu nuevo post.

## 6) Construye tu website.

Lo que hemos hecho hasta ahora ha sido crear un nuevo proyecto de Hugo, añadimos un tema, lo configuramos, y creamos un nuevo post, todo esto lo hemos probado en local.

La gran ayuda de Hugo es poder construir un website con todo lo anterior, para ello es necesario ejecutar el siguiente comando:

```
hugo -D
```

Esto creará una carpeta `public/`, esta va a contener solamente archivos de html, css y js. Esta carpeta es tu sitio construido, podrás tomarla y subirla a algún servidor o usando GitHub Pages.

