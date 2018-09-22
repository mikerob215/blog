import { AppSideNavContentModule } from './app-side-nav-content.module';

describe('AppSideNavContentModule', () => {
  let appSideNavContentModule: AppSideNavContentModule;

  beforeEach(() => {
    appSideNavContentModule = new AppSideNavContentModule();
  });

  it('should create an instance', () => {
    expect(appSideNavContentModule).toBeTruthy();
  });
});
