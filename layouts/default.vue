<script lang="ts" setup>
import {useActiveLink} from "~/composables/activeLinks";
import {changeActiveRoute} from "~/helpers/changeActiveLink";
import changeCurrentRoute from "~/helpers/changeCurrentRoute";
import {changeMobileRoute} from "~/helpers/changeMobileRoute";
const router = useRouter();
const activeLink = useActiveLink();
const notes = useNotes();
const filterdFromDublicates = computed(() => {
    const filterdArr: string[] = [];
    notes.value.map((el) => {
        if (!filterdArr.includes(el.tag)) {
            filterdArr.push(el.tag);
        }
    });
    return filterdArr;
});

const tagedNotes = useTagedNotes();
</script>

<template>
    <div class="md:flex relative">
        <aside
            class="bg-barckground border-t border-border dark:border-border-dark md:border-t-0 fixed md:static dark:bg-barckground-dark p-5 pt-6 w-full md:w-[250px] md:min-h-screen bottom-0 z-10"
        >
            <div class="hidden md:block">
                <Logo />
            </div>
            <div
                class="hidden text-text mt-10 text-sm capitalize dark:text-text-dark md:flex flex-col gap-y-4"
            >
                <MainLink
                    text="all notes"
                    :active-link-num="1"
                    @click="
                        () => {
                            changeActiveRoute(1);
                            changeCurrentRoute('All Notes');
                            router.replace('/all-notes');
                            changeMobileRoute('');
                        }
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            class="group-hover:fill-skyBlue"
                            :class="[
                                activeLink === 1
                                    ? ' fill-skyBlue'
                                    : 'fill-text dark:fill-text-dark',
                            ]"
                            fill-rule="evenodd"
                            d="M4.496 8.025a.75.75 0 0 1 .75.75v8.675a2.314 2.314 0 0 0 2.314 2.314h8.88a2.314 2.314 0 0 0 2.313-2.314V8.775a.75.75 0 0 1 1.5 0v8.675a3.814 3.814 0 0 1-3.814 3.814H7.56a3.814 3.814 0 0 1-3.814-3.814V8.775a.75.75 0 0 1 .75-.75Z"
                            clip-rule="evenodd"
                        />
                        <path
                            class="group-hover:fill-skyBlue"
                            :class="[
                                activeLink === 1
                                    ? ' fill-skyBlue'
                                    : 'fill-text dark:fill-text-dark',
                            ]"
                            fill-rule="evenodd"
                            d="M10.06 3.41a3.127 3.127 0 0 1 3.88 0l7.525 5.958a.75.75 0 1 1-.93 1.176l-7.526-5.957a1.628 1.628 0 0 0-2.018 0l-7.525 5.957a.75.75 0 1 1-.931-1.176L10.06 3.41Z"
                            clip-rule="evenodd"
                        />
                        <path
                            class="group-hover:fill-skyBlue"
                            :class="[
                                activeLink === 1
                                    ? ' fill-skyBlue'
                                    : 'fill-text dark:fill-text-dark',
                            ]"
                            fill-rule="evenodd"
                            d="M17.668 4.193a.75.75 0 0 1 .75.75v2.354a.75.75 0 0 1-1.5 0V4.943a.75.75 0 0 1 .75-.75ZM11.974 13.688h.055c.377 0 .702 0 .97.02.283.022.565.071.838.203a2.25 2.25 0 0 1 1.05 1.05c.131.272.18.554.202.837.02.268.02.593.02.97v3.746a.75.75 0 0 1-1.5 0v-3.718c0-.412 0-.678-.015-.881-.016-.195-.041-.268-.059-.303a.75.75 0 0 0-.35-.35c-.035-.017-.108-.043-.302-.058a12.747 12.747 0 0 0-.881-.017c-.412 0-.679.001-.881.017-.195.015-.268.04-.303.058a.75.75 0 0 0-.35.35c-.017.035-.043.108-.058.303-.016.203-.016.469-.016.88v3.72a.75.75 0 0 1-1.5 0v-3.747c0-.377 0-.702.02-.97.022-.283.071-.565.203-.838a2.25 2.25 0 0 1 1.05-1.05c.273-.131.554-.18.837-.202.268-.02.593-.02.97-.02Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </MainLink>

                <MainLink
                    :active-link-num="2"
                    text="archived notes"
                    @click="
                        () => {
                            changeActiveRoute(2);
                            changeCurrentRoute('Archived Notes');
                            router.replace('/archived-notes');
                            changeMobileRoute('');
                        }
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            class="group-hover:stroke-skyBlue"
                            :class="[
                                activeLink === 2
                                    ? ' stroke-skyBlue'
                                    : 'stroke-text dark:stroke-text-dark',
                            ]"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
                        />
                        <path
                            class="group-hover:stroke-skyBlue"
                            :class="[
                                activeLink === 2
                                    ? ' stroke-skyBlue'
                                    : 'stroke-text dark:stroke-text-dark',
                            ]"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
                        />
                    </svg>
                </MainLink>
            </div>
            <Divider class="hidden md:block" :with-or-word="false" />
            <ul role="list" class="mt-2 hidden md:block">
                <h3 class="capitalize mb-3 text-darkGray-dark text-[0.8rem]">
                    tags
                </h3>
                <li
                    v-for="(tag, index) in filterdFromDublicates"
                    class="mb-3 text-text text-sm dark:text-text-dark"
                    :key="index"
                >
                    <MainLink
                        :text="tag"
                        :active-link-num="index + 20"
                        @click="
                            () => {
                                changeActiveRoute(20 + index);
                                changeCurrentRoute(`Taged Notes: ${tag}`);
                                router.replace(`/tags`);
                                tagedNotes = tag;
                                changeMobileRoute('');
                            }
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            color="#335CFF"
                        >
                            <path
                                class="group-hover:stroke-skyBlue"
                                :class="[
                                    activeLink === 20 + index
                                        ? ' stroke-skyBlue'
                                        : 'stroke-text dark:stroke-text-dark',
                                ]"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.8"
                                d="M3.016 5.966c.003-1.411 1.07-2.677 2.456-2.916.284-.05 3.616-.042 4.995-.041 1.364 0 2.527.491 3.49 1.452 2.045 2.042 4.088 4.085 6.128 6.13 1.208 1.21 1.224 3.066.022 4.28a805.496 805.496 0 0 1-5.229 5.228c-1.212 1.201-3.069 1.186-4.279-.022-2.064-2.058-4.127-4.115-6.182-6.182-.795-.8-1.264-1.766-1.368-2.895-.084-.903-.035-4.26-.033-5.034Z"
                                clip-rule="evenodd"
                            ></path>
                            <path
                                class="group-hover:stroke-skyBlue"
                                :class="[
                                    activeLink === 20 + index
                                        ? ' stroke-skyBlue'
                                        : 'stroke-text dark:stroke-text-dark',
                                ]"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.8"
                                d="M9.907 8.315a1.607 1.607 0 0 1-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 0 1 1.633-1.607c.864.003 1.575.736 1.571 1.62Z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </MainLink>
                </li>
            </ul>
            <MobileNav />
        </aside>
        <main
            class="min-h-screen border-l-2 border-border dark:border-border-dark bg-barckground flex-1 dark:bg-barckground-dark"
        >
            <Header />
            <slot />
        </main>
    </div>
</template>
