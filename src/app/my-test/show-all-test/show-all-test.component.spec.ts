import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllTestComponent } from './show-all-test.component';

describe('ShowAllTestComponent', () => {
  let component: ShowAllTestComponent;
  let fixture: ComponentFixture<ShowAllTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
