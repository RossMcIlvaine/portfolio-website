<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let details: string[];
    export let link: string | undefined = undefined;
    export let linkLabel: string = "View on GitHub";
    export let tech: string | undefined = undefined;

    $: isGithub = link?.includes("github.com") ?? false;
</script>

<div class="flex flex-col bg-slate-600 rounded-md w-full p-3 border-l-mainHighlight border-t-mainHighlight border-4">
    <h2 class="text-white text-2xl">{title}</h2>
    <h3 class="text-white"><i>{subtitle}</i></h3>
    {#each details as detail}
        <li class="text-white list-none">
            {detail}
        </li>
    {/each}
    {#if tech}
        <p class="text-slate-300 text-sm mt-2">{tech}</p>
    {/if}
    {#if link}
        <a href={link} target="_blank" rel="noopener noreferrer"
            class="self-start mt-auto pt-3 text-mainHighlight font-bold hover:underline">
            {linkLabel}
            {#if isGithub}
                <i class="fa-brands fa-github"></i>
            {:else}
                <i class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
            {/if}
        </a>
    {/if}
</div>
