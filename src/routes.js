import HomeRoutes from './pages/home';

export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler) {
    routeHandler.setPwaSchema({
      name: 'ReactPWA',
      short_name: 'ReactPWA',
    });
    routeHandler.setDefaultSeoSchema({
      title: 'ReactPWA',
    });

    const routes = [
      ...HomeRoutes,
    ];

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
