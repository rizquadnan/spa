// ZeroState.stories.js
import ZeroState from './ZeroState.vue';
import imageFile from '~/static/images/zero-state.svg';

const image = {
  src: imageFile
};

export default {
  title: 'Components/Zero State',
  component: ZeroState,
  decorators: [
    () => ({
      template:
        '<div style="background-color: #f8f9fa"><story/></div>'
    })
  ],
  argTypes: {
    fontSize: { control: false },
    imageWidth: { control: false }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ZeroState },
  template:
    '<ZeroState :message="message" :image="image" />'
});

export const Message = Template.bind({});
Message.args = {
  message: 'Kurikulum',
  image: image.src
};
