<script>
    let flippedClass = "";

    let nav = [
            "HOME",
            "EXPERIENCE",
            "PROJECTS",
            "EDUCATION"
        ]
    
    let showDropdown = false;

    function toggleDropdown(){
        showDropdown = !showDropdown;
    }

    $: flippedClass = showDropdown ? "rotate-180" : "";
 
</script>

<div class="bg-white shadow-navigation z-50 w-full px-3 sticky top-0 opacity-80 hover:opacity-100 transition-opacity duration-0.5">
    <ul class="flex list-none top-5 w-full items-center md:justify-around">
        <button on:click={toggleDropdown} class="md:hidden">
            <i class="fa-solid fa-square-caret-down text-mainHighlight text-3xl  transition-transform {flippedClass} duration-0.5 p-2"></i>
        </button>
        <img src="/Nav-Logo.png" class="w-24" alt="RAM Logo"/>
        {#each nav as navText}
            <li>
                <a href="#{navText}"class="text-black text-2xl font-Biryani font-bold hidden md:block">{navText}</a>
            </li>
        {/each}
    </ul>
    <ul class="bg-white flex flex-col md:hidden rounded-md transition-all duration-0.5 
            absolute top-[4.5rem] p-2 border-solid border-mainHighlight border-2" class:hidden={!showDropdown}>
        {#each nav as navText}
            <li>
                <a href="#{navText}"class="text-black text-xl font-Biryani font-bold p-2">{navText}</a>
            </li>
        {/each}
    </ul>
</div>