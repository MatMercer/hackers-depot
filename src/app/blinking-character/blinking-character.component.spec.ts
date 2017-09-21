import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkingCharacterComponent } from './blinking-character.component';

describe('BlinkingCharacterComponent', () => {
  let component: BlinkingCharacterComponent;
  let fixture: ComponentFixture<BlinkingCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlinkingCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlinkingCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
