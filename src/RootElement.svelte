<svelte:options
  customElement={{
    tag: 'root-custom-element',
    props: {},
  }}
/>

<slot />

<style>
  :host {
    display: block;
  }
</style>
