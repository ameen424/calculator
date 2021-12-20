<script>
  let name1 = "ameen";
  let color = "blue";
  let list = [];

  let showtext = false;

  const toggle = () => {
    color = color === "blue" ? "red" : "blue";
    showtext = !showtext;
    list = [
      {
        id: "1",
        name: "vinod",
        text: "The predecessor of Svelte is Ractive.js, which Rich Harris had developed earlier.[10] Version 1 of Svelte was written in JavaScript and was released on 29 November 2016 Version 2 of Svelte was released on 19 April 2018 Version 3 of Svelte is written in TypeScript and was released on 21 April 2019 The SvelteKit web framework was announced in October 2020 and entered beta in March 2021",
      },
      {
        id: "2",
        name: "shaik",
        text: "Svelte is a free and open-source front end compiler created by Rich Harris and maintained by the Svelte core team members. Svelte applications do not include a framework script. Instead, building a Svelte application generates the necessary code to manipulate the DOM within each component, which may reduce the size of transferred files as well as give better client startup and run-time performance. Svelte has its own compiler for converting app code into client-side JavaScript at build time. It is written in TypeScript. Unlike the traditional frameworks (React and Vue) which carry out the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when an app is built",
      },
      {
        id: "3",
        name: "mosh",
        text: "The Svelte maintainers created SvelteKit as the official way to build projects with Svelte. The Svelte maintainers also maintain a number of integrations for popular software projects under the Svelte organization including integrations for Vite, Rollup, Webpack, TypeScript, VS Code, eslint, prettier, and more.",
      },
    ];
  };
</script>

<main>
  <h1 style="color: {color}">Hello {name1}</h1>
  <p>Welcome to Svelte</p>

  <button on:click={toggle}>Click</button>
  <div class="container">
    {#if showtext}
      {#each list as i}
        <h2>{i.id} : {i.name}</h2>
        <h4>{i.text}</h4>
      {/each}
    {/if}
  </div>
</main>

<style>
  main {
    text-align: unset;
    padding: 1em;
    max-width: auto;
    margin: 0 auto;
  }

  h1 {
    color: red;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  .container {
    max-width: 786px;
    margin: 100px auto;
    padding: 0 10px;
  }
</style>
