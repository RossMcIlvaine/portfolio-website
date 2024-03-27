<script>
    let nav = [
            "About Me",
            "Experience",
            "Projects",
            "Education"
        ]
</script>

<div class="bg-white md:w-nav md:flex-shrink-0 md:shadow-binder md:z-10 hidden md:block text-center">
    <ul class="list-none top-5 w-full sticky">
        <img src="/Nav-Logo.png" alt="RAM Logo"/>
        {#each nav as navText}
            <li>
                <a href="#{navText}"class="text-black">{navText}</a>
            </li>
        {/each}
    </ul>
</div>