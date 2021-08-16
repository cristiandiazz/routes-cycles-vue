import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "ListPage" */ "@/modules/pokemon/pages/ListPage"
      ),
  },
  {
    path: "/about",
    component: () =>
      import(
        /* webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/AboutPage"
      ),
  },
  {
    path: "/:id",
    name: "pokemon-id",
    component: () =>
      import(
        /* webpackChunkName: "PokemonPage" */ "@/modules/pokemon/pages/PokemonPage"
      ),
    props: (route) => {
      console.log(route.params.id);
      const id = Number(route.params.id);
      return isNaN(id) ? { id: 1 } : { id: id };
    },
  },
  {
    path: "/:pathMach(.*)*",
    component: () =>
      import(
        /* webpackChunkName: "NotFound" */ "@/modules/shared/pages/NotFound"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
