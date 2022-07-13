<script>
  import { createEventDispatcher } from "svelte"
  import Modal from "./Modal.svelte"

  const dispatch = createEventDispatcher()

  let showModal = false
  let user = {}

  const submit = () => {
    dispatch("newUser", user)
    showModal = false
    user = {}
  }
</script>

<div>
  <button
    class="px-2 py-1 bg-blue-800 text-white rounded-lg"
    on:click={() => (showModal = true)}>New User</button
  >

  <Modal
    on:close={() => (showModal = false)}
    on:submit={submit}
    show={showModal}
  >
    <h1 class="text-2xl text-center">Create new user</h1>

    <div class="py-1 px-2 my-4">
      <label for="name">Name</label>

      <input
        type="text"
        id="name"
        bind:value={user.name}
        class="px-2 py-1 rounded border w-full"
        placeholder="John Doe"
      />
    </div>

    <div class="py-1 px-2 my-4">
      <label for="email">Email</label>

      <input
        type="email"
        id="email"
        bind:value={user.email}
        class="px-2 py-1 rounded border w-full"
        placeholder="john.doe@example.org"
      />
    </div>

    <div class="py-1 px-2 my-4 flex justify-between">
      <span>Active</span>

      <div class="flex space-x-10">
        <label class="flex space-x-2 items-center" for="true">
          <span>Yes</span>

          <input
            type="radio"
            value={true}
            bind:group={user.active}
            name="active"
            id="true"
            class="px-2 py-1 rounded border w-full mt-0.5"
          />
        </label>

        <label class="flex space-x-2 items-center" for="false">
          <span>No</span>

          <input
            type="radio"
            value={false}
            bind:group={user.active}
            name="active"
            id="false"
            class="px-2 py-1 rounded border w-full mt-0.5"
          />
        </label>
      </div>
    </div>

    <button
      class="px-2 py-1 bg-blue-800 text-white rounded-lg"
      slot="right-button"
      type="submit">Create</button
    >
  </Modal>
</div>
