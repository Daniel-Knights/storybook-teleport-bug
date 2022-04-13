import VTeleport from '../components/VTeleport.vue';

export default {
  title: 'VTeleport',
  component: VTeleport,
};

const Template = () => ({
  components: { VTeleport },
  template: `<VTeleport></VTeleport>`,
});

export const Empty = Template.bind({});
