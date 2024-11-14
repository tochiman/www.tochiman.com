<script lang="ts">
    import { 
        Button,
        GradientButton,
        Card,
        Img,
        P,
    } from 'flowbite-svelte';
    import { 
        ArrowRightOutline, 
    } from 'flowbite-svelte-icons';
    export let filter;
</script>
{#if filter === "sns" || filter === "all"}
<Card class="w-full">
    <Img src="discord.svg" class="w-8 h-8 mb-2" />
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Discord</h5>
    <P class="mb-2 font-normal text-gray-500 dark:text-gray-400">tochiman.com</P>
    <Button size="md" outline class="w-fit" href="https://discord.com/channels/@me" style="color:white; background-color:#5865F2;">
        Friend <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
    </Button>
</Card>
{/if}
{#if filter === "tech" || filter === "all"}
<Card class="w-full">
    <Img src="github-mark.svg" class="w-8 h-8 mb-2" />
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Github</h5>
    <P class="mb-2 font-normal text-gray-500 dark:text-gray-400">tochiman</P>
    <Button size="md" class="w-fit" href="https://github.com/tochiman/" color="alternative">
        Follow <ArrowRightOutline class="w-6 h-6 ms-2 dark:text-white" />
    </Button>
</Card>
{/if}
{#if filter === "sns" || filter === "all"}
<Card class="w-full">
    <Img src="x-black.svg" class="w-8 h-8 mb-2" />
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">X</h5>
    <P class="mb-2 font-normal text-gray-500 dark:text-gray-400">@NTR_tochiman</P>
    <Button size="md" outline class="w-fit" href="https://x.com/NTR_tochiman" color="alternative">
        Follow <ArrowRightOutline class="w-6 h-6 ms-2 dark:text-white" />
    </Button>
</Card>
{/if}
{#if filter === "tech" || filter === "all"}
<Card class="w-full">
    <Img src="zenn.svg" class="w-8 h-8 mb-2" />
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Zenn</h5>
    <P class="mb-2 font-normal text-gray-500 dark:text-gray-400">tochiman</P>
    <Button size="md" class="w-fit" href="https://zenn.dev/tochiman" color="blue">
        Follow <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
    </Button>
</Card>
{/if}
{#if filter === "sns" || filter === "all"}
<Card class="w-full">
    <Img src="Instagram.svg" class="w-8 h-8 mb-2" />
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Instagram</h5>
    <P class="mb-2 font-normal text-gray-500 dark:text-gray-400">ntr_tochiman</P>
    <GradientButton size="md" class="w-fit" href="https://www.instagram.com/ntr_tochiman/" color="pinkToOrange">
        Follow <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
    </GradientButton>
</Card>
{/if}
{#if filter === "other" || filter === "all"}
<Card  class="w-full">
    <Img src="mail.png" class="w-9 h-9 mb-2" />
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">E-Mail</h5>
    <P class="mb-2 font-normal text-gray-500 dark:text-gray-400" whitespace="normal">developer@tochiman.com</P>
    <Button size="md" class="w-fit" href="mailto:developer@tochiman.com">
        Mail <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
    </Button>
</Card>
{/if}