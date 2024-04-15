import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopypasteComponent } from './copypaste.component';

describe('CopypasteComponent', () => {
  let component: CopypasteComponent;
  let fixture: ComponentFixture<CopypasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopypasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopypasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
