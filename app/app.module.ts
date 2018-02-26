import { NgModule, Inject} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { InfoStatusCardComponent } from 'patternfly-ng/card/info-status-card/info-status-card.component';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [
        InfoStatusCardComponent
    ],
    entryComponents: [
        InfoStatusCardComponent
    ]
})
export class AppModule {
    private upgrade: UpgradeModule;
    constructor(@Inject(UpgradeModule) upgrade: UpgradeModule) {
        this.upgrade = upgrade;
    }
    public ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['catalogApp'], { strictDi: true });
    }
}
