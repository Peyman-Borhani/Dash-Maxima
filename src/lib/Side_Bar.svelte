<script>
    import  {getContext}  from  'svelte';
    import  Home          from  '~icons/lucide/home'
    import  LineChart     from  '~icons/lucide/line-chart'
    import  Package       from  '~icons/lucide/package'
    import  Menu          from  '~icons/lucide/menu'
    import  UsersRound    from  '~icons/lucide/users-round'
    import  Settings      from  '~icons/lucide/settings'
    import  ShoppingCart  from  '~icons/lucide/shopping-cart'
    import  Tags          from  '~icons/lucide/tags'
    import  GitHub        from  '~icons/radix-icons/github-logo'
    import  Cross         from  '~icons/radix-icons/cross2';
    import  Tool_Tip      from  '$lib/Tool_Tip.svelte';
    
    import  * as Sheet      from  '$lib/components/ui/sheet/index.js'
    import  {Button}        from  '$lib/components/ui/button/index.js'
    import  * as Tooltip    from  '$lib/components/ui/tooltip/index.js';
    import  {activeElement} from  'runed';


let  {Active_Itm}=$props();    
const  cfg =getContext('CFG')
const  items =getContext('NAV');

/* CFG Context:
            No_bar  [no bars, almost as disabled]
            fixed   [stays, no shift/scroll]
            L_sbar   [Side_Bar visiblity]
            P_sbar  [force side bar visiblity (on portrait too)]
            Right   [side]      -      Active_Itm  [focused element]
            menu    [force menu Btn+panel on both(landscape too)]
            no_menu [force no menu on both (portrait too)]
*/
//max word size among items. min: 2 (char+icon) //const menu_size = `${items.reduce((x,itm)=> {return itm.length>x? itm.length :x}, 2)}ch`;
 const  menu_css =`flex  w-fit items-center gap-x-[2ch] px-1 justify-evenly hover:scale-125  transition-transform  whitespace-nowrap *:size-9 
                    ${cfg.Right? 'flex-row-reverse  justify-self-start  pr-3' : 'justify-self-end  pl-3'}  text-muted-foreground hover:text-foreground hover:text-foreground self-stretch `
        ,
        icon_css ='size-8  hover:scale-150  transition-all duration-150  rounded-md  cursor-pointer ';

 const  side  = cfg.Right? 'left'  :'right'; //Tooltip popup side
    //sidebar portrait visiblity
 const  sbar_vis =  !cfg.L_sbar? ' hidden  h-0 '
                    :(cfg.P_sbar && cfg.L_sbar)?  'hidden  h-0  lg:portrait:inline-grid  lg:portrait:h-full  row-start-2  row-end-13  landscape:inline-grid  landscape:h-full '
                    :(cfg.L_sbar && !cfg.P_sbar)? 'portrait:hidden portrait:h-0 landscape:inline-grid  landscape:h-full landscape:row-start-2 landscape:row-end-13 '
                    :' ';
                 
 const  sbar_css = ` 
            ${cfg.fixed ? 'fixed  landscape:shadow-[1svw_10.2svh_2svw_#778a,.2svw_1svh_.6svw_#000]  landscape:dark:shadow-[1svw_10.2svh_1.6svw_#baca,1px_10.2svh_.4svw_#eeea] '
                        :'absolute  rounded-ee-lg  landscape:shadow-[1svw_1svh_1svw_#889a,.2svw_.4svh_1svmin_#000]  landscape:dark:shadow-[.4svw_.8svh_1svw_#eefa,.1svw_.2svh_0.4svw_#effb] '
            }
            ${cfg.L_sbar&&cfg.P_sbar? 'h-screen  grid-rows-12  portrait:rounded-none ' :cfg.L_sbar? 'landscape:rounded-none ' :' '} 
            ${!cfg.L_sbar? 'landscape:h-fit landscape:grid-rows-1 landscape:row-span-1  landscape:bg-[#aab] '  :'landscape:h-screen  landscape:grid-rows-12 landscape:bg-[#bbc] '}  
            ${!cfg.P_sbar? 'portrait:h-fit portrait:grid-rows-1 portrait:row-span-1  portrait:bg-[#aab] '  :'portrait:h-screen  portrait:grid-rows-12 portrait:bg-[#bbc] '}  
            ${cfg.Right?  'col-start-13 col-end-12  border-l  justify-start pr-1'  :'col-start-0 col-end-1  border-r justify-start pl-2'} 
            `;
</script>

