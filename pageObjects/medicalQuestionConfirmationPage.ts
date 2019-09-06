import { Selector, t } from "testcafe";

export class MedicalQuestionsConfirmationPage {
    private continueButton = Selector('.button.button--big.button--block.button--primary.flow-question-button');

    async clickContinue() {
        await t.wait(500);
        await t.click(this.continueButton);
    }
}