import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campotexto } from './campotexto';

describe('Campotexto', () => {
  let component: Campotexto;
  let fixture: ComponentFixture<Campotexto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Campotexto],
    }).compileComponents();

    fixture = TestBed.createComponent(Campotexto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
