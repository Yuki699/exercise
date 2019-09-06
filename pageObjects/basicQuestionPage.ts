import { Selector } from 'testcafe';
import { t } from 'testcafe';
import { BasicQuestions } from '../models/basicQuestions';

export class BasicQuestionsPage {
    private sexButton = Selector('label');
    private dateOfBirthInput = Selector('#dateOfBirth');
    private zipCodeInput = Selector('#zipcode');
    private phoneInput = Selector('#phone');
    private nextButton = Selector('.button').withAttribute('type', 'submit');

    async chooseSex(sex: string): Promise<void> {
        await t.click(this.sexButton.withText(sex));
    }

    async putDateOfBirth(dateOfBirth: string): Promise<void> {
        await t.typeText(this.dateOfBirthInput, dateOfBirth);
    }

    async putZipCode(zipCode: string): Promise<void> {
        await t.typeText(this.zipCodeInput, zipCode);
    }

    async putPhone(phone: string): Promise<void> {
        await t.typeText(this.phoneInput, phone);
    }

    async clickNext(): Promise<void> {
        await t.click(this.nextButton);
    }

    async fillForm(formData: BasicQuestions): Promise<void> {
        await this.chooseSex(formData.sex);
        await this.putDateOfBirth(formData.dateOfBirth);
        await this.putZipCode(formData.zipCode);
        await this.putPhone(formData.phone);
        await this.clickNext();
    }
    
}