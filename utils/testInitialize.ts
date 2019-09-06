import { t } from 'testcafe';

export class TestInitialize {
    async testInitialize() {
        await t.maximizeWindow();
    }
}