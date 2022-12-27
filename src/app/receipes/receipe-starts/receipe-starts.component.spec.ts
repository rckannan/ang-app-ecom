import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeStartsComponent } from './receipe-starts.component';

describe('ReceipeStartsComponent', () => {
  let component: ReceipeStartsComponent;
  let fixture: ComponentFixture<ReceipeStartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceipeStartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceipeStartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
