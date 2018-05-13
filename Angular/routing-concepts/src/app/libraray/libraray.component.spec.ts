import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarayComponent } from './libraray.component';

describe('LibrarayComponent', () => {
  let component: LibrarayComponent;
  let fixture: ComponentFixture<LibrarayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
