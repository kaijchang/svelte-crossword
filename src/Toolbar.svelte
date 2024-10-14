<script>
  import { createEventDispatcher } from "svelte";
  import formatTime from "./helpers/formatTime";
  const dispatch = createEventDispatcher();

  export let timeElapsed;
  export let actions = ["pause", "clear", "reveal", "check"];
</script>

<div class="toolbar">
  <h3><b>
    {formatTime(timeElapsed)}
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
