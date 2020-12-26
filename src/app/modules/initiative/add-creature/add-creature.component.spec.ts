import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreatureComponent } from './add-creature.component';

describe('AddCreatureComponent', () => {
  let component: AddCreatureComponent;
  let fixture: ComponentFixture<AddCreatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCreatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
