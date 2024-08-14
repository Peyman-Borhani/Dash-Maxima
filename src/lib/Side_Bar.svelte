<script>
    import  Home          from  '~icons/lucide/home';
    import  LineChart     from  '~icons/lucide/line-chart';
    import  Package       from  '~icons/lucide/package';
    import  Package2      from  '~icons/lucide/package2';
    import  UsersRound    from  '~icons/lucide/users-round';
    import  Settings      from  '~icons/lucide/settings';
    import  ShoppingCart  from  '~icons/lucide/shopping-cart';
    import  Tags          from  '~icons/lucide/tags';

    import  * as Tooltip  from '$lib/components/ui/tooltip/index.js';
    import  {activeElement}   from  'runed';

    let  {inp_Elm}    = $props();

</script>

<aside class='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
    <nav  class='flex flex-col items-center gap-6 px-8 sm:py-5  group-hover:scale-150'>
      <a  href='##'
        class='flex h-9 w-9  group shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
      >
        <Package2  class='h-4 w-4  group-hover:scale-150  transition-all duration-300' />
        <span  class='sr-only'> Systemic </span>
      </a>

      <Tooltip.Root >
        <Tooltip.Trigger  asChild  let:builder class ='text-2xl'>
          <a
            href='##'
            class='group flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
            use:builder.action
            {...builder}
          >
            <Home  class='h-5 w-5 group-hover:scale-150  transition-all duration-300' />
            <span  class='sr-only'>Dashboard</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Dashboard</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href='##'
            class='flex h-9 w-9  group items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
            use:builder.action
            {...builder}
          >
            <ShoppingCart class='h-5 w-5  group-hover:scale-150  transition-all duration-300' />
            <span class='sr-only'>Orders</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Orders</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href='##'
            class='flex h-9 w-9  group items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
            use:builder.action
            {...builder}
          >
            <Package class='h-5 w-5  group-hover:scale-150  transition-all duration-300' />
            <span class='sr-only'>Products</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Products</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href='##'
            class='flex h-9 w-9  group items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
            use:builder.action
            {...builder}
          >
            <UsersRound class='h-5 w-5  group-hover:scale-150  transition-all duration-300' />
            <span class='sr-only'>Customers</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Customers</Tooltip.Content>
      </Tooltip.Root>
      
      <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
          <a
            href='##'
            class='flex h-9 w-9  group items-center justify-center rounded-lg text-cyan-300 hover:text-foreground text-xl md:h-8 md:w-8'
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
            <span class='text-lg  text-green-500'> {inp_Elm} </span>
        </Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href='##'
            class='flex h-9 w-9  group items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
            use:builder.action
            {...builder}
          >
            <LineChart class='h-5 w-5  group-hover:scale-150  transition-all duration-300' />
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
            class='flex h-9 w-9  group items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
            use:builder.action
            {...builder}
          >
            <Settings class='h-5 w-5  group-hover:scale-150  transition-all duration-300' />
            <span class='sr-only'>Settings</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Settings</Tooltip.Content>
      </Tooltip.Root>
    </nav>
</aside>
