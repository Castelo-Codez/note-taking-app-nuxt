<script setup lang="ts">
import useMobileCurrentPage from "~/composables/currentPage";
import {changeActiveRoute} from "~/helpers/changeActiveLink";
import changeCurrentRoute from "~/helpers/changeCurrentRoute";
import {changeMobileRoute} from "~/helpers/changeMobileRoute";
const notes = useNotes();
const title = inject("title");
useHead({
    title: `Taged | ${title}`,
});
const router = useRouter();
const activeLink = useActiveLink();
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
watch(activeLink, (newVal) => {
    if (newVal < 20) {
        tagedNotes.value = ``;
    }
});
</script>
<template>
    <NuxtLayout
        :name="'desktop-section-layout'"
        class="hidden md:grid"
        :notes="notes.filter((el: Note) => el.tag == tagedNotes)"
    >
        <NuxtPage class="hidden md:grid" />
    </NuxtLayout>
    <NuxtLayout
        :name="'mobile-section-layout'"
        class="md:hidden"
        :notes="notes.filter((el: Note) => el.tag == tagedNotes)"
    >
        <MobileCurrentRouteHeading
            :text="`Tags`"
            class="text-[1rem]"
            v-if="tagedNotes === ''"
        />
        <GoBackBtn
            v-if="tagedNotes !== ''"
            @click="
                () => {
                    tagedNotes = '';
                }
            "
        />
        <ul role="list" class="mt-2 px-2" v-if="tagedNotes === ''">
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
                            changeMobileRoute(``);
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
    </NuxtLayout>
</template>
