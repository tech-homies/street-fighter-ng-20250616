import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav } from './nav';

describe('Nav', () => {
  let component: Nav;
  let fixture: ComponentFixture<Nav>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Nav],
      imports: [],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
