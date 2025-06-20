import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ArenaStore } from '../../shared/stores/arena-store';
import { MatButton } from '@angular/material/button';
import { FightsService } from '../../shared/services/fights-service';

@Component({
  selector: 'app-arena-page',
  imports: [MatButton],
  templateUrl: './arena-page.html',
  styleUrl: './arena-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ArenaPage {
  arenaStore = inject(ArenaStore);
  fightsService = inject(FightsService);
  character1 = computed(() => this.arenaStore.arenaCharacters()[0]);
  character2 = computed(() => this.arenaStore.arenaCharacters()[1]);

  fight(): void {
    this.fightsService.fight(this.character1().id, this.character2().id).subscribe();
  }
}
