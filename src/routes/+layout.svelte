<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
	import ToTopButton from "../components/ToTopButton.svelte";
	import Navigation from "../components/Navigation.svelte";
</script>

<main class="flex">
    <Navigation/>
    <div class="bg-mainBackground pt-10 pb-5 flex flex-col space-y-10 items-center">
        <Header/>
        <slot />
        <Footer/>
        <ToTopButton/>
    </div>
</main>

<style>

</style>