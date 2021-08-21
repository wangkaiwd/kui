import { App } from 'vue';
import Input from './components/input/input';

type PluginInstallFunction = (app: App, ...options: any[]) => any

const components = [
  Input
];

const install: PluginInstallFunction = (app, options) => {
  components.forEach(component => {
    app.component(component.name, component);
  });
};

export default install;