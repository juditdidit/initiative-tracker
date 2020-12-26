import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSkullComponent } from './icon-skull.component';

describe('IconSkullComponent', () => {
  let component: IconSkullComponent;
  let fixture: ComponentFixture<IconSkullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSkullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSkullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
