<script>
    let school = "University of Notre Dame";
    let degree = "Bachelor of Science in Computer Engineering";
    let startDate = "August 2018";
    let endDate = "May 2022";
    let achievements = [
        "GPA: 3.8",
        "Dean's List (4)",
        "Graduated Cum Laude"
    ]

</script>

<div class="flex flex-col items-center space-y-5 w-11/12">
    <div class="flex justify-between bg-slate-600 rounded-md p-3 w-full">
        <div class="flex flex-col">
            <h2 class="text-white text-2xl">{school}</h2>
            <h3 class="text-white text-1xl">{degree} | <i>{startDate} - {endDate}</i></h3>
            {#each achievements as achievement}
                <li class="text-white">
                    {achievement}
                </li>
            {/each}
        </div>
        <slot name="photo"/>
    </div>
</div>