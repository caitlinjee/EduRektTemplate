import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCheckboxComponent } from './delete-checkbox.component';

describe('DeleteCheckboxComponent', () => {
  let component: DeleteCheckboxComponent;
  let fixture: ComponentFixture<DeleteCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
