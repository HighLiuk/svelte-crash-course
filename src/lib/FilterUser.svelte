<script>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()

  const filter = (e) => dispatch("filter", e.target.value)
</script>

<div class="ml-4 mt-4">
  <label for="user-filter">Filter User</label>

  <select
    on:change={filter}
    class="ml-4 py-2 px-4 border rounded-lg cursor-pointer"
    name="user-filter"
    id="user-filter"
  >
    <option value="all">All</option>
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
  </select>
</div>
