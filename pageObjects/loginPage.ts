import { Selector } from 'testcafe';
import { t } from 'testcafe';
import { Login } from '../models/login';

export class LoginPage {
    private emailInput = Selector('#temporaryEmail');
    private firstNameInput = Selector('#firstName');
    private lastNameInput = Selector('#lastName');
    private passwordInput = Selector('#password');
    private agreeTermsCheckbox = Selector('.checkbox-label');
    private startVisitButton = Selector('button').withAttribute('type', 'submit');

    public fieldRequired = Selector('.form_field-error').withText('Field required');
    public checkobxRequired = Selector('.form_field-error').withText('Continue your online visit by checking the box below');

    async putEmail(email: string): Promise<void> {
        await t.typeText(this.emailInput, email);
    }

    async putFirstName(firstName: string): Promise<void> {
        await t.typeText(this.firstNameInput, firstName);
    }

    async putLastName(lastName: string): Promise<void> {
        await t.typeText(this.lastNameInput, lastName);
    }

    async putPassword(password: string): Promise<void> {
        await t.typeText(this.passwordInput, password);
    }

    async clickAgreeTerms(): Promise<void> {
        await t.click(this.agreeTermsCheckbox);
    }

    async clickStartVisit(): Promise<void> {
        await t.click(this.startVisitButton);
    }

    async login(loginData: Login): Promise<void> {
        await this.putEmail(loginData.email);
        await this.putFirstName(loginData.firstName);
        await this.putLastName(loginData.lastName);
        await this.putPassword(loginData.password);
        await this.clickAgreeTerms();
        await this.clickStartVisit();
    }
}

