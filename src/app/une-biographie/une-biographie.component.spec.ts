import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneBiographieComponent } from './une-biographie.component';

describe('UneBiographieComponent', () => {
  let component: UneBiographieComponent;
  let fixture: ComponentFixture<UneBiographieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UneBiographieComponent]
    });
    fixture = TestBed.createComponent(UneBiographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
