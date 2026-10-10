<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let details: string[];
    export let link: string | undefined = undefined;
</script>

<div class="bg-slate-600 rounded-md w-full p-3 border-l-mainHighlight border-t-mainHighlight border-4">
    <h2 class="text-white text-2xl">{title}</h2>
    <h3 class="text-white"><i>{subtitle}</i></h3>
    {#each details as detail}
        <li class="text-white list-none">
            {detail}
        </li>
    {/each}
    {#if link}
        <a href={link} target="_blank" rel="noopener noreferrer" class="inline-block mt-2 text-mainHighlight font-bold hover:underline">
            View on GitHub <i class="fa-brands fa-github"></i>
        </a>
    {/if}
</div>
