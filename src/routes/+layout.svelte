<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";

    let nav = [
        "About Me",
        "Experience",
        "Projects",
        "Education"
    ]
</script>

<main class="flex">
    <div class="bg-white md:w-nav md:flex-shrink-0 md:shadow-binder md:z-10 hidden md:block text-center">
        <ul class="list-none top-5 w-full sticky">
            {#each nav as navText}
                <li>
                    <a href="#{navText}"class="text-black">{navText}</a>
                </li>
            {/each}
        </ul>
    </div>
    <div class="bg-mainBackground pt-10 pb-5 flex flex-col space-y-10 items-center">
        <Header/>
        <slot />
        <Footer/>
    </div>
</main>

<style>

</style>