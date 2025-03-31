<template>
    <div class="flex">
        <aside
            class="bg-barckground dark:bg-barckground-dark p-5 pt-6 w-[240px] min-h-screen border-r-2 border-border dark:border-border-dark"
        >
            <div>
                <Logo />
            </div>
            <div
                class="text-text mt-10 text-sm capitalize dark:text-text-dark flex flex-col gap-y-4"
            >
                <NuxtLink class="flex items-center gap-x-2" to="all-notes">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            class="fill-text dark:fill-text-dark"
                            fill-rule="evenodd"
                            d="M4.496 8.025a.75.75 0 0 1 .75.75v8.675a2.314 2.314 0 0 0 2.314 2.314h8.88a2.314 2.314 0 0 0 2.313-2.314V8.775a.75.75 0 0 1 1.5 0v8.675a3.814 3.814 0 0 1-3.814 3.814H7.56a3.814 3.814 0 0 1-3.814-3.814V8.775a.75.75 0 0 1 .75-.75Z"
                            clip-rule="evenodd"
                        />
                        <path
                            class="fill-text dark:fill-text-dark"
                            fill-rule="evenodd"
                            d="M10.06 3.41a3.127 3.127 0 0 1 3.88 0l7.525 5.958a.75.75 0 1 1-.93 1.176l-7.526-5.957a1.628 1.628 0 0 0-2.018 0l-7.525 5.957a.75.75 0 1 1-.931-1.176L10.06 3.41Z"
                            clip-rule="evenodd"
                        />
                        <path
                            class="fill-text dark:fill-text-dark"
                            fill-rule="evenodd"
                            d="M17.668 4.193a.75.75 0 0 1 .75.75v2.354a.75.75 0 0 1-1.5 0V4.943a.75.75 0 0 1 .75-.75ZM11.974 13.688h.055c.377 0 .702 0 .97.02.283.022.565.071.838.203a2.25 2.25 0 0 1 1.05 1.05c.131.272.18.554.202.837.02.268.02.593.02.97v3.746a.75.75 0 0 1-1.5 0v-3.718c0-.412 0-.678-.015-.881-.016-.195-.041-.268-.059-.303a.75.75 0 0 0-.35-.35c-.035-.017-.108-.043-.302-.058a12.747 12.747 0 0 0-.881-.017c-.412 0-.679.001-.881.017-.195.015-.268.04-.303.058a.75.75 0 0 0-.35.35c-.017.035-.043.108-.058.303-.016.203-.016.469-.016.88v3.72a.75.75 0 0 1-1.5 0v-3.747c0-.377 0-.702.02-.97.022-.283.071-.565.203-.838a2.25 2.25 0 0 1 1.05-1.05c.273-.131.554-.18.837-.202.268-.02.593-.02.97-.02Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    All Notes
                </NuxtLink>
                <NuxtLink class="flex items-center gap-x-2" to="archived-notes">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            class="stroke-text dark:stroke-text-dark"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
                        />
                        <path
                            class="stroke-text dark:stroke-text-dark"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
                        />
                    </svg>
                    archived Notes
                </NuxtLink>
            </div>
            <Divider :with-or-word="false" />
        </aside>
        <main
            class="min-h-screen bg-barckground flex-1 dark:bg-barckground-dark"
        >
            <header></header>
            <slot />
        </main>
    </div>
</template>
<style scoped>
.active-route {
    svg {
        * {
            @apply stroke-skyBlue;
        }
    }
}
</style>
