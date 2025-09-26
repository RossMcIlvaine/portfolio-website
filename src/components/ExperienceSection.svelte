<script>
    import Experience from "./Experience.svelte";

    let tattleDetais = [
        "Collaborated with the AI Development team to design and create classification and matching APIs for customer data",
        "Managed prompt engineering efforts during development to minimize token use and maximize the precision of the model",
        "Built unit test functions in C# to quickly compare the performance of multiple models against many datasets"
    ];
    let carsonDetails = [
        "Acted as lead developer for a new product comparison tool using React and C#",
        "Coordinated multiple initiatives to overhaul visuals and improve performance metrics across the site",
        "Ensured internationalization of all new site development using i18nexus"
    ];
    let epicDetails = [
        "Spearheaded new functionality to create foreign key joins between external datasets and Epic’s data model", 
        "Lead UI and API Developer for a data integration application serving over 5,000 users",
        "Conducted SQL performance and code review for development projects across the company",
        "Design features for applications serving a large user base, ensuring optimal performance and user experience"
    ];
</script>

<div class="flex flex-col items-center space-y-5 w-11/12">
    <Experience company="Tattle" title="AI Development Intern" startDate="January 2025" endDate="July 2025" details={tattleDetais}>
        <!-- <img class="w-12 h-12 rounded-full" slot="photo" src="/images/tattle_logo.png" alt="Tattle Logo"/> -->
    </Experience> 
    <Experience company="Carson Optical" title="Website Developer" startDate="January 2025" endDate="July 2025" details={carsonDetails}>
        <!-- <img class="w-12 h-12 rounded-full" slot="photo" src="/images/tattle_logo.png" alt="Tattle Logo"/> -->
    </Experience>
    <Experience company="Epic Systems" title="Full Stack Developer" startDate="August 2022" endDate="August 2024" details={epicDetails}>
        <!-- <img class="w-24 h-12 bg-white" slot="photo" src="/images/epic.png" alt="Epic Systems Logo"/> -->
    </Experience>
</div>