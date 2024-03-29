<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
	import ToTopButton from "../components/ToTopButton.svelte";
	import Navigation from "../components/Navigation.svelte";
	import Spine from "../components/Spine.svelte";
</script>

<main class="flex flex-col">
    <Navigation/>
    <div class="flex">
        <div class="bg-mainBackground pt-10 pb-5 flex flex-col space-y-10 items-center">
            <Header/>
            <slot />
            <Footer/>
            <ToTopButton/>
        </div>
    </div>
</main>

<svelte:head>
    <title>Ross McIlvaine</title>
    <meta name="description" content="Welcome! I'm Ross, a full stack software developer in Madison, WI."/>
    <link rel="canonical" href="rossmcilvaine.com"/>
</svelte:head>