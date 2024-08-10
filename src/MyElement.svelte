<svelte:options
  customElement={{
    tag: 'my-custom-element',
  }}
/>

<button><slot /></button>

<style>
  button {
    display: block;
    width: 100%;
  }
</style>
