# Building Real-World User Interfaces Using Tailwind

> Examples of building real-world user interfaces using Tailwind CSS.

The websites I have replicated are:

- [Shopify](https://building-realworld-user-interfaces-using-tailwind.pages.dev/shopify/)
- [Spotify](https://building-realworld-user-interfaces-using-tailwind.pages.dev/spotify/)
- [Netlify](https://building-realworld-user-interfaces-using-tailwind.pages.dev/netlify/)
- [Atlassian](https://building-realworld-user-interfaces-using-tailwind.pages.dev/atlassian/)

## Previews

<p float="left">
  <a href="https://realworld-ui-tailwind.netlify.com/shopify/" target="_blank">
    <img alt="Shopify" src="https://raw.githubusercontent.com/asvny/building-realworld-user-interfaces-using-tailwind/master/img/shopify.png" width="49%" />
  </a>
  <a href="https://realworld-ui-tailwind.netlify.com/spotify/" target="_blank">
    <img alt="Spotify" src="https://raw.githubusercontent.com/asvny/building-realworld-user-interfaces-using-tailwind/master/img/spotify.png" width="49%" />
  </a>
</p>

<p float="left">
  <a href="https://realworld-ui-tailwind.netlify.com/netlify/" target="_blank">
    <img alt="Netlify" src="https://raw.githubusercontent.com/asvny/building-realworld-user-interfaces-using-tailwind/master/img/netlify.png" width="49%" />
  </a>
  <a href="https://realworld-ui-tailwind.netlify.com/atlassian/" target="_blank">
    <img alt="Atlassian" src="https://raw.githubusercontent.com/asvny/building-realworld-user-interfaces-using-tailwind/master/img/atlassian.png" width="49%" />
  </a>
</p>

---

## Thoughts on Atomic CSS

Since there are already many posts about Atomic CSS, I'll keep this introduction brief. For a long time (since 2014), my preference has been:

- **SUIT CSS** for UI components like buttons, forms, and base layouts.
- **Atomic CSS** for almost all other use cases.

### Why Use Atomic CSS?

When working on a greenfield project, base UI components don’t change much—usually just in terms of color or typography. However, the main project UI changes frequently. To make code deletion easier when iterating on new designs, using Atomic CSS for layouts and other dynamic components ensures flexibility.

When a designer presents a new UI, it becomes much easier to delete existing templates (React, Ember, Vue, etc.) and quickly iterate without writing additional CSS—only modifying the template.

### When Do Things Get Messy?

1. **Using `:nth-child`, `:only-child`, etc., selectors is tricky**

   A simple example:

   ```html
   <!-- Frontend frameworks often use loops like .map (JS) or #each (HBS), making some styling tasks tricky -->
   <ul class="p-0 m-0">
     { data.map(item => `
     <li class="border-t border-gray-500">{item.title}</li>
     `) }
   </ul>

   <!-- Outcome:
   Rachel Green
   ---------------
   Monica Geller
   ---------------
   Joey Tribbiani
   ---------------
   Chandler Bing  
   --------------- (This should not be displayed)

   Expected:
   Rachel Green
   ---------------
   Monica Geller
   ---------------
   Joey Tribbiani
   ---------------
   Chandler Bing
   -->
   ```

2. **Managing states like `hover`, `active`, and `focus`**
   - Thankfully, Tailwind CSS provides solutions for this.

3. **Responsive design challenges**
   - You end up adding a lot of classes, making it hard to understand an element’s purpose at a glance.

---

## Author

**Annamalai Saravanan**

