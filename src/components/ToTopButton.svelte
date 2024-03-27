<script>
    export let showAfterScrollPx = 200;
    let hideToTop = true;
    let hiddenClasses = "";

    function goTop() {
        document.body.scrollIntoView();
    }

    // Get correct document element for browser
    function scrollContainer() {
        return document.documentElement || document.body;
    }

    function handleOnScroll() {
        if (!scrollContainer()) {
            return;
        }

        if (scrollContainer().scrollTop > showAfterScrollPx) {
            hideToTop = false;
        } else {
            hideToTop = true;
        }
    }

    $: hiddenClasses = hideToTop ? "opacity-0" : "opacity-100";
</script>

<svelte:window on:scroll={handleOnScroll} />

<button on:click={goTop} 
    class="bg-white fixed w-8 bottom-5 right-5 rounded-full transition-opacity duration-0.5 {hiddenClasses}">
        <i class="fa-solid fa-arrow-up text-2xl"></i>
</button>