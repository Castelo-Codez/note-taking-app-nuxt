import {mountSuspended} from "@nuxt/test-utils/runtime";
import {describe, expect, test} from "vitest";
import {LoginForm} from "#components";
import waitForExpect from "wait-for-expect";
import {flushPromises} from "@vue/test-utils";

describe("testing login form", () => {
    test.skip("testing number 1 => if the user log in without Enter any value", async () => {
        let Form = await mountSuspended(LoginForm);
        expect(Form.isVisible()).toBeTruthy();
        await Form.trigger("submit");
        await flushPromises();
        await waitForExpect(async () => {
            expect(Form.find("#email").element.nextElementSibling).toBeTruthy();
            expect(
                Form.find("#email").element.nextElementSibling?.querySelector(
                    "span"
                )?.textContent
            ).toBe("Required");
            expect(
                Form.find("#password").element.nextElementSibling
            ).toBeTruthy();
            expect(
                Form.find(
                    "#password"
                ).element.nextElementSibling?.nextElementSibling?.querySelector(
                    "span"
                )?.textContent
            ).toBe("Required");
        });
    });
    test.skip("testing number 2 => testing email input if user Enters invalid email", async () => {
        let Form = await mountSuspended(LoginForm);
        expect(Form.isVisible()).toBeTruthy();
        const email = Form.find("#email");
        await email.setValue("eslam@gmail");
        await flushPromises();
        await waitForExpect(() => {
            expect(
                Form.find("#emailErrors").element.querySelector("span")
                    ?.textContent
            ).toBe("Invalid email");
        });
        await email.setValue("eslamgomaa@gmail.com");
        await flushPromises();
        await waitForExpect(() => {
            expect(Form.find("#emailErrors").exists()).toBe(false);
        });
        await email.setValue("");
        await flushPromises();
        await waitForExpect(() => {
            expect(Form.find("#emailErrors").exists()).toBe(true);
            expect(
                Form.find("#emailErrors").element.querySelector("span")
                    ?.textContent
            ).not.toBe("Invalid email");
            expect(Form.find("#emailErrors").exists()).toBe(true);
            expect(
                Form.find("#emailErrors").element.querySelector("span")
                    ?.textContent
            ).toBe("email cann't be empty");
        });
        await email.setValue("esl@fa.co");
        await flushPromises();
        await waitForExpect(() => {
            expect(Form.find("#emailErrors").exists()).toBe(false);
        });
    });
    test("testing number 2 => testing password input if user Enters empty password or characters less than 7", async () => {
        let Form = await mountSuspended(LoginForm);
        expect(Form.isVisible()).toBeTruthy();
        const password = Form.find("#password");
        await password.setValue("easc");
        await flushPromises();
        await waitForExpect(() => {
            expect(Form.find("#passwordErrors").exists()).toBe(true);
            expect(
                Form.find("#passwordErrors").element.querySelector("span")
                    ?.textContent
            ).toBe("password min is 7 characters");
        });
        await password.setValue("dasd4");
        await flushPromises();
        await waitForExpect(() => {
            expect(
                Form.find("#passwordErrors").element.querySelector("span")
                    ?.textContent
            ).toBe("password min is 7 characters");
        });
        await password.setValue("");
        await flushPromises();
        await waitForExpect(() => {
            expect(Form.find("#passwordErrors").exists()).toBe(true);
            expect(
                Form.find("#passwordErrors").element.querySelector("span")
                    ?.textContent
            ).toBe("password cann't be empty");
        });
        await password.setValue("adasd3241asd");
        await flushPromises();
        await waitForExpect(() => {
            expect(Form.find("#passwordErrors").exists()).toBe(false);
        });
    });
});
