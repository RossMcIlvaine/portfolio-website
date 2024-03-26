<script>
    import Experience from "./Experience.svelte";

    let epicDetails = [
        "Project Lead for new functionality to create bridges between external datasets and Epic’s data analytics platforms", 
        "Lead Developer and Code Reviewer for newly released data ingestion application",
        "Conduct SQL performance review for development across the company",
        "Design and develop features for applications serving a large user base, ensuring optimal performance and user experience"

    ];
    let tattleDetais = [
        "Launched marketing website redesign for desktop and mobile using HTML, CSS, and Javascript inside a Svelte application",
        "Created and managed backend for form submission using AWS DynamoDB, Lambda, and API Gateway",
        "Communicated closely with UI/UX designer and other engineers to build site to design specifications", 
        "Worked alongside engineering team in Agile development environment",
        "Directed multiples website advancement showcases to wider organization"

    ]
</script>

<div id="Experience" class="flex flex-col items-center space-y-5 w-11/12">
    <Experience company="Epic Systems" title="Full Stack Developer" startDate="August 2022" endDate="Present" details={epicDetails}>
        <!-- <img class="w-24 h-12 bg-white" slot="photo" src="/images/epic.png" alt="Epic Systems Logo"/> -->
    </Experience>
    <Experience company="Tattle" title="Engineering Intern" startDate="May 2021" endDate="August 2021" details={tattleDetais}>
        <!-- <img class="w-12 h-12 rounded-full" slot="photo" src="/images/tattle_logo.png" alt="Tattle Logo"/> -->
    </Experience> 
</div>