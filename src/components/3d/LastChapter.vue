<script setup>
import { TresCanvas } from '@tresjs/core'; 
import { OrbitControls, GLTFModel } from '@tresjs/cientos';


</script>

<template>
  <div class="w-full h-full relative flex items-center justify-center">
    <TresCanvas frameloop='demand' clear-color="#000207" shadows alpha>
      <TresPerspectiveCamera :position="[1, 0, 9]" />
      <OrbitControls 
        :enable-zoom="false" 
        :min-polar-angle="Math.PI / 2"
        :max-polar-angle="Math.PI / 2"
      />
      <Suspense>
        <GLTFModel scale="2.75" ref="boxRef" path="3d/star-wars.glb" draco />
      </Suspense>
      <TresDirectionalLight :position="[-4, 8, 4]" :intensity="3" cast-shadow />
    </TresCanvas>
  </div>
</template>