import { writable } from "svelte/store"
import user1 from "./assets/img/user1.png"
import user2 from "./assets/img/user2.png"
import user3 from "./assets/img/user3.png"

export const users = writable([
  {
    id: 1,
    image: user1,
    name: "John",
    email: "john@bitfumes.com",
    active: true,
  },
  {
    id: 2,
    image: user2,
    name: "Jeni",
    email: "jenie@bitfumes.com",
    active: true,
  },
  {
    id: 3,
    image: user3,
    name: "Hacker",
    email: "hacker@bitfumes.com",
    active: false,
  },
])
