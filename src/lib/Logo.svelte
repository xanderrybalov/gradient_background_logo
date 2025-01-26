<script lang="ts">
export let logoSrc: string = '/bing-logo.svg';
export let logoAlt: string = 'Logo';
export let caption: string = 'Bing';
</script>

<div class="logo-wrapper">
    <div class="logo-container">
        <img src={logoSrc} alt={logoAlt} class="logo-image" />
        <p class="logo-caption">{caption}</p>
    </div>
</div>

  
  <style>
.logo-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo-container {
    width: 14.5rem;
    height: 14.5rem;
    background-color: white;
    border-radius: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
}

.logo-image {
    padding-left: 1rem;
    width: 8rem;
    height: 8rem;
    filter: invert(0.3) sepia(0.5) saturate(0.3) hue-rotate(0deg) brightness(0.8);
}

.logo-caption {
    padding-top: 0.5rem;
    font-size: 1.3rem;
    color: #505050;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
}
</style>
