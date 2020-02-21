<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <div class="row full-width justify-center">
          <div class="text-h6">ระบบรายรับรายจ่าย</div>
          <!-- <q-btn round color="transparent" icon="search" /> -->
          <q-icon size="sm" color="#fff" name="search" />
        </div>
      </q-toolbar>
      <!-- <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h5">ระบบรายรับรายจ่าย</div>
        <div class="text-subtitle">{{todaysDate}}</div>
      </div>-->
      <q-img src="statics/icons/cat3.png" class="header-image absolute-top" />
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above :width="250" :breakpoint="600">
      <q-scroll-area
        style="height: calc(100% - 192px); margin-top: 150px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item exact to="/" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="img:statics/icons/home.png" />
            </q-item-section>

            <q-item-section>หน้าแรก</q-item-section>
          </q-item>

          <q-item exact to="/help" active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="img:statics/icons/ac.jpg" />
            </q-item-section>

            <q-item-section>บัญชี</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <div class="absolute-top bg-green row items-center" style="height: 150px;">
        <!-- <div class="bg-red"> -->
        <div class="row justify-around full-width">
          <q-avatar size="100px" class="q-mb-sm">
            <img src="statics/icons/cat3.png" />
          </q-avatar>
          <div class="column justify-center">
            <div class="text-weight-bold">1 บัญชี</div>
            <div class="text-weight-bold">1000.50 บาท</div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar >
        <!-- <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        /> -->
        <div class="row full-width justify-center">
          <!-- <div class="text-h6">ระบบรายรับรายจ่าย</div> -->
          <!-- <q-btn round color="transparent" icon="search" /> -->
          <!-- <q-icon size="sm" color="#fff" name="search" /> -->
        </div>
      </q-toolbar>
      <!-- <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h5">ระบบรายรับรายจ่าย</div>
        <div class="text-subtitle">{{todaysDate}}</div>
      </div>-->
      <q-img src="statics/icons/cat3.png" class="header-image absolute-top" />
    </q-footer>
  </q-layout>
</template>

<script>
import { date } from "quasar";
// import EssentialLink from "components/EssentialLink";

export default {
  name: "MainLayout",

  components: {
    // EssentialLink
  },
  computed: {
    todaysDate() {
      let timeStamp = Date.now();
      return date.formatDate(timeStamp, "dddd D MMMM");
    }
  },
  data() {
    return {
      leftDrawerOpen: false,
      // essentialLinks: [
      //   {
      //     title: "Docs",
      //     caption: "quasar.dev",
      //     icon: "school",
      //     link: "https://quasar.dev"
      //   },
      //   {
      //     title: "Github",
      //     caption: "github.com/quasarframework",
      //     icon: "code",
      //     link: "https://github.com/quasarframework"
      //   },
      //   {
      //     title: "Discord Chat Channel",
      //     caption: "chat.quasar.dev",
      //     icon: "chat",
      //     link: "https://chat.quasar.dev"
      //   },
      //   {
      //     title: "Forum",
      //     caption: "forum.quasar.dev",
      //     icon: "record_voice_over",
      //     link: "https://forum.quasar.dev"
      //   },
      //   {
      //     title: "Twitter",
      //     caption: "@quasarframework",
      //     icon: "rss_feed",
      //     link: "https://twitter.quasar.dev"
      //   },
      //   {
      //     title: "Facebook",
      //     caption: "@QuasarFramework",
      //     icon: "public",
      //     link: "https://facebook.quasar.dev"
      //   }
      // ]
    };
  }
};
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  filter: grayscale(100%);
}
</style>