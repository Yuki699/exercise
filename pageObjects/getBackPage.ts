import { Selector } from 'testcafe';

export class GetBackPage {
    public informationMessage = Selector('span').withText('Unfortunately our ED treatment is not available to people under 18');
}