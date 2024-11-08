<script>
    import  Tool_Tip       from  '$lib/Tool_Tip.svelte'

    import  ChevronLeft   from  '~icons/lucide/chevron-left'
    import  ChevronRight  from  '~icons/lucide/chevron-right'
    import  Copy          from  '~icons/lucide/copy'
    import  CreditCard    from  '~icons/lucide/credit-card'
    import  File          from  '~icons/lucide/file'
    import  ListFilter    from  '~icons/lucide/list-filter'
    import  Truck              from  '~icons/lucide/truck'
    import  EllipsisVertical   from  '~icons/lucide/ellipsis-vertical';
    
    import  * as DropdownMenu  from '$lib/components/ui/dropdown-menu/index.js'
    import  * as Card          from '$lib/components/ui/card/index.js'
    import  * as Pagination    from '$lib/components/ui/pagination/index.js'
    import  * as Table    from  '$lib/components/ui/table/index.js'
    import  * as Tabs     from  '$lib/components/ui/tabs/index.js'
    
    import  {Badge}       from  '$lib/components/ui/badge/index.js'
    import  {Button}      from  '$lib/components/ui/button/index.js'
    import  {Progress}    from  '$lib/components/ui/progress/index.js'
    import  {Separator}   from  '$lib/components/ui/separator/index.js';
  
    let  {Tdata } =$props();

  </script>
  


  <!-- Headline -->
  <h1   class='text-3xl  mt-2 mb-4'>Orders </h1>
  
  <article  class='grid grid-cols-10   items-start   justify-between  min-h-full 
                   auto-rows-max  col-span-full  gap-x-[3svw]  gap-y-[4svh] '
  >
  
    <div  class='grid grid-cols-subgrid gap-[3svw] row-start-1 col-span-full portrait:lg:col-span-6 landscape:col-span-6  *:shadow-gray-500 *:shadow-inner '>
      
      <Card.Root class='col-span-full  '>
          <Card.Header class='pb-6'>
              <Card.Title class='text-xl'>Your Orders</Card.Title> 
              <Card.Description class='max-w-lg  leading-relaxed'>
                  Dynamic Orders Dashboard for seamless management and insightful analysis.
              </Card.Description>
          </Card.Header>
          <Card.Footer>     <Button>Create New Order</Button>
          </Card.Footer>
      </Card.Root>
  
      <Card.Root  class='row-start-2 row-span-1 col-span-5  portrait:lg:col-span-3  landscape:col-span-3'>
          <Card.Header >
              <Card.Description  class='pb-2 text-xl font-medium  border-b-2 '>Weekly</Card.Description>
              <Card.Title class='text-3xl'>$1329</Card.Title>
          </Card.Header>
          <Card.Content>    <div class='text-xs text-muted-foreground'>+25% from last week</div>
          </Card.Content>
          <Card.Footer>     <Progress value={25} aria-label='25% increase' />
          </Card.Footer>
      </Card.Root>
          
      <Card.Root  class='row-start-2 row-span-1 col-span-5 portrait:lg:col-span-3 landscape:col-span-3'>
          <Card.Header  class='pb-2'>
              <Card.Description  class='pb-2 text-xl font-medium border-b'>Monthly</Card.Description>
              <Card.Title  class='text-3xl'>$5,329</Card.Title>
          </Card.Header>
          <Card.Content>    <div class='text-xs text-muted-foreground'>+10% from last month</div>
          </Card.Content>
          <Card.Footer>     <Progress  value={12}  aria-label='12% increase' />
          </Card.Footer>
      </Card.Root>
    </div>
    
    
    <!------------------------ Last orders -------------------------->
    <Card.Root class=' grid w-full overflow-hidden col-span-full  col-start-1 row-start-3  *:shadow-gray-500 *:shadow-inner 
                         lg:portrait:row-start-1  lg:col-start-7  landscape:col-start-7  lg:row-start-1 landscape:row-start-1 '
    >
      <Card.Header class='inline-grid  col-span-full grid-flow-col items-start bg-muted/50  justify-between '
        >
        <Card.Title   class='inline-grid w-full  col-span-full grid-flow-col  *:hover:opacity-100  transition-all  items-center justify-between  text-lg  xl:text-xl font-semibold'
                      onclick = {e=> navigator.clipboard.writeText(e.currentTarget.childNodes[1].textContent)}
        > 
            <h2>Order Oe31b70H</h2>

            <Tool_Tip   
                        t   ='Copy Order ID'
                        css ='opacity-0 '
            >
                <Button     size    ='icon'
                            variant ='outline'
                            class   ='size-fit'
                >
                        <Copy  class =' h-6  lg:h-7  scale-y-125 '/> 
                </Button>
            </Tool_Tip>

            <Tool_Tip   t ='Track'>
                <Button  size='icon'  variant='outline'  class='size-8 gap-1'>
                        <Truck class='size-5' />
                        <span   class='sr-only'>Track</span>
                </Button>
            </Tool_Tip>

            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild let:builder>
                  <Button
                    builders={[builder]}
                    size='icon'
                    variant='outline'
                    class='h-8 w-8'
                    >
                    <Tool_Tip   t='More' >
                        <EllipsisVertical class='size-5' />
                        <span class='sr-only'>More</span>
                    </Tool_Tip>
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content align='end'>
                <DropdownMenu.Item>Edit</DropdownMenu.Item>
                <DropdownMenu.Item>Export</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Trash</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </Card.Title>        
      </Card.Header>

      <Card.Content class='p-6 text-md'>
          <div class='grid gap-3'>
          
          <div class='inline-flex  items-center justify-between gap-3'> 
            <Card-Header class='text-lg font-semibold'> Details </Card-Header>
            <span class='text-sm landscape:text-md text-muted-foreground '> 23.11.2024 </span>
          </div>
          <hr>
          <ul class='grid gap-3'>
              <li class='flex items-center justify-between'>
              <span class='text-muted-foreground'>
                  Glimmer Lamps x <span>2</span>
              </span>
              <span>$250.00</span>
              </li>
              <li class='flex items-center justify-between'>
              <span class='text-muted-foreground'>
                  Aqua Filters x <span>1</span>
              </span>
              <span>$49.00</span>
              </li>
          </ul>
          <Separator class='my-2' />
          <ul class='grid gap-3'>
              <li class='flex items-center justify-between'>
              <span class='text-muted-foreground'>Subtotal</span>
              <span>$299.00</span>
              </li>
              <li class='flex items-center justify-between'>
              <span class='text-muted-foreground'>Shipping</span>
              <span>$5.00</span>
              </li>
              <li class='flex items-center justify-between'>
              <span class='text-muted-foreground'>Tax</span>
              <span>$25.00</span>
              </li>
              <li class='flex items-center justify-between font-semibold'>
              <span class='text-muted-foreground'>Total</span>
              <span>$329.00</span>
              </li>
          </ul>
          </div>
          <Separator class='my-4' />

          <section class='grid w-full grid-cols-2 justify-between'>
            <div class='grid justify-between gap-2'>
              <div class='font-semibold'>Shipping To</div>
              <address class='grid gap-0.5 not-italic text-sm text-muted-foreground'>
              <span>{Tdata[0][0]}</span>
              <span>{Tdata[0][7]}</span>
              </address>
            </div>
            <div class='grid auto-rows-max gap-2  *:text-right'>
              <div class='font-semibold'>Billing Info</div>
              <div class='text-muted-foreground text-sm text-right'>Same as shipping address</div>
            </div>
          </section>
          <Separator class='my-4' />

          <div class='grid gap-3'>
          <div class='font-semibold'>Customer Information</div>
          <dl class='grid gap-3'>
              <div class='flex items-center justify-between'>
              <dt class='text-muted-foreground'>Customer</dt>
              <dd>{Tdata[0][0]}</dd>
              </div>
              <div class='flex items-center justify-between'>
              <dt class='text-muted-foreground'>Email</dt>
              <dd>
                  <a href='mailto:'>{Tdata[0][1]}</a>
              </dd>
              </div>
              <div class='flex items-center justify-between'>
              <dt class='text-muted-foreground'>Phone</dt>
              <dd>
                  <a href='tel:'>{Tdata[0][6]}</a>
              </dd>
              </div>
          </dl>
          </div>
          <Separator class='my-4' />

          <div class='grid gap-3'>
          <div class='font-semibold'>Payment Information</div>
          <dl class='grid gap-3'>
              <div class='flex items-center justify-between'>
              <dt class='flex items-center gap-1 text-muted-foreground'>
                  <CreditCard class='h-4 w-4' />
                  Visa
              </dt>
              <dd>**** **** **** 4532</dd>
              </div>
          </dl>
          </div>
      </Card.Content>
      <Card.Footer class='flex flex-row items-center justify-between border-t bg-muted/50 px-6 py-3'>
          <div class='text-md text-muted-foreground'>
          Updated on <time dateTime='2024-11-23'> 23-11-2024 </time>
          </div>
          <Pagination.Root count={10} class='ml-auto mr-1 w-max'>
          <Pagination.Content>
              <Pagination.Item>
              <Button size='icon' variant='outline' class='size-7'>
                  <ChevronLeft class='size-6' />
                  <span class='sr-only'>Previous Order</span>
              </Button>
              </Pagination.Item>
              <Pagination.Item>
              <Button size='icon' variant='outline' class='size-7'>
                  <ChevronRight class='size-6' />
                  <span class='sr-only'>Next Order</span>
              </Button>
              </Pagination.Item>
          </Pagination.Content>
          </Pagination.Root>
      </Card.Footer>
    </Card.Root>  <!--endof Last orders -->
  
    
  <main class = 'grid col-span-full w-full  *:shadow-gray-500 *:shadow-inner '>
    <Card.Root>

      <section class='inline-grid  portrait:grid-rows-2 w-full  justify-between  items-start grid-flow-col '>
        <Card.Header>
                <Card.Title class=' -mt-2 pb-4 tracking-wider text-2xl' >Orders Table</Card.Title>
                <Card.Description >Recent orders from store:</Card.Description>
        </Card.Header>
        <span class= 'inline-grid grid-flow-col  justify-between  items-end gap-3 px-4 '> 
            <Tabs.Root  value='week'  > 
                <Tabs.Content value='week'>
                <Tabs.List class='dark:bg-[#333a] hover:shadow-md  gap-1 '>
                    <Tabs.Trigger value='week'>Week</Tabs.Trigger>
                    <Tabs.Trigger value='month'>Month</Tabs.Trigger>
                    <Tabs.Trigger value='year'>Year</Tabs.Trigger>
                </Tabs.List>
                </Tabs.Content>
            </Tabs.Root>
  
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild let:builder>
                  <Button   size='sm'   variant='outline'   
                            builders={[builder]} >
                      <ListFilter />
                      <span class='sr-only md:not-sr-only'>Filter</span>
                  </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align='end'>
                  <DropdownMenu.Label>Filter by</DropdownMenu.Label>
                  <DropdownMenu.Separator />
                  <DropdownMenu.CheckboxItem checked>Fulfilled</DropdownMenu.CheckboxItem>
                  <DropdownMenu.CheckboxItem>Declined</DropdownMenu.CheckboxItem>
                  <DropdownMenu.CheckboxItem>Refunded</DropdownMenu.CheckboxItem>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
  
            <Button   size='sm' variant='outline' class='gap-1'>
                      <File class='h-3.5 w-3.5' />
                      <span class='sr-only md:not-sr-only'>Export</span>
            </Button>
          </span>
      </section>
      <hr>
      <Card.Content class= 'grid'>
        <Table.Root>
          <Table.Header class='border-dotted '>
            <Table.Row class=' grid grid-flow-col portrait:text-md text-lg bg-muted  *:table-cell *:h-10 *:bg-muted/80 border-collapse border-b-white'>
                <Table.Head >Customer</Table.Head>
                <Table.Head >Type</Table.Head>
                <Table.Head >Status</Table.Head>
                <Table.Head >Date</Table.Head>
                <Table.Head class='text-right'>Amount</Table.Head>
            </Table.Row>
          </Table.Header>
            
          <Table.Body class='table-row-group grid w-full'>
            {#each Tdata  as  tr}
                <Table.Row  class='grid  grid-flow-col grid-cols-5 w-full  text-start *:table-cell'>
                    <Table.Cell>
                    <div  class='table-cell font-medium'>{tr[0]}</div>
                    <div  class='text-sm text-muted-foreground md:inline'>{tr[1]}</div>
                    </Table.Cell>
                    <Table.Cell class='ml-6'> {tr[2]}</Table.Cell>
                    <Table.Cell >
                        <Badge class='text-sm ' variant='secondary'>
                        {tr[3]==='J'? '✔' :tr[3]==='X'? '❌' : '🏁'}
                        </Badge>
                    </Table.Cell>
                    <Table.Cell class='hidden md:table-cell'>{tr[4]}</Table.Cell>
                    <Table.Cell class='text-right'>${tr[5]}</Table.Cell>
                </Table.Row>
            {/each}
          </Table.Body>
        </Table.Root>
      </Card.Content>
    </Card.Root>
  </main>

</article>
