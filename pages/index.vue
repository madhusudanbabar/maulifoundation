<template>
  <div class="wrapper">
    <section class="container-fluid">
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
            quality="100"
            src="/images/gallery/happy faces.jpeg"
          />
        </figure>
      </div>
    </section>
    <section class="container-fluid">
      <div class="bio">
        <div class="bio__block bio__block--about">
          <h2 class="bio__heading">About Us</h2>
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
          <h2 class="bio__heading">Our Mission</h2>
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
    </section>
    <section class="container-fluid feature">
      <h2 class="feature__heading">Featured In</h2>
      <div class="feature__marquee" :style="{ '--articles': news.length }">
        <figure class="feature__figure" v-for="n in news">
          <nuxt-img
            class="feature__news"
            :src="`/images/gallery/news/${n.src}`"
          />
          <figcaption class="feature__caption">{{ n.caption }}</figcaption>
        </figure>
      </div>
    </section>
    <section class="container-fluid fact">
      <div class="fact__left">
        <div class="fact__item fact__item--main">
          <div class="fact__count fact__count--bold" data-counter="lives">
            50+
          </div>
          <span class="fact__desc fact__desc--bold">Lives Transformed</span>
        </div>
      </div>
      <div class="fact__right">
        <div class="fact__item">
          <div class="fact__count" data-counter="years">1+</div>
          <span class="fact__desc">Years of Service</span>
        </div>
        <div class="fact__item">
          <div class="fact__count" data-counter="meals">200+</div>
          <span class="fact__desc">Meals Served</span>
        </div>
        <div class="fact__item">
          <div class="fact__count" data-counter="stories">10+</div>
          <span class="fact__desc">Success Stories</span>
        </div>
        <div class="fact__item">
          <div class="fact__count" data-counter="volunteers">15+</div>
          <span class="fact__desc">Volunteer Impact</span>
        </div>
      </div>
    </section>
    <section class="container-fluid work">
      <!-- <h3 class="work__subtitle">What We Do?</h3> -->
      <h2 class="work__title">What We Do?</h2>
      <div class="work__grid">
        <div class="work__block" v-for="w in work">
          <div class="work__row">
            <font-awesome-icon class="work__icon" :icon="['fas', w.icon]" />
            <span class="work__heading">{{ w.title }}</span>
          </div>
          <p class="work__meta">{{ w.description }}</p>
        </div>
      </div>
    </section>
    <section class="container-fluid gallery">
      <h2 class="gallery__title">Gallery of hope</h2>
      <div class="gallery__grid">
        <nuxt-img
          v-for="i in gallery"
          width="1000"
          class="gallery__img"
          :src="`/images/gallery/${i}`"
        />
      </div>
    </section>
    <section class="container-fluid call">
      <h2 class="call__heading">Be the change!</h2>
      <p class="call__meta">
        At Mauli Foundation, our mission thrives on the generosity and
        compassion of people like you. Your contribution can make a significant
        impact on the lives of the most vulnerable members of our society. Join
        us in our journey of empowerment, transformation, and positive change.
      </p>
      <div class="call__blocks">
        <div class="call__block">
          <h3 class="call__head">Become a Volunteer</h3>
          <p class="call__info">
            Are you passionate about making a difference? Join our team of
            dedicated volunteers and be a guiding light for those in need. Your
            time, skills, and support can create a ripple effect of change that
            extends far beyond the present moment.
          </p>
          <a href="#" class="cta call__cta">Join Us</a>
        </div>
        <div class="call__block">
          <h3 class="call__head">Make a Donation</h3>
          <p class="call__info">
            Your contribution, no matter the size, can change lives. By making a
            donation, you directly contribute to providing shelter, education,
            mental health support, and nutritious meals to those who need it the
            most. Every donation counts in building a better future.
          </p>
          <a href="#" class="cta call__cta">Donate Now</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  setup() {
    const work = [
      {
        title: "Food, Shelter & Care",
        description:
          "Offer safe & clean shelter spaces where individuals can find refuge from the streets, along with access to proper healthcare & mental health support.",
        icon: "home",
      },
      {
        title: "Mental Health Empowerment",
        description:
          "Our team provides counseling & workshops to help individuals cope with their mental health challenges & regain control over their lives.",
        icon: "heart",
      },
      // {
      //   title: "Education and Skill Building",
      //   description:
      //     "We believe in the power of education to break the cycle of poverty. We provide educational opportunities and skill development programs that equip individuals with tools to build a brighter future.",
      //   icon: "graduation-cap",
      // },
      {
        title: "Empowerment Workshops",
        description:
          "Engaging workshops on various life skills empower individuals to gain confidence and make positive changes in their lives.",
        icon: "hands-helping",
      },
      {
        title: "Community & Support",
        description:
          "Through a strong sense of community, we foster an environment where everyone feels valued & understood. our support groups & activities helps build connections & combat loneliness.",
        icon: "users",
      },
      {
        title: "Visits by Prominent Persons",
        description:
          "Prominent figures such as police officers, local officials, and community leaders visit to show support, inspire, and engage with the residents.",
        icon: "user-tie",
      },
      {
        title: "Healthy Food",
        description:
          "Nutritious meals are provided to promote physical well-being and ensure that individuals have access to healthy, balanced diets.",
        icon: "apple-alt",
      },
    ];

    const counterItems = {
      years: 1,
      meals: 200,
      stories: 10,
      volunteers: 15,
      lives: 50,
    };
    const gallery = [
      "mauli with other officials.jpeg",
      "happy faces.jpeg",
      "medical checkup.jpeg",
      "mauli with police.jpeg",
      "mauli grooming orphans.jpeg",
      "mauli with polices.jpeg",
      "mauli with orphans.jpeg",
      "orphans.jpeg",
      "police visit to mauli foundation.jpeg",
      "smiling face.jpeg",
      "smiling faces 2.jpeg",
      "smiling faces.jpeg",
      "volunteers feeding 2.jpeg",
      "volunteers feeding 3.jpeg",
      "volunteers feeding.jpeg",
      "volunteers with orphan.jpeg",
      "volunteers.jpeg",
    ];
    const news = [
      {
        src: "article 1.jpeg",
        caption: "Veerbhumi Newspaper",
      },
      {
        src: "article 2.jpeg",
        caption: "Prabhat Newspaper",
      },
      {
        src: "article 3.jpeg",
        caption: "Prabhat Newspaper",
      },
    ];
    let ctx;
    return { work, gallery, counterItems, ctx, news };
  },
  methods: {
    animateCounters() {
      const counterElements = document.querySelectorAll("[data-counter]");
      counterElements.forEach((element) => {
        let counterName = element.getAttribute("data-counter");
        let targetValue = this.counterItems[counterName];
        let counter = { value: 0 };

        gsap.to(counter, {
          value: targetValue,
          scrollTrigger: ".fact__right",
          duration: 1,
          stagger: 0.1,
          roundProps: "value",
          onUpdate: () => (element.textContent = counter.value + "+"),
        });
      });
    },
  },
  mounted() {
    this.animateCounters();
  },
  beforeUnmount() {
    this.ctx.revert();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    ScrollTrigger.killAll();
    this.ctx.kill();
  },
};
</script>

