App.vue
<template>
  <div id="app">
    <div className="relative z-0 bg-primary">
      <div class="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <NavbarComponent />
        <HeroComponent />
      </div>
      <AboutComponent />
      <ExperienceComponent />
      <ProjectComponent />
      <ContactComponent />
    </div>
  </div>
</template>

<script>
import { NavbarComponent, HeroComponent, AboutComponent, ExperienceComponent, ProjectComponent, ContactComponent } from './components';

export default {
  components: {
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectComponent,
    ContactComponent,
  }
}
</script>

<style>
/* Style global */
</style>
