<script>
    export let title = "";
    export let subtitle = "";
</script>

<div class="relative w-11/12 justify-start">
    <h1 class="font-Biryani font-extrabold text-5xl md:text-title text-mainHighlight opacity-70 z-10">{title}</h1>
    <h2 class="font-Biryani font-extrabold text-3xl text-white z-20 absolute top-7 right-0 md:top-16 md:left-[35%] md:right-auto">{subtitle}</h2>
    <a id={title} class="absolute -top-32"/>
</div>