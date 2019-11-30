# Building-real-user-interfaces-using-tailwind

> Examples of building realworld user interfaces using Tailwind.css

The websites that I have tried to replicate are:

- [Shopify](https://realworld-ui-tailwind.netlify.com/shopify/)
- [Spotify](https://realworld-ui-tailwind.netlify.com/spotify/)
- [Netlify](https://realworld-ui-tailwind.netlify.com/netlify/)
- [Atlassian](https://realworld-ui-tailwind.netlify.com/atlassian/)

<p float="left">
  <a href="https://realworld-ui-tailwind.netlify.com/shopify/" target="_blank"><img alt="Shopify" src="https://raw.githubusercontent.com/asvny/building-realworld-user-interfaces-using-tailwind/master/img/shopify.png" width="49%" /></a>
   <a href="https://realworld-ui-tailwind.netlify.com/spotify/" target="_blank">  <img atl="Spotify" src="https://raw.githubusercontent.com/asvny/building-realworld-user-interfaces-using-tailwind/master/img/spotify.png" width="49%" /></a>
</p>

<p float="left">
  <a href="https://realworld-ui-tailwind.netlify.com/netlify/" target="_blank"> <img alt="Netlify" src="https://raw.githubusercontent.com/asvny/building-realworld-user-interfaces-using-tailwind/master/img/netlify.png" width="49%" /></a>
   <a href="https://realworld-ui-tailwind.netlify.com/atlassian/" target="_blank">  <img alt="Atlassian" src="https://raw.githubusercontent.com/asvny/building-realworld-user-interfaces-using-tailwind/master/img/atlassian.png" width="49%" /></a>
</p>

## Thoughts on Atomic CSS

Since there are already lots of posts, I'll just brief the intro part. For a very long time (from 2014), my preference has always been

- SUIT CSS for UI components like buttons, forms, base layouts etc..,
- Atomic CSS for almost all other usecases.

Why ? It is because when you work on a greenfield project, the base UI components doesn't change much and mostly it usually changes in color or typography and main project UIs change very frequently and so therefore it is necessary to consider that deletion of code should become easier when coding new UIs. To achieve this, using atomic css in the main product for layouts and all other cases, it becomes the only source. So, when a designer comes in with a new UI, it feels quite easier to delete the already coded template or react/ember/vue or in this case any other component and quickly again, we can iterate on the new UI without writing any additional CSS but only the template part.

### When things get messy ?

- Using :nth-child, :only-child etc.., selector is quite uneasy. Simple example which I can illustrate is

```html
<!--
Usually in frontend frameworks, we use .map(js) or #each(hbs) to loop over data, it becomes difficult
to achieve the following example 
-->

<ul class="p-0 m-0">
  { data.map(item => `
  <li class="bt-gray-500">{item.title}</li>
  `) }
</ul>

// Outcome Rachel Green --------------- Monica Geller --------------- Joey Tribbiani ---------------
Chandler Bing --------------- (This should not be displayed) Expected Rachel Green ---------------
Monica Geller --------------- Joey Tribbiani --------------- Chandler Bing
```

- When you have to deal with states like hover, active, focus etc., (_but luckly Tailwind.css came with a solution_)
- Responsive design - You get to add a _lot_ of classes and becomes quite unfamiliar what the element does at a single glance.

## Author

Annamalai Saravanan
