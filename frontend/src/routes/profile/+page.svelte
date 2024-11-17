<script>
    import { 
        Heading,
        Timeline,
        TimelineItem,
        Button,
        Tabs, 
        TabItem,
    } from 'flowbite-svelte';
    import { 
        ArrowRightOutline, 
    } from 'flowbite-svelte-icons';
    import CardCompornent from './Card.svelte'

    let filter = $state('all');
	// $effect(() => {
	// 	filter = '';
	// })
</script>
  
<div class="w-full flex flex-row flex-wrap md:flex-nowrap justify-center items-top gap-5">
    <div class="w-1/2">
        <Heading tag="h1" customSize="mb-3 ml-3 text-3xl font-extrabold">My Activitys</Heading>
        <Timeline class="w-full max-h-[740px] overflow-y-scroll">
            <TimelineItem title="JANOG52 in Nagasaki" date="July 2023">
                <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">若者支援プログラムにて初参加。</p>
            </TimelineItem>
            <TimelineItem title="Cyber Security Tokyo for Junior 2023" date="August 2023">
                <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">NOCとして仮想化基盤のクラスタ構築、その上に監視基盤やDHCP、DNS等のサービスや受講生用のAP提供まで行った。</p>
                <Button color="alternative" href="https://tmcseec.net/ja/cyber_security_tokyo2024_held">Visit Site<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
            </TimelineItem>
            <TimelineItem title="JANOG53 in HAKATA" date="January 2024">
                <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">NETCON委員としてNETCONの問題作成とハンズオン用資料作成を行なった。</p>
                <Button color="alternative" href="https://www.janog.gr.jp/meeting/janog53/staff/">Visit Site<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
            </TimelineItem>
            <TimelineItem title="JANOG54 Meeting in NARA" date="July 2024">
                <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">NOCのサーバーチームとして会期中に監視基盤やDNSの構築・提供を行ない、BoFにおいて活動内容を報告するために登壇した。</p>
                <Button color="alternative" href="https://www.janog.gr.jp/meeting/janog54/staff/">Visit Site<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
            </TimelineItem>
            <TimelineItem title="Cyber Security Tokyo for Junior 2024" date="August 2024">
                <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">ProjectManagerとNOCチームを兼務。仮想化基盤(Proxmox, k8s)の構築、その上に監視基盤やDHCP、DNS等のサービスや会場ネットワークの構築・提供まで行った。</p>
                <Button color="alternative" href="https://tmcseec.net/ja/cyber_security_tokyo2024_held">Visit Site<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
            </TimelineItem>
            <TimelineItem title="セキュリティ・キャンプ2024" date="August 2024">
                <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">全国大会の専門Bコースの受講生として参加しました。</p>
            </TimelineItem>
            <TimelineItem title="JANOG55@Kyoto" date="January 2025">
                <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">NOCのサーバーチームとして会期中に監視基盤を構築、提供を行なった。</p>
            </TimelineItem>
        </Timeline>
    </div>
    <div class="w-1/2">
        <Heading tag="h1" customSize="ml-3 text-3xl font-extrabold">Contact information</Heading>
        <Tabs tabStyle="underline" defaultClass="flex rounded-lg rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700">
            <TabItem class="w-full text-center" open title="All" on:click={ () => filter = "all"}>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 max-h-[675px] overflow-y-scroll">
                    <CardCompornent filter={filter} />
                </div>   
            </TabItem>
            <TabItem class="w-full text-center" title="SNS" on:click={ () => filter = "sns"}>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 max-h-[675px] overflow-y-scroll">
                    <CardCompornent filter={filter} />
                </div>   
            </TabItem>
            <TabItem class="w-full text-center" title="Tech" on:click={ () => filter = "tech"}>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 max-h-[675px] overflow-y-scroll">
                    <CardCompornent filter={filter} />
                </div>   
            </TabItem>
        </Tabs>     
    </div>
</div>
  