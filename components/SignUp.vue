<script lang="ts" setup>
const showPassword = ref(false);
import {useForm} from "vee-validate";
import {toTypedSchema} from "@vee-validate/zod";
import {z} from "zod";
const schema = toTypedSchema(
    z.object({
        email: z.string().nonempty("email cann't be empty").email(),
        password: z
            .string()
            .nonempty("password cann't be empty")
            .min(6, "password must be at least 8 characters")
            .refine((value: string) => value.match(/[a-z]/g), {
                message: "must include lowercase characters",
            })
            .refine((value: string) => value.match(/[A-Z]/g), {
                message: "must include uppercase characters",
            })
            .refine((value: string) => value.match(/[0-9]/g), {
                message: "must include at least one number",
            }),
    })
);
const {errors, defineField, handleSubmit} = useForm({
    validationSchema: schema,
});
const [email, emailAttr] = defineField("email");
const [password, passwordAttr] = defineField("password");
const isEmailExists = ref("");
const {signIn} = useAuth();
const onSubmit = handleSubmit(async (body) => {
    if (!errors.email && !errors.password) {
        try {
            let req = await $fetch("/api/newUser/**", {
                method: "POST",
                body,
            });
            const {email, password} = req;
            signIn("credentials", {email, password});
        } catch (error) {
            if (error) {
                isEmailExists.value = error.statusText;
            }
        }
    }
});
</script>
<template>
    <div class="flex justify-center">
        <Logo />
    </div>
    <h1
        class="text-text dark:text-text-dark text-center text-[1.7rem] font-[700]"
    >
        Create Your Account
    </h1>
    <h2
        class="text-lighterGray dark:text-lighterGray-dark text-sm text-center mt-[-10px]"
    >
        Sign up to start organizing your notes and boost your productivity.
    </h2>
    <form class="flex flex-col gap-y-5" @submit.prevent="onSubmit">
        <div aria-label="email Input">
            <label for="email" class="text-text dark:text-text-dark block mb-3">
                Email
            </label>
            <input
                v-model="email"
                v-bind="emailAttr"
                @input="() => (isEmailExists = '')"
                @focus="() => (isEmailExists = '')"
                autocomplete="off"
                type="email"
                id="email"
                class="block p-1 px-3 w-full text-text dark:text-text-dark rounded-md bg-barckground dark:bg-barckground-dark border border-1 border-grayBorder dark:border-grayBorder-dark"
            />
            <span
                aria-label="email errors"
                class="flex gap-x-1 items-center mt-2 text-sm text-lightRed-dark"
                v-if="errors.email"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        class="stroke-lightRed"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM12.006 15.693v-4.3M12 8.355v-.063"
                    />
                </svg>
                {{ errors.email }}</span
            >
            <span
                aria-label="email errors"
                class="flex gap-x-1 items-center mt-2 text-sm text-lightRed-dark"
                v-if="isEmailExists"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        class="stroke-lightRed"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM12.006 15.693v-4.3M12 8.355v-.063"
                    />
                </svg>
                {{ isEmailExists }}</span
            >
        </div>
        <div aria-label="password Input" class="relative mb-5">
            <label
                for="password"
                class="text-text dark:text-text-dark block mb-3"
            >
                Password
            </label>
            <input
                v-model="password"
                v-bind="passwordAttr"
                autocomplete="off"
                :type="showPassword ? 'text' : 'password'"
                id="password"
                class="block p-1 px-3 w-full text-text dark:text-text-dark rounded-md bg-barckground dark:bg-barckground-dark border border-1 border-grayBorder dark:border-grayBorder-dark"
            />
            <button
                aria-label="show or hide password"
                class="absolute right-4 top-[calc(50%_+_1.1rem)] -translate-y-2/4"
                @click="showPassword = !showPassword"
                role="button"
                type="button"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    v-if="showPassword"
                >
                    <path
                        class="fill-grayBorder dark:fill-grayBorder-dark"
                        fill-rule="evenodd"
                        d="M12.003 10.115c-1.332 0-2.412 1.036-2.412 2.315s1.08 2.316 2.412 2.316c1.332 0 2.412-1.037 2.412-2.316 0-1.28-1.08-2.315-2.412-2.315ZM8.09 12.43c0-2.075 1.752-3.755 3.912-3.755s3.912 1.68 3.912 3.755c0 2.074-1.752 3.756-3.912 3.756S8.09 14.504 8.09 12.43Z"
                        clip-rule="evenodd"
                    />
                    <path
                        class="fill-grayBorder dark:fill-grayBorder-dark"
                        fill-rule="evenodd"
                        d="M4.976 7.195A11.248 11.248 0 0 1 12.002 4.7a11.25 11.25 0 0 1 7.026 2.493c1.775 1.44 2.976 3.377 2.976 5.237 0 1.86-1.2 3.797-2.976 5.237a11.249 11.249 0 0 1-7.026 2.493 11.248 11.248 0 0 1-7.026-2.494C3.2 16.226 2 14.289 2 12.43s1.2-3.795 2.976-5.235Zm.968 1.1C4.37 9.571 3.5 11.14 3.5 12.43c0 1.29.87 2.859 2.444 4.136a9.71 9.71 0 0 0 6.058 2.154 9.712 9.712 0 0 0 6.058-2.153c1.574-1.277 2.444-2.846 2.444-4.137 0-1.291-.87-2.86-2.444-4.137a9.712 9.712 0 0 0-6.058-2.153 9.71 9.71 0 0 0-6.058 2.154Z"
                        clip-rule="evenodd"
                    /></svg
                ><svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        class="stroke-grayBorder dark:stroke-grayBorder-dark"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M6.42 17.73c-2.23-1.46-3.67-3.66-3.67-5.59 0-3.28 4.14-7.3 9.25-7.3 2.09 0 4.03.67 5.59 1.71M19.85 8.61c.891 1.13 1.41 2.38 1.41 3.53 0 3.28-4.15 7.3-9.26 7.3-.91 0-1.799-.13-2.63-.36"
                    />
                    <path
                        class="stroke-grayBorder dark:stroke-grayBorder-dark"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M9.766 14.367a3.12 3.12 0 0 1-.925-2.23 3.159 3.159 0 0 1 5.394-2.24M15.11 12.7a3.158 3.158 0 0 1-2.538 2.541M19.892 4.25 4.118 20.024"
                    />
                </svg>
            </button>
            <span
                aria-label="password errors"
                class="flex gap-x-1 items-center absolute -bottom-7 text-sm text-lightRed-dark"
                v-if="errors.password"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        class="stroke-lightRed"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM12.006 15.693v-4.3M12 8.355v-.063"
                    />
                </svg>
                {{ errors.password }}</span
            >
        </div>

        <SubmitButton text="sign up" />
        <div
            class="flex justify-center gap-x-4 text-lighterGray dark:text-lighterGray-dark text-sm"
        >
            <button class="underline" @click="$emit('changeAuth')">
                Already Have An Account ? login
            </button>
        </div>
    </form>
</template>
