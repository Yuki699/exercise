import { LoginPage } from '../pageObjects/loginPage';
import { ContinueVisitPage } from '../pageObjects/continueVisitPage';
import { BasicQuestionsPage } from '../pageObjects/basicQuestionPage';
import { GetBackPage } from '../pageObjects/getBackPage';
import { Login } from '../models/login';
import { BasicQuestions } from '../models/basicQuestions';
import { MedicalQuestionsPage } from '../pageObjects/medicalQuestionsPage';
import { SmsPage } from '../pageObjects/smsPage';
import { MedicalQuestionsConfirmationPage } from '../pageObjects/medicalQuestionConfirmationPage';
import { TestInitialize } from '../utils/testInitialize';

const testInitialize = new TestInitialize();
const loginPage = new LoginPage();
const continueVisitPage = new ContinueVisitPage();
const basicQuestionsPage = new BasicQuestionsPage();
const getBackPage = new GetBackPage();
const medicalQuestionsPage = new MedicalQuestionsPage();
const smsPage = new SmsPage();
const medicalQuestionConfirmationPage = new MedicalQuestionsConfirmationPage()

const loginData: Login = { 
    email: 'mark@webster.com', 
    firstName: 'Mark', 
    lastName: 'Webster', 
    password: 'password' 
}
const basicQuestionsData: BasicQuestions = { 
    zipCode: '43214', 
    dateOfBirth: '02022000', 
    phone: '4321432143', 
    sex: 'Male' 
};
const answersText = [
    'I NEVER have a problem getting or maintaining an erection for as long as I want',
    'I do not recall how it began', 
    'Unchanged', 
    'No', 
    'Yes, and it was normal.', 
    'No, I don’t know my blood pressure'
];

fixture(`roman`)
    .beforeEach(async t => {
        await t.setNativeDialogHandler(() => true);
        await t.navigateTo('https://start.ro.co/roman/ed');
        await testInitialize.testInitialize();
    })

    test('Check Validation errors in login', async t => {
        await loginPage.clickStartVisit();

        await t.expect(loginPage.fieldRequired).ok();
        await t.expect(loginPage.checkobxRequired).ok();
    });

    test('Vist for person under 18 years old', async t => {
        await loginPage.login(loginData);
        await continueVisitPage.clickContinueVisit();

        await basicQuestionsPage.chooseSex(basicQuestionsData.sex);
        await basicQuestionsPage.putDateOfBirth(basicQuestionsData.dateOfBirth);

        await t.expect(getBackPage.informationMessage).ok();
    });

    test('Vist for person, healthy man no blood preasure ', async t => {
        await loginPage.login(loginData);
        await continueVisitPage.clickContinueVisit();
        await basicQuestionsPage.fillForm(basicQuestionsData);
        await smsPage.clickNoThanks();
        await medicalQuestionConfirmationPage.clickContinue();

        await medicalQuestionsPage.chooseOptionWithText(answersText[0]);
        await medicalQuestionsPage.chooseOptionWithText(answersText[1]);
        await medicalQuestionsPage.chooseNeither();
        await medicalQuestionsPage.clickNext();
        await medicalQuestionsPage.chooseOptionWithText(answersText[2]);
        await medicalQuestionsPage.chooseOptionWithText(answersText[3]);
        await medicalQuestionsPage.chooseOptionWithText(answersText[4]);
        await medicalQuestionsPage.chooseOptionWithText(answersText[5]);

        await t.expect(medicalQuestionsPage.placeBloodPreasure).ok();
    });



