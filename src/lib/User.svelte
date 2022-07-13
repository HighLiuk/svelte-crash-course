<script>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()

  export let user
  export let i

  const remove = () => dispatch("remove", user.id)
</script>

<div
  class="flex m-5 bg-white border p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer items-center relative"
>
  <button
    class="absolute right-0 top-0 -mt-3 rounded-full w-5 h-5 bg-red-300 text-sm text-white text-center hover:bg-red-500"
    on:click={remove}>X</button
  >

  <p class="w-10">{i + 1}</p>

  <img class="rounded-full w-16 h-16 mx-4" src={user.image} alt={user.name} />

  <p class="mx-4 w-20">{user.name}</p>

  <p class="mx-4 w-20">{user.email}</p>
</div>
