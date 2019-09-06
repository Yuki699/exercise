import { Selector, t } from "testcafe";

export class SmsPage {
    private noThanksButton = Selector('.sc-dVhcbM.kDlaxH.sc-bxivhb.dsVPNE');

    async clickNoThanks() {
        await t.wait(500);
        await t.click(this.noThanksButton);
    }
}