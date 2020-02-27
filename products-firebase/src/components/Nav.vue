<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Products firebase</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link :to="{name:'Index'}" class="nav-link" href="#">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'Products'}" class="nav-link" href="#">Products</router-link>
      </li>
    </ul>
  </div>
</nav>

</template>