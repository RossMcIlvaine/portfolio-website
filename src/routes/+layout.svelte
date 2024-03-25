<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";

    
</script>

<main class="bg-black pt-10 pb-5 flex flex-col justify-center">
    <Header/>
    <slot />
    <Footer/>
</main>

<style>

</style>