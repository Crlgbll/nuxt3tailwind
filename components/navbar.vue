<template>
  <div
    class="h-13 flex justify-between items-between mx-auto shadow-md bg-white/80 font-quicksand">
    <nuxt-link to="/">
      <div class="relative flex justify-around items-cente w-96">
        <button class="h-14 w-16">
          <icon
            class="h-12 w-6 hover:scale-125 duration-500"
            name="ph:list-fill"
          ></icon>
        </button>
        <div class="flex items-center">
          <img
            class="h-14 w-14"
            src="../assets/images/recipedia-logo.png"
            alt=""
          />
          <h1 class="text-xl">
            <span class="text-blue-800 font-semibold">RECIPE</span>DIA
          </h1>
        </div>
      </div>
    </nuxt-link>
    <div class="h-14 w-1/3 relative">
      <ul class="flex py-3 justify-around text-lg items-center">
        <nuxt-link to="/">
          <button class="hover:text-violet-700 duration-300">
            <li>Home</li>
          </button>
        </nuxt-link>

        <button class="hover:text-violet-700 duration-300">
          <li>Search</li>
        </button>
        <button class="hover:text-violet-700 duration-300">
          <li>Upload</li>
        </button>
        <button class="hover:text-violet-700 duration-300">
          <li>About Us</li>
        </button>
      </ul>
    </div>
    <div class="h-14 w-48 relative">
      <ul class="h-14 flex py-3 justify-evenly text-lg items-center">
        <nuxt-link to="login">
          <button class="h-10 w-16"><li>Login</li></button>
        </nuxt-link>
        <nuxt-link to="/signup">
          <button
            class="h-10 w-28 text-white bg-violet-700 rounded-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-200"
          >
            <li>Sign-Up</li>
          </button>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>
