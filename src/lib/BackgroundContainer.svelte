<script lang="ts">
  import Logo from "./Logo.svelte";
  export let classes: string = '';
  export let logoSrc: string = '/bing-logo.svg';
  export let logoAlt: string = 'Logo';
</script>

<div
  use:gradientBackground={{
    colors: [
      { color: 'rgba(141,178,254,1)', position: '0%' },
      { color: 'rgba(221,196,253,1)', position: '50%' },
      { color: 'rgba(241,243,255,1)', position: '100%' },
    ],
    angle: '169deg',
  }}
  class={`flex items-center justify-center min-h-screen ${classes}`}
>
  <Logo {logoSrc} {logoAlt} caption="Bing" />
  <slot />
</div>

<script context="module" lang="ts">
  export function gradientBackground(
    node: HTMLElement,
    params: { colors: { color: string; position: string }[]; angle?: string }
  ): {
    update: (newParams: { colors: { color: string; position: string }[]; angle?: string }) => void;
    destroy: () => void;
  } {
    function setBackground(colors: { color: string; position: string }[], angle: string = '0deg') {
      const gradientColors = colors.map(({ color, position }) => `${color} ${position}`).join(', ');
      node.style.backgroundImage = `linear-gradient(${angle}, ${gradientColors})`;
      node.style.backgroundRepeat = 'no-repeat';
      node.style.backgroundSize = 'cover';
    }

    setBackground(params.colors, params.angle);

    return {
      update(newParams) {
        setBackground(newParams.colors, newParams.angle);
      },
      destroy() {
        node.style.backgroundImage = '';
      },
    };
  }
</script>
