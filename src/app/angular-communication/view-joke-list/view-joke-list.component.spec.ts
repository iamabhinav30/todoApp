import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJokeListComponent } from './view-joke-list.component';

describe('ViewJokeListComponent', () => {
  let component: ViewJokeListComponent;
  let fixture: ComponentFixture<ViewJokeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJokeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJokeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
