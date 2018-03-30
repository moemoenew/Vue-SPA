<template>
  <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/category/front-end">
        <img src="http://bit.ly/vue-img" alt="Vue Spa" />
      </router-link>
      <router-link class="nav-item is-tab" to="/category/front-end">
        Front-End
      </router-link>
      <router-link class="nav-item is-tab" :to="{ name: 'category', params: { id: 'mobile'}}">
        Mobile
      </router-link>
      <router-link class="nav-item is-tab" to="/about">
        About
      </router-link>
      <router-link class="nav-item is-tab" to="/login">
        Login
      </router-link>
    </div>
  </nav>
</template>
