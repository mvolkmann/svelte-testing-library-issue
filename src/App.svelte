<script>
  let inputRef;
  let name = '';
  let names = [];

  function addName() {
    names = names.concat(name);
    name = '';
    focus(inputRef);
  }

  const focus = element => element.focus();
</script>

<label>Name</label>
<input
  data-testid="name-input"
  bind:this={inputRef}
  bind:value={name}
  use:focus
/>
<button on:click={addName}>Add</button>

<ul>
  {#each names as name}
    <li>{name}</li>
  {/each}
</ul>