<style lang="scss">
%padding {
  padding: 7vh 7.5vw 10rem;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

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
      padding: 2rem 5rem;
      padding-right: 2rem;
      flex: 0 0 45%;
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
    max-height: 100vmin;
    overflow: hidden;
    @include respond(desktop) {
      align-self: stretch;
    }
  }

  &__img {
    height: 100%;
    width: 100%;
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
  max-width: 120rem;
  flex-direction: column;
  justify-content: space-between;

  @include respond(desktop) {
    margin: 0 auto;
    flex-direction: row;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: $subtle-peach;
    padding-block: clamp(2rem, 2.5vmax, 5rem);
    padding-inline: 0rem;
    max-width: 55rem;
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
  @extend %padding;
  &__subtitle {
    text-align: center;
    font-family: var(--font-system);
    margin-top: 7.5rem;
    color: $red-light;
  }

  &__title {
    @extend %heading;
    margin-block: 1rem 15rem;
  }

  &__grid {
    display: flex;
    gap: 5rem;
    flex-direction: column;

    @include respond(desktop) {
      flex-flow: row wrap;
      justify-content: space-around;
    }
  }

  &__block {
    min-width: 30rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    padding: 2.5rem 3.5rem;
    backdrop-filter: contrast(0.9);
    border-radius: 0.5rem;
    gap: 2rem;
    container-type: inline-size;
    transition: backdrop-filter 0.3s ease-out;

    &:hover {
      backdrop-filter: contrast(0.8);
    }
  }

  &__row {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    align-self: center;
  }

  &__icon {
    color: $red-light;
    width: 3.5rem;
    flex-shrink: 0;

    @container (min-width: 35rem) {
      width: 2.5rem;
    }
  }

  &__heading {
    color: #fee7ef;
    font-family: var(--font-system);
    font-size: 2.25rem;
    font-weight: 500;
    text-align: center;
  }

  &__meta {
    display: block;
    font-family: Inter;
    font-weight: 400;
    line-height: 150%;
    margin-top: 1rem;
    // text-align: center;
    hyphens: auto;
  }
}

.fact {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  background: $violet-darker;
  padding: 10rem;
  align-items: center;
  text-align: center;
  gap: 5rem;

  @include respond(tab-land) {
    flex-flow: row nowrap;
    gap: initial;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    font-family: "Poppins";
  }

  &__count {
    font-family: "Poppins";

    font-size: 5rem;
    color: $yellow-dark;
    font-weight: 700;

    @include respond(tab-land) {
      font-size: 7rem;
    }

    &--bold {
      font-size: 10rem;

      @include respond(tab-land) {
        font-size: 15rem;
      }
    }
  }

  &__desc {
    font-family: "Lato";
    font-weight: 500;
    font-size: 3rem;

    &--bold {
      font-size: 4rem;
    }
  }

  &__right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8rem 4rem;
  }
}

