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
          <div class="work__row">
            <font-awesome-icon class="work__icon" :icon="['fas', w.icon]" />
            <h3 class="work__heading">{{ w.title }}</h3>
          </div>
          <p class="work__meta">{{ w.description }}</p>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="contact">
        <div class="contact__left">
          <h2 class="contact__heading">Contact Us</h2>
          <p class="contact__meta">
            If you would like to know more about our initiatives, volunteer
            opportunities, or how you can contribute contact us at
            <a class="contact__mail" href="mailto:contact@maulifoundation.org">
              contact@maulifoundation.org </a
            >. Join hands with Mauli Foundation as we work towards building a
            more inclusive and compassionate world for all. Remember, every
            small act of kindness counts. Together, we can be the change these
            lives deserve.
          </p>
          <div class="contact__social">
            <span class="contact__social-heading">Connect with me on: </span>
            <div class="contact__links">
              <nuxt-link
                :to="social.link"
                target="_new"
                v-for="social in socialLinks"
              >
                <font-awesome-icon
                  class="contact__icon"
                  size="2x"
                  :icon="['fab', social.icon]"
                />
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="contact__right">
          <form
            method="post"
            ref="form"
            class="form"
            @submit.prevent="submitHandler"
          >
            <div class="form__field">
              <input
                name="name"
                id="name"
                class="form__input"
                placeholder=" "
              />
              <label for="name" class="form__label">Name</label>
            </div>
            <div class="form__field">
              <input
                name="email"
                id="email"
                type="email"
                class="form__input"
                placeholder=" "
              />
              <label for="email" class="form__label">Email</label>
            </div>
            <div class="form__field">
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder=" "
                class="form__input"
              />
              <label class="form__label" for="message">Message</label>
            </div>
            <button type="submit" class="cta form__cta">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <div class="container-fluid footer">
      <h3 class="footer__note">
        Crafted with <span class="footer__emoji">💖</span> by krypton
        <span class="footer__emoji">👨‍💻</span>
      </h3>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    {
      const work = [
        {
          title: "Food, Shelter & Care",
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
          title: "Community & Support",
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
  padding: 7vh 7.5vw 10rem;

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
    flex: 0 0 24%;
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
    position: relative;
  }

  &__meta {
    display: block;
    font-family: Inter;
    font-weight: 400;
    line-height: 150%;
    margin-top: 1rem;
    hyphens: auto;
  }
}

.contact {
  display: flex;
  flex-flow: column nowrap;
  padding: 5rem 1.5rem;
  max-width: 110rem;
  margin-inline: auto;

  @include respond(desktop) {
    flex-flow: row wrap;
    padding-block: 12.5rem 7.5rem;
  }

  &__left {
    flex: 0 0 50%;
  }

  &__heading {
    color: $color-secondary;
    letter-spacing: 0.125rem;
    margin-bottom: 2rem;
    font-size: 5rem;
    text-align: left;
    font-family: Poppins;
  }

  &__meta {
    line-height: 1.5;
    width: clamp(30ch, 80%, 70rem);
  }

  &__mail {
    color: $blue-dark-2;
    text-decoration: none;
  }

  &__social {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  &__links {
    display: flex;
    gap: 1rem;
    margin-block: 0.5rem;
    align-items: center;
  }

  &__icon {
    color: $color-secondary;
  }

  &__fig {
    width: 100%;
    overflow: hidden;
    display: block;
  }

  &__avatar {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
  }

  &__right {
    flex: 0 0 50%;
  }
}

.container-fluid:has(.contact) {
  background: $violet-darker;
}

.form {
  display: flex;
  flex-flow: column;
  gap: 3.5rem;
  margin-top: 5rem;
  max-width: 100%;

  @include respond(desktop) {
    margin-top: 0;
  }

  &__field {
    position: relative;
    --left: 2rem;
  }

  &__input {
    font-size: 1.6rem;
    width: 100%;
    padding: 1rem var(--left);
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid transparentize($color: $color-secondary-2, $amount: 0.5);
    color: $red-light;

    &:focus-visible {
      outline: 2px solid
        transparentize($color: $color-secondary-2, $amount: 0.5);
    }

    &:focus + .form__label {
      top: -1.5rem;
      left: 0;
      font-size: 1.4rem;
    }
  }

  &__label {
    position: absolute;
    top: 2rem;
    transform: translateY(-50%);
    left: var(--left);
    font-size: 1.6rem;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  &__input:not(:placeholder-shown) + label {
    top: -1.5rem;
    left: 0;
    font-size: 1.4rem;
  }

  &__cta {
    align-self: center;
    background-color: $color-secondary;
  }
}

.footer {
  background-color: $violet-darker;
  padding: 2rem 1.5rem;

  &__note {
    text-align: center;
    font-size: 2rem;
    font-family: var(--font-system);
    font-weight: 400;
    line-height: 1.5;
  }

  &__emoji {
    font-size: 0.8em;

    &:first-child {
      animation: infinite sparkle 3s;
    }
  }
}
</style>
