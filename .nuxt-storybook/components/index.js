export { default as Logo } from '../..\\components\\Logo.vue'
export { default as StorybookZeroState } from '../..\\components\\storybook\\ZeroState.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyStorybookZeroState = import('../..\\components\\storybook\\ZeroState.vue' /* webpackChunkName: "components/storybook-zero-state" */).then(c => c.default || c)
