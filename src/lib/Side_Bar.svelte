<script>
    import  Home          from  '~icons/lucide/home'
    import  LineChart     from  '~icons/lucide/line-chart'
    import  Package       from  '~icons/lucide/package'
    import  Menu          from  '~icons/lucide/menu'
    import  UsersRound    from  '~icons/lucide/users-round'
    import  Settings      from  '~icons/lucide/settings'
    import  ShoppingCart  from  '~icons/lucide/shopping-cart'
    import  Tags          from  '~icons/lucide/tags'
    import  Cross         from  '~icons/radix-icons/cross2'
    import  * as Sheet      from  '$lib/components/ui/sheet/index.js'
    import  {Button}        from  '$lib/components/ui/button/index.js'
    import  * as Tooltip    from  '$lib/components/ui/tooltip/index.js'
    import  {activeElement} from  'runed'


let     {cfg,   Active_Itm=$bindable(''),     On_Page=$bindable('Home'),
        items= ['Home', 'Orders', 'Products', 'Customers', 'Analytics', '', 'Settings']
}=$props();     //max word size among items. min: 2 (char+icon) //const menu_size = `${items.reduce((x,itm)=> {return itm.length>x? itm.length :x}, 2)}ch`;

//let  fixed=cfg.fixed,  P_sbar=cfg.P_sbar,  S_bar=cfg.S_bar,  Right=cfg.Right,  menu=cfg.menu;
let  {fixed,  P_sbar,  S_bar,  Right,  menu, no_menu} = cfg;

    /*Props:        (var-> a variable value, else act as boolean)
            fixed   [stays, no shift/scroll]
    var     P_sbar  [force side bar visiblity (on portrait too)]
    var     S_bar   [force side bar visiblity (on landscape too)]
    var     Right   [side]   -   Active_Itm  [focused element]
            menu    [force menu panel on both(landscape too)]
            no_menu [force no menu on both (portrait too)]
    */
 
 const  menu_css =`flex  w-fit items-center justify-items-between gap-4 p-3  hover:scale-125  transition-transform  whitespace-nowrap *:size-9 
                      ${Right? 'flex-row-reverse self-start' : 'justify-self-end '} text-muted-foreground hover:text-foreground hover:text-foreground self-stretch `
        ,
        icon_css ="size-8  group-hover:scale-150  transition-all duration-200 rounded-md " ;

 const  side  = Right? 'left'    :'right'; //Tooltip popup side
    //sidebar portrait visiblity
 const  sbar_vis = ` ${P_sbar? 'inline-grid ' :!S_bar? 'hidden '  :'landscape:inline-grid  portrait:hidden '} 
                     ${(P_sbar || S_bar)? 'h-full row-start-2   row-end-13 ' :'h-full portrait:h-0 row-start-1 row-end-1 landscape:row-start-2 landscape:row-end-13 '} `;

 const  sbar_css = ` py-2.5   dark:shadow-stone-50  transition-all duration-300
            ${fixed?  'fixed '  :'absolute '} 
            ${P_sbar? 'h-screen  grid-rows-12 ' : ' '}
            ${!S_bar? 'h-fit grid-rows-1 row-span-1 p-2.5 '  :'landscape:h-screen  landscape:grid-rows-12 '} 
            ${Right?  'col-start-13 -col-end-1  border-l  justify-self-end '  :'col-start-0 col-end-1  border-r '}
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



<aside  class ="inline-grid z-50  grid-flow-row  bg-background {sbar_css} dark:shadow-[0_10svh_4svw_#ccda,0_10svh_0.4svw_#eefa] shadow-[0_9svh_4svw_#889a,0_9svh_1svw_#000] 
                content-between  select-none   portrait:hidden  portrait:lg:inline-grid    *:hover:opacity-100 "

>
    <!--------------------  Menu  (side panel) -----------        style= 'filter: drop-shadow(0 9ch 2svw #ddfa)'------>
  <Sheet.Root  >
    <Sheet.Trigger  asChild  let:builder 
    >
        <Button     builders ={[builder]}   size='icon'     variant='outline'
                    class ="row-start-1 row-end-2 portrait:m-1.5  place-self-center  justify-self-center size-fit z-50 {Right? 'mr-2' :'ml-2'}
                            max-h-[8ch]  bg-inherit  shadow-lg shadow-gray-700/80  rounded-lg  hover:scale-125 transition-transform "
        >                   
            <Menu   class ='size-12 '/>
            <span   class ='sr-only'> Toggle Menu </span>
        </Button>
    </Sheet.Trigger>

    {#if menu  ||  !no_menu}
      <Sheet.Content  side={Right? 'right' :'left'}   class ='w-fit h-full '
      > <!-- v Hides tiny useless Btn v         //onpointerleave={e=> {e.currentTarget.lastElementChild.click()}} -->
        <span class='absolute  p-4 z-50  right-1  top-0  select-none  outline-none bg-background '> </span>
        <button class="absolute  py-2 z-40  top-0  {Right? 'rounded-es-full -ml-1 -left-14  hover:-ml-3 pl-3' :'rounded-ee-full -right-14 hover:-right-16 pr-3'} hover:top-1  transition-all duration-150 scale-y-110 hover:scale-x-125 hover:scale-y-150 select-none outline-none  bg-[#3332] landscape:opacity-70 hover:opacity-100
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

  {#if S_bar || P_sbar}
    <nav  class=" {sbar_vis} grid-flow-row  pt-4  bg-inherit  px-2.5 landscape:px-5 group-hover:scale-150 
                place-content-evenly  {Right? 'justify-start pl-3.5' :'justify-end  pr-3.5'}  "
    > 
      {#each items  as  itm }
      {#if itm}
        <Tooltip.Root>
            <Tooltip.Trigger  asChild  let:builder >
            <a  href='#{itm}'
                class='inline-grid  group place-content-center  last:row-start-12 
                       rounded-md text-foreground/60 transition-all  hover:text-foreground  *:size-8 '
                onpointerup={()=>On_Page=itm}
                use:builder.action   {...builder}
            >
                {@render Icon(itm,`hover: ${icon_css}  ${On_Page===itm? 'dark:text-foreground text-black shadow-[1px_1pt_1svh_#ddea]  dark:shadow-none  drop-shadow-[1px_1px_.1svmax_#000] dark:drop-shadow-[0_2pt_0.6svw_#fff] rounded-lg size-10 scale-150' :'shadow-lg shadow-muted'} `) }
                <span  class='sr-only'>{itm}</span>
            </a>
            </Tooltip.Trigger>
            <Tooltip.Content {side}>{itm}</Tooltip.Content>
        </Tooltip.Root>
      {/if}
      {/each}


    {#if  !items[items.length-2]}
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
            <a  href='##'
                class='{icon_css} row-start-6  row-end-8  text-xl '
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

    </nav>
  {/if}
</aside>