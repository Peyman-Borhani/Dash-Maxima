
<script>  
    //import { prerendered } from '$service-worker';
    export const  prerender = true;
    import      '../app.css';
    import   {ModeWatcher}  from    'mode-watcher';
</script>

<ModeWatcher  />
<slot />