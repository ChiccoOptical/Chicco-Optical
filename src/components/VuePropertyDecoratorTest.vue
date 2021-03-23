<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';

export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
