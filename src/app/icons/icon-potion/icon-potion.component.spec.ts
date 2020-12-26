import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPotionComponent } from './icon-potion.component';

describe('IconPotionComponent', () => {
  let component: IconPotionComponent;
  let fixture: ComponentFixture<IconPotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
