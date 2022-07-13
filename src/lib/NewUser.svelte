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
    <Modal on:close={() => (showModal = false)}>
      <h1 class="text-2xl text-center">Create new user</h1>

      <button
        class="px-2 py-1 bg-blue-800 text-white rounded-lg"
        slot="right-button"
        type="submit">Create</button
      >
    </Modal>
  {/if}
</div>
