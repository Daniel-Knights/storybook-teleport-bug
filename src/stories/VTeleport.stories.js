import VTeleport from '../components/VTeleport.vue';

export default {
  component: VTeleport,
  decorators: [() => ({ template: '<div id="app"><story /></div>' })],
};

export const Template = () => ({
  components: { VTeleport },
  template: `<VTeleport></VTeleport>`,
});
