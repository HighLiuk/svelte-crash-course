<script>
  import { Link, Router, Route } from "svelte-navigator"
  import Home from "./pages/Home.svelte"
  import Users from "./pages/Users.svelte"
</script>

<Router>
  <nav class="p-4 bg-blue-800 text-white">
    <Link class="mx-4 cursor-pointer hover:underline" to="/">Home</Link>
    <Link class="mx-4 cursor-pointer hover:underline" to="/users">Users</Link>
  </nav>

  <Route path="/" component={Home} />
  <Route path="/users" component={Users} />
</Router>
