<script lang="ts">
	import ProjectCard from "./ProjectCard.svelte";

    class project
    {
        title: string;
        subtitle: string;
        details: string[];
        link?: string;

        constructor(title: string, sub: string, details: string[], link?: string){
            this.title = title;
            this.subtitle = sub;
            this.details = details;
            this.link = link;
        }
    }

    const projects = new Array<project>;
    projects.push(
        new project(
            "Drug Interaction Database",
            "Capstone Project",
            [
                "Researched clinical drug-interaction challenges and gathered data sources to define the problem space",
                "Designed a Neo4j graph schema and authored Cypher queries to model complex drug relationships",
                "Led UI design so non-technical users can explore potential adverse drug reactions"
            ],
            "https://github.com/RossMcIlvaine/DDI-Cypher-Data-Model"
        )
    );
    projects.push(
        new project(
            "This Website",
            "Personal Portfolio",
            [
                "Using Svelte framework with TypeScript and Tailwind CSS to build web app from scratch",
                "Designed and developed clean, reactive, and modular components",
                "Deployed to web using Cloudflare Pages"
            ]
        )
    );
    projects.push(
        new project(
            "Campus Wayzz",
            "Databases Application Project",
            [
                "Worked on team to build a campus discovery mobile application using MongoDB, React, Node.js, and Google APIs",
                "Designed systems to promote user interaction, engagement, and collaboration",
                "Built frontend UI for new user registration and secure login"
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

<div class="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12">
    {#each projects as project}
        <ProjectCard title={project.title} subtitle={project.subtitle} details={project.details} link={project.link}/>
    {/each}
</div>