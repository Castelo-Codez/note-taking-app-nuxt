import {mountSuspended} from "@nuxt/test-utils/runtime";
import {describe, expect, test} from "vitest";
import {LoginForm} from "#components";
import waitForExpect from "wait-for-expect";
import {flushPromises} from "@vue/test-utils";

describe("testing login form", () => {
    test("testing number 1 => if the user log in without Enter any value", async () => {
        let Form = await mountSuspended(LoginForm);

        expect(Form.isVisible()).toBeTruthy();
        await Form.findAll("button")[1].trigger("click");
        await flushPromises();
        await waitForExpect(() => {
            console.log(
                Form.find("#email").element.parentElement?.children.length
            );
        });
    });
});
