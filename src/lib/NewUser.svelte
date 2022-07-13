<script>
  import Modal from "./Modal.svelte"

  let showModal = false
</script>

<div>
  <button
    class="px-2 py-1 bg-blue-800 text-white rounded-lg"
    on:click={() => (showModal = true)}>New User</button
  >

  {#if showModal}
    <Modal on:close={() => (showModal = false)} />
  {/if}
</div>