{#snippet  Icon(itm, css)} 
    <!--Icons: compiles to 1 component per item. (won't repeat whole block) -->
            {#if      itm===items[0]}   <Home class={css}/>
            {:else if itm===items[1]}   <ShoppingCart class={css}/>
            {:else if itm===items[2]}   <Package    class={css} />
            {:else if itm===items[3]}   <UsersRound class={css} />
            {:else if itm===items[4]}   <LineChart  class={css} />
            {:else if itm==='Settings'}  <Settings  class={css} />
            {/if}
{/snippet}


{#if  !cfg.No_bar}

<aside  class ='inline-grid   grid-cols-subgrid z-50  w-[7ch]  py-1.5   grid-flow-row  grid-row-12   dark:bg-background  content-between
                {sbar_css}  dark:shadow-stone-50  transition-all duration-300  select-none '
>
    <!--------------------  Menu  (side panel) -----------        style= 'filter: drop-shadow(0 9ch 2svw #ddfa)'------>
  <Sheet.Root  >
    <Sheet.Trigger  asChild  let:builder 
    >
        <Button     builders ={[builder]}   size='icon'     
                    class ="size-fit  row-start-1  row-end-2  self-start justify-center px-1.5   bg-inherit  hover:bg-background border-none 
                            z-50  dark:shadow-[0_1pt_14pt_#555]   hover:scale-125  transition-transform "
        >                   
            <Menu   class ='h-11 w-11 text-[#53445a] bg-background/50 rounded-lg'/>
            <span   class ='sr-only'> Toggle Menu </span>
        </Button>
    </Sheet.Trigger>

    {#if cfg.menu  ||  !cfg.no_menu}
      <Sheet.Content  side={cfg.Right? 'right' :'left'}   class ='w-fit h-full '
      > <!-- v Hides tiny useless Btn v         //onpointerleave={e=> {e.currentTarget.lastElementChild.click()}} -->
        <span class='absolute  p-5 z-50  right-1  top-0  select-none  outline-none bg-background '> </span>
        <button class="absolute  py-4 z-40  top-0  {cfg.Right? 'rounded-es-full -ml-1 -left-14  hover:-ml-3 pl-3' :'rounded-ee-full -right-14 hover:-right-16 pr-3'} hover:top-1  transition-all duration-150 scale-y-110 hover:scale-x-125 hover:scale-y-150 select-none outline-none  bg-[#3332] landscape:opacity-70 hover:opacity-100
                            shadow-xl shadow-muted-foreground hover:shadow-red-400  dark:shadow-muted-foreground/60  dark:hover:shadow-red-900/60 "
                onpointerup={e=> e.target.parentElement.parentElement.lastElementChild.click()}
                > <Cross  class="w-11 h-12  z-50  place-self-center  transition-all text-muted-foreground hover:text-red-900  border-none  outline-none "
                          onpointerup={e=> e.target.parentElement.parentElement.parentElement.lastElementChild.click()}/>
        </button>

        <nav  class ='inline-grid  h-full w-fit  grid-rows-{items.length}  text-xl mt-4 place-content-evenly
          items-center  *:text-muted-foreground   font-medium  whitespace-nowrap  break-inside-avoid '>
          {#each  items as itm, i}
            <a  href='#{itm}'  class={menu_css}
            >   {itm} 
                {@render Icon(itm)}
            </a>
          {/each}
        </nav>
      </Sheet.Content>
    {/if}
  </Sheet.Root>

<!------------------------- Side_Bar ---------------------------->
  {#if S_bar || (S_bar && P_sbar)}
    <nav  class="{sbar_vis}  grid-flow-row  pt-9  justify-evenly bg-inherit  px-2 landscape:px-5 group-hover:scale-150 
                place-content-around  {Right? 'justify-start pr-4' :'justify-end  pl-4'}  "
    > 
      {#each Array(items.length)  as  itm, i }
      {#if items[i]}
        <Tooltip.Root>
            <Tooltip.Trigger  asChild  let:builder >
            <a  href="{items[i]==='Home'? ''  :('#'+items[i]) }"
                class='inline-grid  group place-content-center  last:row-start-12 
                       rounded-md text-foreground/60 transition-all  hover:text-foreground  *:size-8 '
                onpointerup={()=>On_Page=items[i]}
                use:builder.action   {...builder}
            >
                {@render Icon(items[i],`${icon_css}  ${On_Page===items[i]? 'dark:text-foreground text-black shadow-[1px_1px_2svmin_#eefa]  dark:shadow-none  drop-shadow-[1px_1px_.2svmin_#000] dark:drop-shadow-[0_2pt_0.7svw_#fff] rounded-lg size-10 scale-150' :'shadow-lg shadow-muted'} `) }
                <span  class='sr-only'>{items[i]}</span>
            </a>
            </Tooltip.Trigger>
            <Tooltip.Content {side}>{items[i]}</Tooltip.Content>
        </Tooltip.Root>
      {/if}
      {/each}


    {#if  !items[items.length-2]}
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
            <a  href='##'
                class='{icon_css} row-start-6  row-end-7  text-xl '
                use:builder.action    {...builder}
            >
                <Tags   class='hover:scale-150  transition-all duration-300 font-sans size-8 justify-center' 
                        style='text-shadow: 0 0 1ch #def; '
                /> 
                <span  class='sr-only'>Tag-label/Element focused</span>
            </a>
        </Tooltip.Trigger>
        <Tooltip.Content {side}  class ='ml-2 p-4 italic text-md font-semibold text-violet-600'>
            Tag-name: 
            <span class='text-lg text-green-500'> {activeElement.current?.nodeName} </span>
                &nbsp - &nbsp Item: 
            <span class='text-lg  text-green-500'> {Active_Itm} </span>
        </Tooltip.Content>
      </Tooltip.Root>
    {/if}

    {#if  !items[items.length-3]}
      <Tooltip.Root>
        <Tooltip.Trigger  asChild let:builder>
          <span  class= 'row-start-8 row-end-7  mt-6  hover:scale-150  transition-all duration-300 hover:brightness-[2]
                            size-9 text-black  bg-background dark:bg-muted-foreground  opacity-80 hover:opacity-100 hover:brightness-150
                            rounded-full  shadow-[inset_0_0_2pt_#000_,_inset_0_0_1.6ch_#102]' 
                style= 'filter: drop-shadow(0 0 1ch #daf)'
                use:builder.action    {...builder}>
            <GitHub class ='size-9 '  
            />
            <span  class='sr-only'>GitHub</span>
          </span>
        </Tooltip.Trigger>
        <Tooltip.Content {side}  class ='ml-2 p-4 italic text-md font-semibold text-violet-600'>
            <a  href='https://github.com/Peyman-Borhani/Dash-Maxima'
                class='{icon_css} text-lg text-blue-600 '>
                Tap to Link>> &nbsp https://github.com/Peyman-Borhani/Dash-Maxima
            </a>
        </Tooltip.Content>
      </Tooltip.Root>
    {/if}

    </nav>
  {/if}
</aside>