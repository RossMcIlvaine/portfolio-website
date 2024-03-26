<script>
    export let url = "";
    export let color = "";
</script>

<main>
    <!-- svelte-ignore a11y-missing-content -->
    <a target="_blank" href={url} 
            class="fab fa-{color} flex text-{color} text-4xl md:text-socialIcon bg-white 
                justify-center items-center w-20 md:w-16 h-20 md:h-16 
                border-4 border-{color} border-solid rounded-full
                transition-colors hover:bg-{color} hover:text-white duration-0.5" ></a>
</main>