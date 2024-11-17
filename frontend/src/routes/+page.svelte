<script>
    import { 
        Heading,
        P,
        Card, 
        Avatar, 
        Img,
        Table, 
        TableBody, 
        TableBodyCell, 
        TableBodyRow, 
        Popover,
        Toast,
    } from 'flowbite-svelte';
    import { 
        RefreshOutline,
        BellOutline
    } from 'flowbite-svelte-icons';
    import { 
        fly,
        blur,
     } from 'svelte/transition';

    // ======= toast =======
    let toastStatus = true;
    let counter = 7;

    timeout();
    function timeout() {
        if (--counter > 0) return setTimeout(timeout, 1000);
        toastStatus = false;
    }

    // ======= card =======
    let flipCard = false; // for class of css
    let showCard = false; // for if directive
</script>

<div class="absolute z-0 inset-0 flex items-center justify-center">
    {#if showCard === false}
    <Card class="rounded-2xl border-12 border-amber-600 rotate-90 sm:rotate-0 {flipCard ? 'animate-flip-out-ver-left' : ''}" size="lg" padding="xl" >
        <div class="w-full flex justify-end">
            <Popover class="w-40 text-center text-sm font-light " triggeredBy="#flip-card-front"  transition={blur}>View the back</Popover>
            <button id="flip-card-front" on:click={() => {flipCard = !flipCard; setTimeout(() => {showCard = ! showCard}, 500)}}>
                <RefreshOutline style=""/>
            </button>
        </div>
        <div class="w-full flex flex-wrap flex-row">
            <div class="w-1/3 grid grid-cols-1">
                <Avatar class="mb-10 justify-center" size="xl" src="/favicon.ico" />
                <Img alt="qrcode" src="/qrcode-white.png"/>
            </div>
            <div class="w-2/3 grid grid-cols-1">
                <p class="mb-1 text-xl font-bold text-center font-medium text-gray-900 dark:text-white">栃澤侑人</p>
                <span class="mb-1 text-sm text-center text-gray-500 dark:text-gray-400">Tokyo Metropolitan College of Industrial Technology</span>
                <Table>
                    <TableBody tableBodyClass="divide-y">
                        <TableBodyRow>
                            <TableBodyCell>NickName</TableBodyCell>
                            <TableBodyCell>tochiman</TableBodyCell>
                        </TableBodyRow>
                        <TableBodyRow>
                            <TableBodyCell>BirthDay</TableBodyCell>
                            <TableBodyCell>2004/11/20</TableBodyCell>
                        </TableBodyRow>
                        <TableBodyRow>
                            <TableBodyCell>Hobby</TableBodyCell>
                            <TableBodyCell>旅行、音楽、PCゲーム</TableBodyCell>
                        </TableBodyRow>
                        <TableBodyRow>
                            <TableBodyCell>Email</TableBodyCell>
                            <TableBodyCell>developer@tochiman.com</TableBodyCell>
                        </TableBodyRow>
                    </TableBody>
                </Table>
                <p id="contactInformation" class="text-right mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Scan the QR code for other information</p>
            </div>
        </div>
    </Card>
    {:else if showCard === true}
    <Card class="h-[399px] rounded-2xl border-12 border-amber-600 rotate-90 md:rotate-0 {flipCard ? '' : 'animate-flip-out-ver-left'}" size="lg" padding="xl" >
        <div class="w-full flex justify-end">
            <Heading tag="h1" customSize="text-3xl font-extrabold">Memo</Heading>
            <Popover class="w-40 text-center text-sm font-light " triggeredBy="#flip-card-back" transition={blur}>View the front</Popover>
            <button id='flip-card-back' on:click={() => {flipCard = !flipCard; setTimeout(() => {showCard = ! showCard}, 500)}}>
                <RefreshOutline style=""/>
            </button>
        </div>
        <div class="w-full grid grid-cols-1">
            <div class="h-1/2 grid grid-cols-1 gap-8 mb-4 divide-y divide-dashed divide-amber-600 dark:divide-slate-600">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="text-left">
                <Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold">Self-Introduce</Heading>
                <P class="text-left text-lg lg:text-xl px-3 dark:text-gray-400">私は仮想化技術周りが好きで、自宅のサーバでKubernetesやProxmoxで遊んだりしています。また旅行(ドライブ)やPCゲーム、音楽を聴いたり、ピアノを弾いたりするのも好きです。</P>
            </div>
        </div>   
    </Card>
    {/if}
</div>

<Toast transition={fly} params={{ x: 300 }} class="absolute z-10 rounded-md border-2 dark:border-slate-600" position="bottom-right" bind:toastStatus>
    <BellOutline slot="icon" class="w-6 h-6" />
    Thank you for coming to see it
</Toast>