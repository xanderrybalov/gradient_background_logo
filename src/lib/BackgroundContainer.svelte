<script lang="ts">
  export let classes: string = '';
  export let logoSrc: string = '';
  export let logoAlt: string = 'Logo';
</script>

<div
  use:gradientBackground={{
    from: 'var(--tw-gradient-from, #A4C4FC)',
    to: 'var(--tw-gradient-to, #DBB4FD)',
  }}
  class={`flex items-center justify-center min-h-screen ${classes}`}
>
  {#if logoSrc}
    <div class="logo-container">
      <img src={logoSrc} alt={logoAlt} class="logo-image" />
    </div>
  {/if}
  <slot />
</div>

<style>
  .logo-container {
    width: 8rem;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 1rem;
    box-shadow: var(--tw-shadow-lg, 0 10px 15px rgba(0, 0, 0, 0.1));
  }

  .logo-image {
    width: 4rem;
    height: 4rem;
  }
</style>

<script context="module" lang="ts">
  export function gradientBackground(
    node: HTMLElement,
    params: { from: string; to: string }
  ): { update: (newParams: { from: string; to: string }) => void; destroy: () => void } {
    function setBackground(from: string, to: string) {
      node.style.backgroundImage = `linear-gradient(to bottom, ${from}, ${to})`;
      node.style.backgroundRepeat = 'no-repeat';
      node.style.backgroundSize = 'cover';
    }

    setBackground(params.from, params.to);

    return {
      update(newParams) {
        setBackground(newParams.from, newParams.to);
      },
      destroy() {
        node.style.backgroundImage = '';
      },
    };
  }
</script>

