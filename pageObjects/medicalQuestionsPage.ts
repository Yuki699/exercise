import { Selector, t } from "testcafe";

export class MedicalQuestionsPage {
    private baseSelector = Selector('#app');
    private neitherCheckbox = Selector('.checkbox-label').withText('Neither');
    private nextButton = Selector('.button').withAttribute('type', 'submit');
    
    public placeBloodPreasure = Selector('div').withText('No problem, we’ll send you the closest place to get free blood pressure reading.');

    async chooseOptionWithText(text: string) {
        await t.click(this.baseSelector.find('div.flow-choice_list > div.flow-choice_list-item').withText(text));
    }

    async chooseNeither() {
        await t.click(this.neitherCheckbox);
    }

    async clickNext() {
        await t.click(this.nextButton);
    }
}