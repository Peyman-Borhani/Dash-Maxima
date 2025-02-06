import  {crossfade}     from  'svelte/transition';
import  {quintOut }     from  'svelte/easing';


export const  [To, From] =crossfade(
{
  duration: d => Math.sqrt(d * 400), 
  fallback(node, params) { 
    const style = getComputedStyle(node);
    const transform =   (style.transform === 'none')
                        ? ''    : style.transform;
    return {
            duration: 900,
            easing  : quintOut,
            css     : t => `transform: ${transform} 
                            scale(${t});
                            opacity  : ${t} `
    };
  }
});