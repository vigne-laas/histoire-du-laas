import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBiographieComponent } from './card-biographie.component';

describe('CardBiographieComponent', () => {
  let component: CardBiographieComponent;
  let fixture: ComponentFixture<CardBiographieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBiographieComponent]
    });
    fixture = TestBed.createComponent(CardBiographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