.call {
  @extend %padding;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &__heading {
    @extend %heading;
    margin-block: 0rem;
  }

  &__meta {
    line-height: 1.5;
    font-size: 1.6rem;
    margin-block-end: 5rem;
    hyphens: auto;

    @include respond(desktop) {
      font-size: 1.8rem;
      max-width: 110rem;
      margin-inline: auto;
      text-align: center;
      hyphens: none;
    }
  }

  &__blocks {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 5rem;

    @include respond(desktop) {
      justify-content: space-between;
    }
  }

  &__block {
    max-width: 55rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem 3.5rem;
    border-radius: 0.5rem;
    backdrop-filter: contrast(0.9);
    transition: backdrop-filter 0.3s ease-out;

    &:hover {
      backdrop-filter: contrast(0.8);
    }
  }

  &__head {
    @extend %heading;
    font-size: 2.25rem;
    text-align: left;

    @include respond(desktop) {
      font-size: 3rem;
    }
  }

  &__info {
    font-family: Inter;
    font-weight: 400;
    line-height: 150%;
  }

  a.call__cta {
    margin-left: 0;
    align-self: flex-start;
    margin-top: auto;
  }
}

.gallery {
  background: $violet-darker;
  @extend %padding;

  &__title {
    @extend %heading;
    margin-block: 2rem 10rem;
  }

  &__grid {
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    @include respond(desktop) {
      grid-template-columns: repeat(9, 1fr);
      display: grid;
      grid-auto-rows: 25rem;
    }
  }

  &__img {
    height: 100%;
    width: 100%;
    object-fit: cover;

    @include respond(desktop) {
      &:nth-child(1),
      &:nth-child(20) {
        grid-column: span 4;
      }
      &:nth-child(2),
      &:nth-child(6) {
        grid-column: span 3;
        grid-row: span 2;
      }
      &:nth-child(3),
      &:nth-child(16) {
        grid-column: span 2;
        grid-row: span 3;
      }
      &:nth-child(4) {
        grid-column: span 2;
        grid-row: span 3;
      }
      &:nth-child(5),
      &:nth-child(13),
      &:nth-child(11) {
        grid-column: span 2;
      }
      &:nth-child(7),
      &:nth-child(10) {
        grid-column: span 2;
        grid-row: span 2;
      }
      &:nth-child(8),
      &:nth-child(9),
      &:nth-child(16) {
        grid-column: span 2;
        grid-row: span 2;
      }
      &:nth-child(14),
      &:nth-child(17) {
        grid-column: span 3;
      }
      &:nth-child(15),
      &:nth-child(19) {
        grid-column: span 3;
      }
      &:nth-child(16) {
        grid-row: span 1;
        grid-column: span 3;
      }
    }
  }
}

.feature {
  @extend %padding;
  padding-inline: 5rem;
  overflow-x: hidden;
  --gap: 2rem;

  &__heading {
    @extend %heading;
    padding-block: 2rem 5rem;
  }

  &__marquee {
    display: flex;
    flex-flow: row wrap;
    gap: var(--gap);
    width: 100%;
    justify-content: space-between;
  }

  &__figure {
    @include respond(desktop) {
      flex-basis: calc(
        (100% - var(--gap) * (var(--articles) - 1)) / var(--articles)
      );
    }
  }

  &__caption {
    text-align: center;
    padding-block: 1rem;
  }

  &__news {
    width: 100%;
    border-radius: 0.5rem;
    height: calc(100% - (2rem * 2) - 1em);
  }
}
</style>
