import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersCountryPage } from './characters-country-page';

describe('CharactersCountryPage', () => {
  let component: CharactersCountryPage;
  let fixture: ComponentFixture<CharactersCountryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersCountryPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersCountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
