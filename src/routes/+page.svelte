<script>
  export let data;
  console.log(data.documents);

  const images = data.documents;

  let currentSlideItem = 0;

  const nextImage = () => {
    currentSlideItem = (currentSlideItem + 1) % images.length;
  };

  const prevImage = () => {
    if (currentSlideItem != 0) {
      currentSlideItem = (currentSlideItem - 1) % images.length;
    } else {
      currentSlideItem = images.length - 1;
    }
  };

  const consoleFunction = () => {
    console.log(data.documents)
  }

  const currentImage = () => {};
</script>

<main>
  <section class="header__wrapper">
    <header class="flex">
      <h1 class="header--title">FDND Squad</h1>
      <section class="screen__wrapper">
        <figure class="screen__img--container">
          {#each [images[currentSlideItem]] as data (currentSlideItem)}
            <iframe
              src={data.data.businesscard.url}
              title={data.data.name}
              frameBorder="0"
            />
          {/each}
        </figure>
      </section>
    </header>
  </section>

  <section id="laptops">
    <div class="container">
      <div class="row">
        <h2 class="section__title">
          Dit zijn de <span class="text--purple">FDND Studenten</span>
        </h2>
        <ul class="laptop__list">
          <li class="laptop">
            <div class="remote__container">
              <h2 class="remote__title">FDND Studenten afstandsbediening</h2>
              <div class="btn__container">
                <button class="remote__btn" on:click={() => prevImage()}>
                  <img src="/left-arrow.svg" alt="" class=""/>
                  Vorige
                </button>
                <button class="remote__btn" on:click={() => nextImage()}>
                  Volgende
                  <img src="/right-arrow.svg" alt="" />
                </button>
              </div>
              <img src="/philips-logo.svg" alt="" class="remote__img" />
            </div>
          </li>

          <li class="laptop remote ">
            <div class="remote-control">
              <div class="max-width">
                <h2 class="remote__title">FDND Studenten afstandsbediening</h2>
                <div class="remote-control__buttons">
                  <button
                    class="btn btn--blue btn--left"
                    on:click={() => prevImage()}>Vorige</button
                  >
                  <button
                    class="btn btn--blue btn--right"
                    on:click={() => nextImage()}>Volgende</button
                  >
                </div>
              </div>
              <img
                class="remote-control__logo"
                src="/philips-logo.svg"
                alt=""
              />
            </div>
          </li>

          {#each data.documents as data}
            <li class="laptop" on:click={() => consoleFunction(data.documents)}>
              <div class="laptop__img--wrapper">
                <img src="./img/laptop-blue.svg" alt="" class="laptop__img" />
                <img
                  class="laptop__github-img"
                  src={data.data.githubimage.url}
                  alt=""
                />
              </div>
              <h2>{data.data.name}</h2>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>
  <pre>{JSON.stringify(data.documents, null, 2)}</pre>
</main>
