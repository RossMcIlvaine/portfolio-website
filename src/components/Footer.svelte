<script>
	import SocialButton from "./SocialButton.svelte";
</script>

<main class="flex flex-col items-center w-2/3 md:w-1/3 space-y-3">
    <h3 class="font-Biryani text-2xl text-white mb-2">Get in touch with me!</h3>
    <div class="flex justify-around w-full">
        <SocialButton url="https://github.com/RossMcIlvaine" color="github"/>
        <SocialButton url="https://www.linkedin.com/in/ross-mcilvaine-95355a16b/" color="linkedin"/> 
        <SocialButton url="https://www.instagram.com/rossmcilvaine/" color="instagram"/>
    </div>
    <h3 class="text-white mt-2 text-center">@ 2024 Ross McIlvaine IV.</h3>
    <h3 class="text-white mt-2 text-center">All Rights Reserved.</h3>
</main>