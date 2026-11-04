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

    const personalProjects = [
        {
            title: "Rewind",
            subtitle: "Shared Event Album",
            details: [
                "Guests scan a QR code, enter their name, and upload photos and videos from an event",
                "Replays the event on a timeline with one lane per guest, each clip placed at the moment it was filmed",
                "Exports the whole timeline to Final Cut Pro, DaVinci Resolve, or Premiere Pro"
            ],
            tech: "Cloudflare Workers · D1 · R2",
            link: "https://rewind.rossmcilvaine.com"
        },
        {
            title: "Jargon",
            subtitle: "Group Word Game",
            details: [
                "A word game where your friend group's nicknames, slang, and inside jokes count as valid words",
                "Each group builds a shared dictionary; play a new word mid-game and the others vote it in",
                "Database designed around row-level security so hidden game state stays private"
            ],
            tech: "React · Supabase (Postgres, RLS) · Cloudflare",
            link: "https://jargon.rossmcilvaine.com"
        },
        {
            title: "Rankd",
            subtitle: "Head-to-Head Game Rankings",
            details: [
                "Rank video games with quick \"which did you like more?\" comparisons instead of star ratings",
                "Binary search places each new game in about log₂(n) comparisons and derives a score from its rank",
                "Custom lists keep their own independent order, so a game can be #1 in one and #7 in another"
            ],
            tech: "JavaScript · Cloudflare Workers",
            link: "https://rankd.rossmcilvaine.com"
        }
    ];

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

<div class="w-11/12">
    <h3 class="font-Biryani font-extrabold text-2xl text-white mb-3">Currently building</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        {#each personalProjects as project}
            <ProjectCard title={project.title} subtitle={project.subtitle} details={project.details}
                tech={project.tech} link={project.link} linkLabel="Try it live"/>
        {/each}
    </div>

    <h3 class="font-Biryani font-extrabold text-2xl text-white mt-10 mb-3">Earlier projects</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        {#each projects as project}
            <ProjectCard title={project.title} subtitle={project.subtitle} details={project.details} link={project.link}/>
        {/each}
    </div>
</div>