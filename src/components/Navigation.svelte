<script>
    let nav = [
            "HOME",
            "EXPERIENCE",
            "PROJECTS",
            "EDUCATION"
        ]
</script>

<div class="bg-white shadow-navigation z-50 w-full px-3 sticky top-0 opacity-80 hover:opacity-100 transition-opacity duration-0.5">
    <ul class="flex list-none top-5 w-full items-center justify-around">
        <img src="/Nav-Logo.png" class="w-24" alt="RAM Logo"/>
        {#each nav as navText}
            <li>
                <a href="#{navText}"class="text-black text-2xl font-Biryani font-bold hidden md:block">{navText}</a>
            </li>
        {/each}
    </ul>
</div>