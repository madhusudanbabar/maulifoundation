<template>
  <div class="wrapper">
    <div class="container-fluid">
      <div class="hero">
        <div class="hero__meta">
          <h1 class="hero__title">Empowering Lives, Restoring Hope</h1>
          <h1 class="hero__title hero__title--small">
            Mauli Foundation's Support for Vulnerable Souls
          </h1>
          <p class="hero__desc">
            Welcome to Mauli Foundation, a beacon of compassion and healing for
            those who have often been forgotten by society. Our registered
            foundation is dedicated to uplifting the lives of mentally ill
            individuals, homeless communities, and orphaned beggars. We believe
            that every life holds value, and through our relentless efforts, we
            strive to provide a safe haven, care, and opportunities for these
            vulnerable souls.
          </p>
          <a href="#" class="cta hero__cta">Donate Now</a>
        </div>
        <figure class="hero__figure">
          <nuxt-img
            class="hero__img"
            src="https://source.unsplash.com/random/?orphans,beggars"
          />
        </figure>
      </div>
    </div>
    <div class="container-fluid">
      <div class="bio">
        <div class="bio__block bio__block--about">
          <h2 class="bio__heading">About Us:</h2>
          <p class="bio__desc">
            At Mauli Foundation, we are driven by the conviction that every
            person deserves dignity, respect, and the chance to rebuild their
            lives. We work tirelessly to create a nurturing environment where
            individuals struggling with mental illness find solace, homeless
            individuals discover a shelter from the storm, and orphaned beggars
            are offered a chance to dream again.
          </p>
        </div>
        <div class="bio__block bio__block--mission">
          <h2 class="bio__heading">Our Mission:</h2>
          <p class="bio__desc">
            Our mission is to make a lasting impact on the lives of those who
            often go unnoticed. We provide holistic support that includes access
            to mental health resources, medical care, nutritious meals, skill
            development, and education. Through our efforts, we aim to
            reintegrate these marginalized individuals into society as
            confident, self-sufficient, and empowered members.
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid work">
      <h2 class="title work__title">What We Do</h2>
      <div class="work__grid">
        <div class="work__block" v-for="w in work">
          <font-awesome-icon class="work__icon" :icon="['fas', w.icon]" />
          <h3 class="work__heading">{{ w.title }}</h3>
          <p class="work__meta">{{ w.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    {
      const work = [
        {
          title: "Shelter and Care",
          description:
            "We offer safe and clean shelter spaces where individuals can find refuge from the streets, along with access to proper healthcare and mental health support.",
          icon: "home",
        },
        {
          title: "Mental Health Empowerment",
          description:
            "Our team of dedicated professionals provides counseling, therapy, and workshops to help individuals cope with their mental health challenges and regain control over their lives.",
          icon: "heart",
        },
        // {
        //   title: "Education and Skill Building",
        //   description:
        //     "We believe in the power of education to break the cycle of poverty. We provide educational opportunities and skill development programs that equip individuals with tools to build a brighter future.",
        //   icon: "graduation-cap",
        // },
        {
          title: "Community and Support",
          description:
            "Through a strong sense of community, we foster an environment where everyone feels valued and understood. We organize support groups and activities to build connections and combat loneliness.",
          icon: "users",
        },
      ];

      return { work };
    }
  },
};
</script>
<style lang="scss">
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @include respond(desktop) {
    flex-direction: row;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 0 0 45%;
    align-items: flex-start;
    padding: 2rem;

    @include respond(desktop) {
      padding: 2rem 10rem;
      padding-right: 0;
    }
  }

  &__title {
    font-family: "Quando", serif;
    font-size: 5rem;
    font-weight: 500;

    &--small {
      font-size: 2rem;
    }
  }

  &__desc {
    font-size: 1.8rem;
    line-height: 1.5;
  }

  &__figure {
    min-height: 100%;
    mask-image: url("/images/splash.png");
    mask-size: cover;
    mask-position: 0 50%;
    align-self: stretch;
    max-height: 100vh;
  }

  &__img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
  }
}

.container-fluid:has(.bio) {
  background: $violet-darker;
  padding: 5rem;
}

.bio {
  display: flex;
  gap: 2.5rem;
  max-width: 110rem;
  flex-direction: column;

  @include respond(desktop) {
    margin: 0 auto;
    flex-direction: row;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #e9ddd3;
    padding: clamp(2rem, 7.5vmax, 5rem);
    padding-inline: 0rem;
    width: clamp(30rem, 100%, 55rem);
  }

  &__heading {
    display: inline-block;
    font-family: Poppins;
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: max(2.5vh, 2rem);
    width: max-content;
  }

  &__desc {
    font-family: Inter;
    font-size: 1.65rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
}

.work {
  padding: 7vh 7.5vw 3.5vh;

  &__title {
    font-size: 5rem;
    margin-block: 7.5rem 15rem;
    margin-inline: auto;
    max-width: fit-content;
    @extend %title;
    @include watermark;
  }

  &__grid {
    display: flex;
    gap: 5rem;
    max-width: 120rem;
    flex-direction: column;

    @include respond(desktop) {
      margin-inline: auto;
      flex-flow: row wrap;
      justify-content: space-around;
    }
  }

  &__block {
    align-items: flex-start;
    display: flex;
    flex-flow: column nowrap;
    flex: 0 0 28%;
    gap: 1rem;
    backdrop-filter: contrast(0.9);
    border-radius: 0.5rem;
    padding: 2.5rem 3.5rem;
    transition: backdrop-filter 0.3s ease-out;
  }

  &__icon {
    color: #fee7ef;
    width: 2.5rem;
  }

  &__heading {
    color: #fee7ef;
    font-family: var(--font-system);
    font-size: 2.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    position: relative;
  }

  &__meta {
    font-family: Inter;
    font-weight: 400;
    line-height: 150%;
    hyphens: auto;
  }
}
</style>
