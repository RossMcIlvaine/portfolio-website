<script lang="ts">
	import ProjectCard from "./ProjectCard.svelte";

    class project
    {
        title: string;
        subtitle: string;
        details: string[];

        constructor(title: string, sub: string, details: string[]){
            this.title = title;
            this.subtitle = sub;
            this.details = details;
        }
    }

    const projects = new Array<project>;
    projects.push(
        new project(
            "This Website",
            "Personal Portfolio",
            [
                "Using Svelte framework with TypeScript and Tailwind CSS to build web app from scratch",
                "Design and develop beautiful, reactive, and modular components",
                "Deployed to web using Cloudflare and GitHub pages"
            ]
        )
    );
    projects.push(
        new project(
            "Campus Wayzz",
            "Databases Application Project",
            [
                "Worked on team to build a campus discovery application using MongoDB, React, Node.js, and Google APIs",
                "Designed and built frontend interfaces for campus discovery app using JavaScript and React",
                "Used MongoDB to store and authenticate user and location data"
            ]
        )
    );
    projects.push(
        new project(
            "Tweet Classification",
            "Machine Learning Project",
            [
                "Used decision tree algorithms to identify an individual's political affiliation based on tweet history",
                "Gathered and cleaned relevant datasets for more accurate modeling",
                "Created graphic visualizations of results for presentation"
            ]
        )
    );
</script>

<div class="flex flex-col w-11/12 md:flex-row md:grid-cols-3 justify-between space-y-5 md:space-y-0">
    {#each projects as project}
        <ProjectCard title={project.title} subtitle={project.subtitle} details={project.details}/>
    {/each}
</div>