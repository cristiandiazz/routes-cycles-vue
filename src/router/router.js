import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "ListPage" */ "@/modules/pokemon/layouts/PokemonLayout"
      ),
    children: [
      {
        name: "home",
        path: "home",
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */ "@/modules/pokemon/pages/ListPage"
          ),
      },
      {
        name: "pokemon-about",
        path: "about",
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/AboutPage"
          ),
      },
      {
        name: "pokemon-id",
        path: "pokemonid/:id",
        component: () =>
          import(
            /* webpackChunkName: "PokemonPage" */ "@/modules/pokemon/pages/PokemonPage"
          ),
        props: (route) => {
          const id = Number(route.params.id);
          return isNaN(id) ? { id: 3 } : { id: id };
        },
      },
      {
        path: "",
        redirect: { name: "pokemon-about" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
