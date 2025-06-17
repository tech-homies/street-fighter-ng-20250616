import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CharacterDTO } from '../../../shared/models/character.models';
import { EntityState } from '../../../store/reducers';
import { CharacterCard } from './character-card';

describe('CharacterCard', () => {
  let component: CharacterCard;
  let fixture: ComponentFixture<CharacterCard>;

  const initialState: Partial<EntityState> = {
    characters: [{ id: 'ryu', name: 'Ryu' } as CharacterDTO],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCard, HttpClientTestingModule, RouterTestingModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCard);
    component = fixture.componentInstance;
    component.character = initialState.characters![0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
