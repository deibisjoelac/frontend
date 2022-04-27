<template>
  <header class="bg-white">
    <nav class="navbar navbar-expand-lg navbar-light bg-white container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#toggleMenu"
        aria-controls="toggleMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#"
        ><img src="../assets/images/users.png" alt="Pokemon" width="120"
      /></a>
      <div class="collapse navbar-collapse" id="toggleMenu">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'UsersIndex' }" class="nav-link"
              >Usuarios</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
