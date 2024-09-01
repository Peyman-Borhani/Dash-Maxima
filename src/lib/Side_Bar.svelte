<script>
    import  Home          from  '~icons/lucide/home';
    import  LineChart     from  '~icons/lucide/line-chart';
    import  Package       from  '~icons/lucide/package';
    import  Menu          from  '~icons/lucide/menu';
    import  UsersRound    from  '~icons/lucide/users-round';
    import  Settings      from  '~icons/lucide/settings';
    import  ShoppingCart  from  '~icons/lucide/shopping-cart';
    import  Tags          from  '~icons/lucide/tags';

    import  * as Tooltip  from '$lib/components/ui/tooltip/index.js';
    import  {activeElement}   from  'runed';

    let  {Active_Itm, menu}    = $props();
    let  shade  = false
</script>


<aside class='hidden md:inline-grid  h-screen  fixed  place-self-start  z-40  w-fit  border-r bg-background '>
    <nav  class='flex flex-col items-center justify-between  gap-6 px-4 sm:py-5  group-hover:scale-150'
    >
      <a  href='##'  class='flex  group shrink-0 items-center justify-center gap-2  md:size-8
                            rounded-full text-lg font-semibold active:text-primary  md:text-base'
                            onclick={()=> menu = !menu}
      >
        <Menu  class='size-8 text-slate-600 group-hover:scale-150  transition-all duration-300' />
        <span  class='sr-only'> Menu </span>
      </a>

      <Tooltip.Root >
        <Tooltip.Trigger  asChild  let:builder class ='text-sm'>
          <a
            href='##'
            class='group flex   items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8'
            use:builder.action
            {...builder}
          >
            <Home  class='size-6 group-hover:scale-150  transition-all duration-300' />
            <span  class='sr-only'>Dashboard</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Dashboard</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href='##'
            class='flex  group items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:size-8'
            use:builder.action
            {...builder}
          >
            <ShoppingCart class='size-6  group-hover:scale-150  transition-all duration-300' />
            <span class='sr-only'>Orders</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Orders</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href='##'
            class='flex  group items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8'
            use:builder.action
            {...builder}
          >
            <Package class='size-6  group-hover:scale-150  transition-all duration-300' />
            <span class='sr-only'>Products</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Products</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href='##'
            class='flex  group items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8'
            use:builder.action
            {...builder}
          >
            <UsersRound class='size-6  group-hover:scale-150  transition-all duration-300' />
            <span class='sr-only'>Customers</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Customers</Tooltip.Content>
      </Tooltip.Root>
      
      <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
          <a
            href='##'
            class='flex  group items-center justify-center rounded-lg text-cyan-300 hover:text-foreground text-xl md:size-8'
            use:builder.action
            {...builder}
          >
            <Tags  class='group-hover:scale-150  transition-all duration-300 font-sans' 
                   style='text-shadow: 0 0 1ch #def;  letter-spacing: -2pt'
            /> 
          <span  class='sr-only'>Tag-label/Element focused</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right' class='ml-2 p-4 italic text-md font-semibold text-violet-600'>
            Tag-name: 
            <span class='text-lg text-green-500'> {activeElement.current?.nodeName} </span>
            &nbsp - &nbsp Item: 
            <span class='text-lg  text-green-500'> {Active_Itm} </span>
        </Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href='##'
            class='flex  group items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8'
            use:builder.action
            {...builder}
          >
            <LineChart class='size-6  group-hover:scale-150  transition-all duration-300' />
            <span class='sr-only'>Analytics</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Analytics</Tooltip.Content>
      </Tooltip.Root>
    </nav>
    
    <nav class='mt-auto flex flex-col items-center gap-4 px-2 sm:py-5'>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href='##'
            class='flex  group items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8'
            use:builder.action
            {...builder}
          >
            <Settings class='size-6  group-hover:scale-150  transition-all duration-300' />
            <span class='sr-only'>Settings</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Settings</Tooltip.Content>
      </Tooltip.Root>
    </nav>
</aside>
