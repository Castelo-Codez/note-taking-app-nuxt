<template>
    <div class="flex">
        <aside
            class="bg-barckground dark:bg-barckground-dark p-6 pt-10 w-[280px] min-h-screen border-r-2 border-border dark:border-border-dark"
        >
            <div class="header">
                <Logo />
            </div>
        </aside>
        <main
            class="min-h-screen bg-barckground flex-1 dark:bg-barckground-dark"
        >
            <header></header>
            <slot />
        </main>
    </div>
</template>
