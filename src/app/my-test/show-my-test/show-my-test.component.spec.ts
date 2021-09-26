import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyTestComponent } from './show-my-test.component';

describe('ShowMyTestComponent', () => {
  let component: ShowMyTestComponent;
  let fixture: ComponentFixture<ShowMyTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMyTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
