import { Selector } from 'testcafe';
import { t } from 'testcafe';

export class ContinueVisitPage {
    private continueVisitButton = Selector('.button.start-button');

    async clickContinueVisit(): Promise<void> {
        await t.click(this.continueVisitButton);
    }
    
}