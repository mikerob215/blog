import { AppLayoutModule } from './app-layout.module';

describe('AppLayoutModule', () => {
    let sideNavModule: AppLayoutModule;

    beforeEach(() => {
        sideNavModule = new AppLayoutModule();
    });

    it('should create an instance', () => {
        expect(sideNavModule).toBeTruthy();
    });
});
