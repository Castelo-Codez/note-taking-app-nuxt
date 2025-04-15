<script setup lang="ts">
import {changeActiveRoute} from "~/helpers/changeActiveLink";
const activeLink = useActiveLink();
const {signOut} = useAuth();
const title = inject("title");
useHead({
    title: `Settings | ${title}`,
});
const router = useRouter();
const currentRoute = useCurrentRoute();
</script>
<template>
    <MainSection>
        <nav
            class="md:border-b py-6 px-3 md:dark:border-border-dark xl:border-r xl:border-border xl:dark:border-border-dark min-h-full"
        >
            <h1
                class="text-text text-[1.1rem] pl-2 mb-5 font-[700] capitalize dark:text-text-dark md:hidden"
            >
                {{ currentRoute }}
            </h1>
            <ul class="hidden md:flex flex-col gap-y-5">
                <li class="text-text dark:text-text-dark">
                    <MainLink
                        :active-link-num="6"
                        text="Color Theme"
                        @click="
                            () => {
                                changeActiveRoute(6);
                                router.replace('/settings/color-theme');
                            }
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            :class="[
                                activeLink === 6
                                    ? ' stroke-skyBlue'
                                    : 'stroke-text dark:stroke-text-dark',
                            ]"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-sun"
                        >
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M12 2v2"></path>
                            <path d="M12 20v2"></path>
                            <path d="m4.93 4.93 1.41 1.41"></path>
                            <path d="m17.66 17.66 1.41 1.41"></path>
                            <path d="M2 12h2"></path>
                            <path d="M20 12h2"></path>
                            <path d="m6.34 17.66-1.41 1.41"></path>
                            <path d="m19.07 4.93-1.41 1.41"></path>
                        </svg>
                    </MainLink>
                </li>
                <li class="text-text dark:text-text-dark">
                    <MainLink
                        :active-link-num="7"
                        class="text-[0.88rem]"
                        text="Font Theme"
                        @click="
                            () => {
                                changeActiveRoute(7);
                                router.replace('/settings/font-theme');
                            }
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M17.4994 9.14844H12.1927C11.7327 9.14844 11.3594 9.52094 11.3594 9.98177V10.9234C11.3594 11.3843 11.7327 11.7568 12.1927 11.7568C12.6527 11.7568 13.026 11.3843 13.026 10.9234V10.8151H13.9877V14.4893H13.6627C13.2027 14.4893 12.8294 14.8618 12.8294 15.3226C12.8294 15.7834 13.2027 16.1559 13.6627 16.1559H16.0302C16.4902 16.1559 16.8635 15.7834 16.8635 15.3226C16.8635 14.8618 16.4902 14.4893 16.0302 14.4893H15.6544V10.8151H16.666V10.9234C16.666 11.3843 17.0394 11.7568 17.4994 11.7568C17.9594 11.7568 18.3327 11.3843 18.3327 10.9234V9.98177C18.3327 9.52094 17.9594 9.14844 17.4994 9.14844Z"
                                :class="[
                                    activeLink === 7
                                        ? ' fill-skyBlue'
                                        : 'fill-text dark:fill-text-dark',
                                ]"
                            ></path>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10.1543 14.49H8.57518V5.50749H12.2543V6.54915C12.2543 7.00915 12.6277 7.38249 13.0877 7.38249C13.5477 7.38249 13.921 7.00915 13.921 6.54915V4.67415C13.921 4.21332 13.5477 3.84082 13.0877 3.84082H2.49935C2.03935 3.84082 1.66602 4.21332 1.66602 4.67415V6.54915C1.66602 7.00915 2.03935 7.38249 2.49935 7.38249C2.95935 7.38249 3.33268 7.00915 3.33268 6.54915V5.50749H6.90852V14.49H5.43102C4.97102 14.49 4.59768 14.8625 4.59768 15.3233C4.59768 15.7842 4.97102 16.1567 5.43102 16.1567H10.1543C10.6143 16.1567 10.9877 15.7842 10.9877 15.3233C10.9877 14.8625 10.6143 14.49 10.1543 14.49Z"
                                :class="[
                                    activeLink === 7
                                        ? ' fill-skyBlue'
                                        : 'fill-text dark:fill-text-dark',
                                ]"
                            ></path>
                        </svg>
                    </MainLink>
                </li>
                <li class="text-text dark:text-text-dark">
                    <MainLink
                        :active-link-num="8"
                        class="text-[0.88rem]"
                        text="Change Password"
                        @click="
                            () => {
                                changeActiveRoute(8);
                                router.replace('/settings/change-password');
                            }
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            :class="[
                                activeLink === 8
                                    ? ' stroke-skyBlue'
                                    : 'stroke-text dark:stroke-text-dark',
                            ]"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-lock-keyhole"
                        >
                            <circle cx="12" cy="16" r="1"></circle>
                            <rect
                                x="3"
                                y="10"
                                width="18"
                                height="12"
                                rx="2"
                            ></rect>
                            <path d="M7 10V7a5 5 0 0 1 10 0v3"></path>
                        </svg>
                    </MainLink>
                </li>
                <Divider :with-or-word="false" />
                <li class="text-text dark:text-text-dark">
                    <MainLink
                        text="Log Out"
                        @click="
                            () => {
                                changeActiveRoute(0);
                                signOut();
                            }
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M17.5006 9.99875H7.45508M17.5006 9.99875L15.0577 7.55371M17.5006 9.99875L15.0577 12.4448"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M12.1296 6.88872V6.04237C12.1296 4.7427 11.1957 3.63316 9.92083 3.41799L5.58531 2.53739C3.97092 2.26493 2.5 3.5161 2.5 5.16177V14.8383C2.5 16.4839 3.97091 17.7351 5.5853 17.4626L9.92083 16.582C11.1957 16.3668 12.1296 15.2573 12.1296 13.9577V13.1122"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                    </MainLink>
                </li>
            </ul>
            <MobileSettingNav />
        </nav>
        <NuxtPage class="hidden md:block" />
    </MainSection>
</template>
