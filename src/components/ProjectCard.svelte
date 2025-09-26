<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let details: string[];
</script>

<div class="bg-slate-600 rounded-md md:w-30% p-3 border-l-mainHighlight border-t-mainHighlight border-4">
    <h2 class="text-white text-2xl">{title}</h2>
    <h3 class="text-white"><i>{subtitle}</i></h3>
    {#each details as detail}
        <li class="text-white list-none">
            {detail}
        </li>
    {/each}
</div>