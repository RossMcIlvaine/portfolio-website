<script>
    let school1 = "University of Notre Dame";
    let degree1 = "Bachelor of Science in Computer Engineering";
    let startDate1 = "August 2018";
    let endDate1 = "May 2022";
    let achievements1 = [
        "GPA: 3.8",
        "Dean's List (4)",
        "Graduated Cum Laude"
    ]

    let school2 = "University of Illinois Urbana-Champaign";
    let degree2 = "Master of Computer Science";
    let startDate2 = "August 2025";
    let endDate2 = "Current";

</script>

<div class="flex flex-col items-center space-y-5 w-11/12">
    <div class="flex justify-between bg-slate-600 rounded-md p-3 w-full border-l-mainHighlight border-t-mainHighlight border-4">
        <div class="flex flex-col">
            <h2 class="text-white text-2xl">{school1}</h2>
            <h3 class="text-white"><i>{degree1}</i> | <i>{startDate1} - {endDate1}</i></h3>
            {#each achievements1 as achievement}
                <li class="text-white list-none">
                    {achievement}
                </li>
            {/each}
        </div>
        <slot name="photo"/>
    </div>
    <div class="flex justify-between bg-slate-600 rounded-md p-3 w-full border-l-mainHighlight border-t-mainHighlight border-4">
        <div class="flex flex-col">
            <h2 class="text-white text-2xl">{school2}</h2>
            <h3 class="text-white"><i>{degree2}</i> | <i>{startDate2} - {endDate2}</i></h3>
        </div>
        <slot name="photo"/>
    </div>
</div>