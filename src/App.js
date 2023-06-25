import "nijor";
import './router';
import 'nijor/theme';
import App from 'App.nijor';

//@Routes()

App.init('app');
App.run();
let url = window.location.pathname;
window.nijor.renderRoute(url);
setTimeout(()=>window.nijor.emitEvent('route',window.location.pathname),1);