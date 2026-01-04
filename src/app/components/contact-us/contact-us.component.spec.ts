import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanosComponent } from './contact-us.component';

describe('ContactanosComponent', () => {
  let component: ContactanosComponent;
  let fixture: ComponentFixture<ContactanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactanosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
