<template>
    <div class="wrapper">
        <vhead></vhead>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
  import vhead from './Header.vue';
  import vSidebar from './Sidebar.vue';

  export default {
    components: {
      vhead, vSidebar
    }
  };
</script>
