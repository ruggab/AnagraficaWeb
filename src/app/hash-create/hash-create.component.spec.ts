import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashCreateComponent } from './hash-create.component';

describe('HashCreateComponent', () => {
  let component: HashCreateComponent;
  let fixture: ComponentFixture<HashCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
