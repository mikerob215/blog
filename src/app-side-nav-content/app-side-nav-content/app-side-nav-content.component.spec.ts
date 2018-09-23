import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSideNavContentComponent } from './app-side-nav-content.component';

describe('AppSideNavContentComponent', () => {
    let component: AppSideNavContentComponent;
    let fixture: ComponentFixture<AppSideNavContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppSideNavContentComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppSideNavContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
