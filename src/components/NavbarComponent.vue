<script>
// eslint-disable-next-line no-unused-vars
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <ul class="p-3 flex justify-between sm:justify-center space-x-10">
        <li>
          <RouterLink
            to="/"
            class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/members"
            class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            Members
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contributors"
            class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            Contributors
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>
