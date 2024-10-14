<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let timeElapsed;
  export let actions = ["pause", "clear", "reveal", "check"];

  function pad (s, len) {
    return s.padStart(len, "0");
  }

  $: h = Math.floor(timeElapsed / 1000 / 3600);
  $: m = Math.floor((timeElapsed / 1000 % 3600) / 60);
  $: s = Math.floor(timeElapsed / 1000 % 60);
</script>

<div class="toolbar">
  <h3><b>
    {h > 0 ? h.toString().concat(":") : ""}{pad(m.toString(), h > 0 ? 2 : 1).concat(":")}{pad(s.toString(), 2)}
  </b></h3>
  <div>
    {#each actions as action}
      <button on:click="{() => dispatch('event', action)}">
        {action.charAt(0).toUpperCase().concat(action.slice(1))}
      </button>
    {/each}
  </div>
</div>

<style>
  .toolbar {
    margin-bottom: 1em;
    padding: 0.5em 1em;
    display: flex;
    justify-content: space-between;
    font-family: var(--font);
    font-size: 0.85em;
    background-color: transparent;
  }

  button {
    cursor: pointer;
    margin-left: 1em;
    font-size: 1em;
    font-family: var(--font);
    background-color: var(--accent-color);
    border-radius: 4px;
    color: var(--main-color);
    padding: 0.75em;
    border: none;
    font-weight: 400;
    transition: background-color 150ms;
  }

  button:hover {
    background-color: var(--secondary-highlight-color);
  }
</style>
