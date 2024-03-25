<script lang="ts">
    export let company: string;
    export let title: string;
    export let startDate: string;
    export let endDate: string;
    export let details: string[];
</script>

<div class="flex justify-between bg-slate-600 w-5/6 rounded-md p-3">
    <div class="flex flex-col">
        <h2 class="text-white text-2xl">{company}</h2>
        <h3 class="text-white text-1xl">{title} | <i>{startDate} - {endDate}</i></h3>
        {#each details as detail}
        <li class="text-white">
            {detail}
        </li>
        {/each}
    </div>
    <slot name="photo"/>
</div>

