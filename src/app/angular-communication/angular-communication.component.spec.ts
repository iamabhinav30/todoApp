import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCommunicationComponent } from './angular-communication.component';

describe('AngularCommunicationComponent', () => {
  let component: AngularCommunicationComponent;
  let fixture: ComponentFixture<AngularCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
