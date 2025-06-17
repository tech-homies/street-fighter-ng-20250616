import { CharacterDto } from './character-dto';
import { CountryDto } from './country-dto';

export type Character = CharacterDto & {
  countryDetails: CountryDto;
};
