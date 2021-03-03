<template>
  <div class="zero">
    <img :style="imgStyles" :src="image || '/images/zero-state.svg'" />
    <p :style="textStyles" class="zero__message mt-xxs">
      {{ message }}
      <span :style="textStyles" class="zero__message zero__message--empty"
        >kosong.</span
      >
    </p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Data',
    },
    image: {
      type: String,
      default: '',
    },
    imageWidth: {
      type: String,
      default: null,
    },
    fontSize: {
      type: String,
      default: null,
    },
  },
  computed: {
    imgStyles() {
      return {
        width: this.imageWidth,
      }
    },
    textStyles() {
      return {
        fontSize: this.fontSize,
      }
    },
  },
}
</script>

<style scoped>
.zero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2.5rem 0 1.5rem;
}

.zero__message {
  margin: 1rem 0 0;
  color: grey;
  font-size: 1.75rem;
  line-height: 21.6px;
}

.zero__message--empty {
  color: black;
}
</style>
