import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocateUsComponent } from './locate-us.component';

describe('UbicanosComponent', () => {
  let component: LocateUsComponent;
  let fixture: ComponentFixture<LocateUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocateUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocateUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
