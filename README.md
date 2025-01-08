# HTML Template Repository with HTML Proofer

This template repository includes preconfigured GitHub Action that will validate html files in a project with (HTMLProofer)[https://github.com/gjtorikian/html-proofer/].
And htmx to load partials

```html
<main data-hx-trigger="load" data-hx-swap="outerHTML" data-hx-get="index.main.partial.html"></main>
```


```js
function init() {
    import('...js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});
```

Add the data-proofer-ignore attribute to any tag to ignore it from every check.

```html
<a href="https://notareallink" data-proofer-ignore>Not checked.</a>
```
# Team

- Dmytro Sushko
- Vlad Pylypenko
- Anastasiia Kravchenko
- Dmitry Hrunt
- Anastasiia Kravchenko
- Vlad Finiak
- Demianov Nikita
- Anton Kachanovski
>>>>>>> 35ffc4e8b6bd24ab7e7a9c8d0734b29ccbaad937
>>>>>>> 5cf019c4dc22c1dbff6946f0421bcdd467e045fd
